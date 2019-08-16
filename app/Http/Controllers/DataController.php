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
		// map all rows as array of values
		$data = Data::all()->map(function($item) {
						    return array_values($item->toArray());
						})->toArray();
		return response()->json([
			'data' => $data
		]); 
	}
}
