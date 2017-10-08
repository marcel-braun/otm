<?php
require 'vendor/autoload.php';

// Create new Plates instance
$templates = new League\Plates\Engine('templates');

$accessToken = "b8a99727bfe27e085c371292056e1ff2";
$defaultEncryptionKey = "MegaEncryption1985&123!";
$autoDestroyDelayInSeconds = 120;

define("MESSAGE_DIR", "messages/")
?>
