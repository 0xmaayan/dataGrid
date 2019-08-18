<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\DataImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Data;

class DataController extends Controller
{
	public function update(Request $request, $id)
	{
		$data = $request->only('PassengerId','Pclass','Name','Sex','Age','SibSp','Parch','Ticket','Fare','Cabin','Embarked');
    $record = Data::where('PassengerId','=',$id);
   
    $updatedRecordSuccess = $record->update($data);
    return response()->json([
    	'success' => $updatedRecordSuccess
    ]);
	}
	public function import(Request $request) 
	{
		Data::truncate();
		Excel::import(new DataImport, $request->file('data_file'));
		// map all rows as array of values
		$data = Data::all()->toArray();
		
		return response()->json([
			'data' => $data
		]); 
	}
}
