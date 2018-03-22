Vue.component('navigation-bar', {
  template: `<nav class="navbar is-fixed-top is-light">
  <div class="navbar-brand">
    <a class="navbar-item" href="/"><img src="/logo.png"></a>
    <div class="navbar-burger burger" id="nav-burger">
      <span></span><span></span><span></span>
    </div>
  </div>

  <div class="navbar-menu" id="nav-menu">
    <div class="navbar-start">
      <a class="navbar-item" href="/upload">Upload</a>
      <a class="navbar-item" href="https://github.com/instapapas">
        <span class="icon">
          <i class="fab fa-github"></i>
        </span>
        <span>GitHub</span>
      </a>
      <div class="navbar-item has-dropdown is-hoverable">
        <p class="navbar-link">More</p>
        <div class="navbar-dropdown is-boxed">
          <a class="navbar-item" href="/about">About</a>
          <a class="navbar-item" href="/stats">Statistics</a>
          <hr class="navbar-divider">
          <a class="navbar-item" href="/privacy-policy">Privacy policy</a>
          <a class="navbar-item" href="/terms-of-use">Terms of use</a>
        </div>
      </div>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <p class="control has-icons-right">
          <input type="search" class="input" placeholder="Search..." id="search">
          <a class="icon is-right">
            <i class="fa fa-search"></i>
          </a>
        </p>
      </div>
      <div class="navbar-item">
        <div class="field is-grouped">
          <p class="control">
            <a class="button" href="/signup">Sign up</a>
          </p>
          <p class="control">
            <a class="button is-info" href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  </div>
  </nav>`
});

new Vue({
  el: '#components'
});
