<?php
require_once('config.php');
require_once('lib.php');

$post = file_get_contents("php://input");
$json = json_decode($post);

$postAccessToken = $json->accessToken;
$message = $json->message;
$password = $json->password;

if(isset($postAccessToken) && isset($message)) {
    // Ordner wird erstellt
    $randomFolder = generateRandomString(8);
    $dirName = MESSAGE_DIR . $randomFolder;
    mkdir($dirName);

    // Password Flag wird gespeichert
    if(isset($password) && $password != "") {
        file_put_contents ($dirName . "/key", "true");

        // prepare AES encryption
        $key = md5($password);
        $iv = md5($password);
    } else {
        // prepare AES encryption
        $key = md5($defaultEncryptionKey);
        $iv = md5($defaultEncryptionKey);
    }

    $iv = substr($iv, 0, 16);

    $crypted_message = openssl_encrypt($message, "aes-256-cbc", $key, 0, $iv);

    // Nachricht wird gespeichert
    file_put_contents ($dirName . "/message", $crypted_message);

    // Link wird erstellt
    $link = "https://" . $_SERVER['SERVER_NAME'] . "/" . $randomFolder;

    /**
     * JSON Output
     */
    header('content-type: application/json; charset=utf-8');
    header("access-control-allow-origin: *");

    $out = new JsonOut();
    $out->link = $link;

    echo json_encode($out);
} else {
    http_response_code(401);
}

Class JsonOut {
    public $link = "";
}

