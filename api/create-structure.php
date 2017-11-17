<?php

require 'setup.php';

$query = "
    CREATE TABLE IF NOT EXISTS `jobs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(127) NULL COLLATE utf8_general_ci DEFAULT NULL,
    `text` text NULL COLLATE utf8_general_ci DEFAULT NULL,
    `start` datetime NULL DEFAULT NULL,
    `end` datetime NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
    
    ) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
";

$stmt = db::execute($query);

$seed = "
    INSERT INTO `jobs` 
    (`id`, `name`, `text`, `start`, `end`) 
    VALUES
    (1, 'Job Jobs', 'Cleaned the toilet', '2017-01-01 00:00:00', '2017-01-01 00:01:00'),
    (2, 'Juan Carlos', 'Messed up the toilet', '2017-01-01 00:00:00', '2017-01-01 00:00:50')
";

$stmt = db::execute($seed);

$response = array(
    'status' => 'OK'
);

echo json_encode($response);
exit();