const submit = () => {
  request('POST file', 'upload-image', {
    file: document.getElementById('file').files[0],
    name: document.getElementById('name').value,
    userId: localStorage.getItem('userId'),
    authToken: localStorage.getItem('authToken')
  }, res => {
    console.log(res);
    if (res) {
      location = `/?${document.getElementById('name').value}`;
    }
  });
}
