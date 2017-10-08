<?php
require_once "config.php";

$folder = $_GET["folder"];

$content = $templates->render("preview", ["folder" => $folder]);
echo $templates->render("main", ["title" => "Das ist ein Test", "content" => $content]);