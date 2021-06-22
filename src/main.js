import { createApp } from 'vue';
import * as VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import { auth } from './includes/firebase';
import Icon from './directives/icon';
import './assets/tailwind.css';
import './assets/main.css';

let app;

// Wait for firebase to initialize before the app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App);
    app.use(VeeValidate);
    app.use(store);
    app.use(router);
    app.use(VeeValidatePlugin);
    app.directive('icon', Icon);

    app.mount('#app');
  }
});
