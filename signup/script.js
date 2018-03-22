const submit = () => {
  request('POST', 'sign-up', {
    username: document.getElementById('username').value,
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    confirmPassword: document.getElementById('confirm-password').value
  }, res => {
    console.log(res);
    if (res) {
      location = `/login`;
    }
  });
}
