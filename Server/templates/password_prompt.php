<h1>This message is encrypted</h1>
<h4>Use the password that yout get from your Partner to decrypt the message.</h4>
<br>
<form method="POST" action="/read/<?=$this->e($folder)?>">
    <div class="form-group">
        <label for="password">Password</label>
        <input type="password" class="form-control" name="password" placeholder="Enter your password">
    </div>

    <button type="submit" class="btn btn-primary">Decrypt your message</button>
</form>