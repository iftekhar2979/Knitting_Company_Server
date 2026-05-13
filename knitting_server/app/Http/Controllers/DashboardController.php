<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\FabricsType;
use App\Models\Order;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function popular()
    {
        $company = $this->topOrdersBy('companyName', 'company');
        $buyer = $this->topOrdersBy('buyerName', 'buyer');
        $fabric = $this->topOrdersBy('fabricsName', 'fabric');

        return response()->json([
            ['id' => 1501, 'category' => 'Company', 'listItem' => $this->formatPopular($company, 555)],
            ['id' => 1502, 'category' => 'Buyer', 'listItem' => $this->formatPopular($buyer, 566)],
            ['id' => 1503, 'category' => 'Fabrics', 'listItem' => $this->formatPopular($fabric, 569)],
        ]);
    }

    private function topOrdersBy(string $column, string $category)
    {
        return Order::selectRaw("$column as name, COUNT(id) as totalOrder, ? as category", [$category])
            ->groupBy($column)
            ->orderByDesc('totalOrder')
            ->limit(3)
            ->get();
    }

    private function formatPopular($items, int $offset)
    {
        return $items->values()->map(fn ($item, $index) => [
            'id' => $offset + $index,
            'title' => $item->name,
            'count' => (int) $item->totalOrder,
        ]);
    }

    public function unit()
    {
        $rows = Order::query()
            ->join('months as m', DB::raw('MONTH(orders.targetDate)'), '=', 'm.id')
            ->where('orders.targetDate', '>=', now()->subMonths(6))
            ->select('m.name as month')
            ->selectRaw("SUM(CASE WHEN orders.unit = 'Fabric' THEN 1 ELSE 0 END) as fabric")
            ->selectRaw("SUM(CASE WHEN orders.unit = 'knitting' THEN 1 ELSE 0 END) as knitting")
            ->groupBy('m.id', 'm.name')
            ->orderBy('m.id')
            ->get();

        return response()->json($rows);
    }

    public function fabric()
    {
        $top = Order::selectRaw('fabricsName as fabrics, COUNT(id) as totalOrder')
            ->groupBy('fabricsName')
            ->orderByDesc('totalOrder')
            ->limit(4)
            ->get();

        $topNames = $top->pluck('fabrics');
        $otherTotal = Order::whereNotIn('fabricsName', $topNames)->count();
        $items = $top->map(fn ($item) => ['fabrics' => $item->fabrics, 'totalOrder' => (int) $item->totalOrder]);
        $items->push(['fabrics' => 'Other', 'totalOrder' => $otherTotal]);

        $colors = ['#2a8ae3', '#b589e6', '#9f16a8', '#d5e85f', '#264d71'];
        $chartData = $items->values()->map(fn ($item, $index) => [
            'fabrics' => $item['fabrics'],
            'totalOrder' => $item['totalOrder'],
            'fill' => $colors[$index % count($colors)],
        ]);

        $chartConfig = ['fabrics' => ['label' => 'Fabrics']];
        foreach ($items as $item) {
            $chartConfig[$item['fabrics']] = ['label' => $item['fabrics']];
        }

        return response()->json(['chartConfig' => $chartConfig, 'chartData' => $chartData]);
    }

    public function all(Request $request)
    {
        [$start, $end] = $this->dateRange($request->query('range'));

        return response()->json([
            'companyCount' => Company::whereBetween('created_at', [$start, $end])->count(),
            'fabricCount' => FabricsType::whereBetween('created_at', [$start, $end])->count(),
            'orderCount' => Order::whereBetween('created_at', [$start, $end])->count(),
        ]);
    }

    private function dateRange(?string $range): array
    {
        $now = Carbon::now();

        return match ($range) {
            'last24Hours' => [$now->copy()->subDay(), $now],
            'thisWeek' => [$now->copy()->startOfWeek(), $now],
            'thisMonth' => [$now->copy()->startOfMonth(), $now],
            'thisYear' => [$now->copy()->startOfYear(), $now],
            default => [Carbon::createFromTimestamp(0), $now],
        };
    }
}
