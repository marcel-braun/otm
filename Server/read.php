<?php
require_once('config.php');
require_once('lib.php');

$folder = $_GET["folder"];
$password = $_POST["password"];

$key = md5($defaultEncryptionKey);
$iv = md5($defaultEncryptionKey);

// Abbrechen wenn der Ordner nicht existiert
if(!is_dir(MESSAGE_DIR . $folder)) {
    header("Location: /404");
    exit;
}

// Prüfung ob ein Password Flag vorhanden ist
if(file_exists(MESSAGE_DIR . $folder . "/key")) {
    if(isset($password)) {
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

// Abbrechen wenn die Nachricht leer ist, also nicht entschlüsselt werden konnte.
if(empty($uncrypted_message)) {
    header("Location: /prompt/$folder");
    exit;
}

// Nach erfolgreicher entschlüsselung den Ordner löschen.
$mask = MESSAGE_DIR . $folder . "/*";
array_map( "unlink", glob( $mask ) );
rmdir(MESSAGE_DIR . $folder);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Telegraf, One Time Message</title>

    <!-- Bootstrap -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container">
    <h3>Your encrypted message</h3>
    <h4><?php echo $uncrypted_message ?></h4>
</div>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Include all compiled plugins (below), or include individual files as needed -->
<!--<script src="js/bootstrap.min.js"></script>-->
</body>
</html>
