import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import App from './App.vue'
import vuetify from './plugins/vuetify.js'
import '@mdi/font/css/materialdesignicons.css'

const app = createApp(App)

app.use(createPinia())
app.use(vuetify)

app.mount('#app')
