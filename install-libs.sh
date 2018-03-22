#!/bin/bash

FA_VERSION=5.0.8

# Bulma.css and Vue.js
npm install bulma vue
mv node_modules/bulma/css/bulma.css libs/bulma.css
mv node_modules/vue/dist/vue.min.js libs/vue.js
rm -r node_modules
rm package-lock.json

# Fontawesome
wget https://use.fontawesome.com/releases/v$FA_VERSION/fontawesome-free-$FA_VERSION.zip
unzip fontawesome-free-$FA_VERSION.zip
rm fontawesome-free-$FA_VERSION.zip
mv fontawesome-free-$FA_VERSION/svg-with-js/js/fontawesome-all.min.js libs/fontawesome-all.js
mv fontawesome-free-$FA_VERSION/svg-with-js/js/fontawesome.min.js libs/fontawesome.js
mv fontawesome-free-$FA_VERSION/svg-with-js/js/fa-brands.min.js libs/fa-brands.js
mv fontawesome-free-$FA_VERSION/svg-with-js/js/fa-regular.min.js libs/fa-regular.js
mv fontawesome-free-$FA_VERSION/svg-with-js/js/fa-solid.min.js libs/fa-solid.js
rm -r fontawesome-free-$FA_VERSION
