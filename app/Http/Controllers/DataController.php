<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Imports\DataImport;
use Maatwebsite\Excel\Facades\Excel;
use App\Data;

class DataController extends Controller
{
	public function store(Request $request){
		$data = $request->only('PassengerId','Pclass','Name','Sex','Age','SibSp','Parch','Ticket','Fare','Cabin','Embarked');
		$record = Data::create($data);

		return response()->json([
    	'data' => $record
    ]);
	}

	public function update(Request $request, $id)
	{
		$data = $request->only('PassengerId','Pclass','Name','Sex','Age','SibSp','Parch','Ticket','Fare','Cabin','Embarked');
    $record = Data::where('PassengerId','=',$id);
    $updatedRecord = $record->updateOrCreate(['PassengerId' => $request->PassengerId],$data);
   
    return response()->json([
    	'data' => $updatedRecord
    ]);
	}

	public function destroy(Request $request, $id)
	{
    $record = Data::where('PassengerId','=',$id);
    $deletedRecord = $record->delete();
   
    return response()->json([
    	'data' => $record
    ]);
	}

	public function import(Request $request) 
	{
		Data::truncate();
		Excel::import(new DataImport, $request->file('data_file'));

		$data = Data::all()->toArray();
		
		return response()->json([
			'data' => $data
		]); 
	}
}
