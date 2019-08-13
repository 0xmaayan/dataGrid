<?php

namespace App\Imports;

use App\Data;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class DataImport implements ToModel, WithStartRow
{

	public function model(array $row)
	{
		return new Data([
			'PassengerId'     => $row[0],
			'Pclass'    => $row[1], 
			'Name' => $row[2],
			'Sex' => $row[3],
			'Age' => $row[4],
			'SibSp' => $row[5],
			'Parch' => $row[6],
			'Ticket' => $row[7],
			'Fare' => $row[8],
			'Cabin' => $row[9],
			'Embarked' => $row[10],
		]);
	}

	/**
     * @return int
     */
   public function startRow(): int
    {
        return 2;
    }
}
