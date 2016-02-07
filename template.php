<?php

echo '{payload}';

$parentDir = basename(__DIR__);
unlink('index.php');
rmdir('../'.$parentDir);

 ?>
