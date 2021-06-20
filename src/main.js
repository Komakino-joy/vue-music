import { createApp } from 'vue';
import * as VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import VeeValidatePlugin from './includes/validation';
import './assets/tailwind.css';
import './assets/main.css';

const app = createApp(App);

app.use(VeeValidate);
app.use(store);
app.use(router);
app.use(VeeValidatePlugin);

app.mount('#app');
