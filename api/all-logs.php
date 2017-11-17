<?php

require 'setup.php';

$query = "
    SELECT `logs`.*
    FROM `logs`
    WHERE 1
";

$stmt = db::execute($query);
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$logs = array();
foreach($stmt as $row)
{
    $logs[] = $row;
}

$response = array(
    'status' => 'OK',
    'logs' => $logs
);

echo json_encode($response);
exit();