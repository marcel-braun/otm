<?php

require_once('config.php');
require_once('lib.php');


/*
$iv = openssl_random_pseudo_bytes(openssl_cipher_iv_length(AES_256_CBC));
$encrypted = openssl_encrypt($data, AES_256_CBC, $encryption_key, 0, $iv);
*/

$post = file_get_contents("php://input");
$json = json_decode($post);

$postAccessToken = $json->accessToken;
$postPayload = $json->message;
$password = $json->password;


if ($postAccessToken !== $accessToken) {
    http_response_code(401);
} else {
    $dirName = generateRandomString(8);

    mkdir($dirName);
    copy('template.php', $dirName . '/index.php');
    findAndReplace($dirName . '/index.php', '{payload}', addslashes($postPayload));

    $link = "https://" . $_SERVER['SERVER_NAME'] . "/" . $dirName;

    /**
     * JSON Output
     */
    header('content-type: application/json; charset=utf-8');
    header("access-control-allow-origin: *");

    $out = new JsonOut();
    $out->link = $link;

    echo json_encode($out);
}

Class Message
{
    public $AccessToken = "";
    public $Message = "";

    public function __construct()
    {

    }
}

Class JsonOut {
    public $link = "";
}

?>
