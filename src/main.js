import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App).mount('#app')

app.config.errorHandler = (err, instance, info) => {
    console.error(err)
    console.info(info)
    console.log(instance)
}