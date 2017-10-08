<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta property="og:title" content="You get a Message on Telegraf"/>
    <meta property="og:description" content="Click here to read your Secure, One Time Message"/>
    <meta property="og:url" content="http://otm.marcel-braun.de"/>
    <meta property="og:image" content="http://otm.marcel-braun.de/images/Icon-128.png"/>

    <title><?= $this->e($title) ?></title>

    <link href="/css/custom.css" rel="stylesheet">
    <!-- Bootstrap -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<div class="container" style="padding-top: 100px">
    <?= $content ?>
</div>

<?php if ($error): ?>
    <div class="alert alert-danger center-div" role="alert">
        <?= $this->e($error) ?>
    </div>
<?php endif ?>

<!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
</body>
</html>