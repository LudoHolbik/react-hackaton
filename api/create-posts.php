<?php

require 'setup.php';

$title = isset($_POST['firstname']) ? $_POST['firstname'] : null;
$text = isset($_POST['desc']) ? $_POST['desc'] : null;
$duration = isset($_POST['Time']) ? $_POST['Time'] : null;

if(!trim($text))
{
    $response = array(
        'status' => 'error',
        'error' => 'The text must not be empty'
    );

    echo json_encode($response);
    exit();
}

$query = "
    INSERT INTO `logs`
    (`name`, `text`, `duration`)
    VALUES
    (?, ?, ?)
";

$stmt = db::execute($query, [$title, $text, $duration, date('Y-m-d H:i:s')]);

$id = db::pdo()->lastInsertId();

$query = "
    SELECT *
    FROM `logs`
    WHERE `logs`.`id` = ?
";

$stmt = db::execute($query, [$id]);
$stmt->setFetchMode(PDO::FETCH_ASSOC);

$post = null;
foreach($stmt as $row)
{
    $post = $row;
}

$response = array(
    'status' => 'OK',
    'logs' => $post
);

echo json_encode($response);
exit();