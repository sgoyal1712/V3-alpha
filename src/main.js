import { createApp } from 'vue'
import Vuetify from './plugins/vuetify'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(Vuetify)
app.use(router)

app.mount('#app')
