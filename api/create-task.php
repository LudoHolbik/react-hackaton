<?php

require 'setup.php';

$title = isset($_POST['task']) ? $_POST['task'] : null;


if(!trim($title))
{
    $response = array(
        'status' => 'error',
        'error' => 'The text must not be empty'
    );

    echo json_encode($response);
    exit();
}

$query = "
    INSERT INTO `task`
    (`name`)
    VALUES
    (?)
";

$stmt = db::execute($query, [$title]);

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