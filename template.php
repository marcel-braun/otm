<?php

//This is copied to a subdir.
require_once('../config.php');

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
