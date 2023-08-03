//import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from "primevue/config";
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'
//ดึง Css ของ primevue เข้ามาใช้งานในโปรเจค
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faCircleArrowUp,faBars,faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret,faCircleArrowUp,faBars,faAngleDown)

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(PrimeVue)
app.use(Antd)
app.mount('#app')
