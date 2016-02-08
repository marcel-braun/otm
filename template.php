<?php

//This is copied to a subdir.
require_once('../config.php');

$created = filemtime('index.php');
$now = time();
$diffInSeconds = $now - $created;

if($diffInSeconds < $autoDestroyDelayInSeconds) {
  echo '{payload}';
}

$parentDir = basename(__DIR__);
unlink('index.php');
rmdir('../'.$parentDir);

 ?>
