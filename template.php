<?php

//This is copied to a subdir.
require_once('../config.php');

header("Cache-Control: no-cache, no-store, must-revalidate");
header("Pragma: no-cache");
header("Expires: 0");

$created = filemtime('index.php');
$now = time();
$diffInSeconds = $now - $created;

if($diffInSeconds < $autoDestroyDelayInSeconds) {
  echo '<html><title>OTM with '.$diffInSeconds.' seconds</title><link rel="stylesheet" href="../style.css">'.
    '<body><textarea>{payload}</textarea></body></html>';
}

$parentDir = basename(__DIR__);
unlink('index.php');
rmdir('../'.$parentDir);

 ?>
