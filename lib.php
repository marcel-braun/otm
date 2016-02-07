<?php

function generateRandomString($length = 3) {
  $characters = '0123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ';
  $charactersLength = strlen($characters);
  $randomString = '';
  for ($i = 0; $i < $length; $i++) {
    $randomString .= $characters[rand(0, $charactersLength - 1)];
  }
  return $randomString;
}

function findAndReplace($file, $searchString, $replaceWith) {
  $file_contents = file_get_contents($file);
  $file_contents = str_replace($searchString, $replaceWith, $file_contents);
  file_put_contents($file,$file_contents);
}

?>
