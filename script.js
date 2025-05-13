document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // ここにログイン処理を実装する
    console.log('ログイン処理:', username, password);
});
