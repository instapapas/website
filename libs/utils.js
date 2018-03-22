const API_URL = 'https://api.instapapas.matiascontilde.com/';
const IMG_URL = 'https://api.instapapas.matiascontilde.com/img/';

const request = (method, endpoint, data, callback) => {
  const xhr = new XMLHttpRequest();

  if (method === 'POST file') {
    xhr.open('POST', `${API_URL}${endpoint}`, true);
    // xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    let formData = new FormData();
    for (key in data) {
      formData.append(key, data[key]);
    }

    xhr.send(formData);
  } else {
    // Parse JSON to URLencoded
    let sendData = '';
    for (key in data) {
      sendData += `${key}=${data[key]}&`;
    }
    // Remove last '&'
    sendData = sendData.slice(0, -1);

    if (method === 'GET') {
      xhr.open('GET', `${API_URL}${endpoint}?${sendData}`, true);
    } else if (method === 'POST') {
      xhr.open('POST', `${API_URL}${endpoint}`, true);
    }

    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.send(sendData);
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      callback(JSON.parse(xhr.response));
    }
  };
};

window.onload = () => {
  const burger = document.getElementById('nav-burger');
  const menu = document.getElementById('nav-menu');

  burger.onclick = () => {
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  };

  window.onkeypress = e => {
    if (e.keyCode === 27) {
      burger.classList.remove('is-active');
      menu.classList.remove('is-active');
    }
  };

  document.getElementById('search').onkeypress = e => {
    if (e.keyCode === 13 && e.target.value.length > 0) {
      location = `/?${e.target.value}`;
    }
  };
};
