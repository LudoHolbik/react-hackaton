<?php

require 'setup.php';

$query = "
    SELECT `task`.*
    FROM `task`
    WHERE 1
";

$stmt = db::execute($query);
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$tasks = array();
foreach($stmt as $row)
{
    $tasks[] = $row;
}

$response = array(
    'status' => 'OK',
    'tasks' => $tasks
);

echo json_encode($response);
exit();