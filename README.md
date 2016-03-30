# otm
one time message


Simple php script with allows to create an one time readable message from a post request.

## How it works / API
* send a post request to your endpoint with form-data "accessToken" and "payload". See `index.php` for code.
* if accessToken is equals to the one in `config.php` server's response will be the access path to your message send within payload.
* access path consists of three letters, technically it is a folder name with a copy of `template.php` renamed to `index.php`.
* access path works only once AND within timelimit configured in `config.php`.
* folder with content will be deleted immediatelly after first access, message will be printed only if within timeframe.
