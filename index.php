<?php

require_once('config.php');
require_once('lib.php');

$postAccessToken = $_POST['accessToken'];
$postPayload = $_POST['payload'];

if($postAccessToken !== $accessToken) {
  http_response_code(401);
} else {
  $dirName = generateRandomString();

  mkdir($dirName);
  copy('template.php', $dirName.'/index.php');
  findAndReplace($dirName.'/index.php', '{payload}', addslashes($postPayload));

  echo $dirName;
}

?>
