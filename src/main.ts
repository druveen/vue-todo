import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import vuetify from './plugins/vuetify'
import 'vuetify/styles'; // Import Vuetify styles
import '@mdi/font/css/materialdesignicons.css'; // Import icons


createApp(App).use(vuetify).mount('#app')
