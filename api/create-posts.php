<?php

require 'setup.php';

$title = isset($_POST['name']) ? $_POST['name'] : null;
$text = isset($_POST['text']) ? $_POST['text'] : null;
$duration = isset($_POST['duration']) ? $_POST['duration'] : null;

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

$stmt = db::execute($query, [$title, $text, $duration]);

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