<?php

require_once('lib.php');

$accessToken = $_POST['accessToken'];
$payload = $_POST['payload'];

$dirName = generateRandomString();

mkdir($dirName);
copy('template.php', $dirName.'/index.php');
findAndReplace($dirName.'/index.php', '{payload}', $payload);

echo $dirName;

?>
