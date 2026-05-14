<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    private const COMPANY_FIELDS = [
        'companyName',
        'location',
        'email',
        'contact',
        'shortForm',
    ];

    public function show($id)
    {
        try {
            $company = Company::with('buyers')->find($id);

            if (!$company) {
                return response()->json(['message' => 'Company not found'], 404);
            }

            return response()->json($company);
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 400);
        }
    }

    public function index()
    {
        try {
            $companies = Company::with('buyers')->get();
            return response()->json($companies);
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 400);
        }
    }

    public function store(Request $request)
    {
        try {
            $company = Company::create($this->companyData($request));
            return response()->json($company);
        } catch (QueryException $e) {
            if ($this->isDuplicateKeyException($e)) {
                return response()->json('Company Email Should be Unique', 400);
            }
            return response()->json($e->getMessage(), 400);
        } catch (\Throwable $e) {
            return response()->json($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            $company = Company::find($id);

            if (!$company) {
                return response()->json(['isUpdated' => false, 'error' => 'Company not found'], 404);
            }

            $company->update($this->companyData($request));
            $company->refresh();

            return response()->json(['isUpdated' => true, 'updateCompany' => $company]);
        } catch (QueryException $e) {
            return response()->json(['isUpdated' => false, 'error' => $e->getMessage()], 400);
        } catch (\Throwable $e) {
            return response()->json(['isUpdated' => false, 'error' => $e->getMessage()], 400);
        }
    }

    public function destroy($id)
    {
        try {
            $company = Company::find($id);

            if (!$company) {
                return response()->json(['isDeleted' => false, 'error' => 'Company not found'], 404);
            }

            $company->delete();
            return response()->json(['isDeleted' => true, 'removeCompany' => $company]);
        } catch (\Throwable $e) {
            return response()->json(['isDeleted' => false, 'error' => $e->getMessage()], 400);
        }
    }

    private function companyData(Request $request): array
    {
        return $request->only(self::COMPANY_FIELDS);
    }

    private function isDuplicateKeyException(QueryException $e): bool
    {
        return $e->getCode() === '23000'
            || ($e->errorInfo[1] ?? null) === 1062
            || str_contains(strtolower($e->getMessage()), 'unique constraint');
    }
}
