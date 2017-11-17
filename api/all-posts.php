<?php

require 'setup.php';

$query = "
    SELECT `jobs`.*
    FROM `jobs`
    WHERE 1
";

$stmt = db::execute($query);
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$jobs = array();
foreach($stmt as $row)
{
    $jobs[] = $row;
}

$response = array(
    'status' => 'OK',
    'jobs' => $jobs
);

echo json_encode($response);
exit();