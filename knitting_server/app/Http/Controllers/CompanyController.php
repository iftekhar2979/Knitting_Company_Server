<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    public function show($id)
    {
        $company = Company::with('buyers')->find($id);
        if ($company) {
            return response()->json($company);
        }
        return response()->json(['message' => 'Company not found'], 404);
    }

    public function index()
    {
        $companies = Company::with('buyers')->get();
        return response()->json($companies);
    }

    public function store(Request $request)
    {
        try {
            $company = Company::create($request->all());
            return response()->json($company);
        } catch (\Illuminate\Database\QueryException $e) {
            if ($e->errorInfo[1] == 1062) {
                return response()->json('Company Email Should be Unique', 400);
            }
            return response()->json($e->getMessage(), 400);
        }
    }

    public function update(Request $request, $id)
    {
        $company = Company::find($id);
        if ($company) {
            $company->update($request->all());
            return response()->json(['isUpdated' => true, 'updateCompany' => $company]);
        }
        return response()->json(['isUpdated' => false, 'error' => 'Company not found'], 404);
    }

    public function destroy($id)
    {
        $company = Company::find($id);
        if ($company) {
            $company->delete();
            return response()->json(['isDeleted' => true, 'removeCompany' => $company]);
        }
        return response()->json(['isDeleted' => false, 'error' => 'Company not found'], 404);
    }
}
