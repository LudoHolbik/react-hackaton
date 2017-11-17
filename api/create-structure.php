<?php

require 'setup.php';

$query = "
    CREATE TABLE IF NOT EXISTS `logs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(127) NULL COLLATE utf8_general_ci DEFAULT NULL,
    `text` varchar(127) NULL COLLATE utf8_general_ci DEFAULT NULL,
    `task_id` int NULL COLLATE utf8_general_ci DEFAULT NULL,
    `duration` varchar(127) NULL COLLATE utf8_general_ci DEFAULT NULL,
    `loged_at` datetime NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
    
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
    ";

$stmt = db::execute($query);

$query = "
    CREATE TABLE IF NOT EXISTS `task` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(127) NULL COLLATE utf8_general_ci DEFAULT NULL,
    PRIMARY KEY (`id`)
    
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
    ";

$stmt = db::execute($query);    

$seed = "
    INSERT INTO `logs` 
    (`id`, `name`, `text`, `task_id`, `duration`, `loged_at`) 
    VALUES
    (1, 'Job Jobs', 'Cleaned the toilet', '1', '5 minutes', '2017-01-01 00:01:00'),
    (2, 'Juan Carlos', 'Messed up the toilet', '1', '1 minute', '2017-01-01 00:00:50')
    ";

$stmt = db::execute($seed);

$seed = "
    INSERT INTO `task` 
    (`id`, `name`) 
    VALUES
    (1, 'Toilet services'),
    (2, 'Ride of The Valkyries')
    ";

$stmt = db::execute($seed);

$response = array(
    'status' => 'OK'
);

echo json_encode($response);
exit();