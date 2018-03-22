const submit = () => {
  request('POST', 'log-in', {
    username: document.getElementById('username').value,
    password: document.getElementById('password').value
  }, res => {
    console.log(res);
    if (res) {
      localStorage.setItem('userId', res.userId);
      localStorage.setItem('authToken', res._authToken);
      history.back();
    }
  });
}
