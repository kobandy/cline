document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Password:', password);
    // ここにログイン処理を追加
});

// ユーザー名入力フィールドのフォーカスイベント
document.getElementById('username').addEventListener('focus', function() {
    if (this.value === 'ユーザ名') {
        this.value = '';
    }
});

// ユーザー名入力フィールドの入力イベント
document.getElementById('username').addEventListener('input', function() {
    if (this.value === 'ユーザ名') {
        this.value = '';
    }
});

// パスワード入力フィールドのフォーカスイベント
document.getElementById('password').addEventListener('focus', function() {
    if (this.value === 'パスワード') {
        this.value = '';
    }
});

// パスワード入力フィールドの入力イベント
document.getElementById('password').addEventListener('input', function() {
    if (this.value === 'パスワード') {
        this.value = '';
    }
});
