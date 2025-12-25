import { createApp } from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from "./router/index.ts";
import Aura from '@primeuix/themes/aura';

const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.use(router);
app.mount('#app');
