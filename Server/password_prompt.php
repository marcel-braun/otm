<?php
require_once "config.php";

$folder = $_GET["folder"];

$content = $templates->make("password_prompt", ["folder" => $folder]);
echo $templates->render("main", ["title" => "Das ist ein Test", "content" => $content]);