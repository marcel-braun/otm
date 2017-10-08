<?php
require_once('config.php');
require_once('lib.php');

use Michelf\Markdown;

$folder = $_GET["folder"];
$password = $_POST["password"];

$key = md5($defaultEncryptionKey);
$iv = md5($defaultEncryptionKey);

// Abbrechen wenn der Ordner nicht existiert
if (!is_dir(MESSAGE_DIR . $folder)) {
    header("Location: /404");
    exit;
}

// Prüfung ob ein Password Flag vorhanden ist
if (file_exists(MESSAGE_DIR . $folder . "/key")) {
    if (isset($password)) {
        $key = md5($password);
        $iv = md5($password);
    } else {
        header("Location: /prompt/$folder");
        exit;
    }
}

// Nachricht entschlüsseln
$iv = substr($iv, 0, 16);
$crypted_message = file_get_contents(MESSAGE_DIR . $folder . "/message");
$uncrypted_message = openssl_decrypt($crypted_message, "aes-256-cbc", $key, 0, $iv);

$uncrypted_message = Markdown::defaultTransform($uncrypted_message);

// Abbrechen wenn die Nachricht leer ist, also nicht entschlüsselt werden konnte.
if (empty($uncrypted_message)) {
    header("Location: /prompt/$folder");
    exit;
}

// Nach erfolgreicher entschlüsselung den Ordner löschen.
$mask = MESSAGE_DIR . $folder . "/*";
array_map( "unlink", glob( $mask ) );
rmdir(MESSAGE_DIR . $folder);

$content = $templates->render("read", ["message" => $uncrypted_message]);

echo $templates->render("main", [
        "title" => "Telegraf - Secure, One Time Message",
        "content" => $content,
        "error" => "Remember, this message has been deleted. After closing this window you can't read the message again!"
    ]
);
