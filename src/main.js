import { createApp } from 'vue'
import Notifications from 'notiwind'
import App from './App.vue'

//import './assets/main.css'

import '../src/style.css'




createApp(App).use(Notifications).mount('#app')
