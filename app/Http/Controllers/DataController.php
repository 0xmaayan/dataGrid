<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\DataImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Data;

class DataController extends Controller
{
	public function import(Request $request) 
	{
		Data::truncate();
		Excel::import(new DataImport, $request->file('data_file'));

		return response()->json([
			'success' => true
		]); 
	}
}
