//import './assets/main.css'

import { createApp } from 'vue'
//import vercel analys
import { inject } from '@vercel/analytics';
import PrimeVue from "primevue/config";
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'

//import i18n package
import { createI18n } from 'vue-i18n'
//ดึง Css ของ primevue เข้ามาใช้งานในโปรเจค
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";

//import css icon primevue
import 'primeicons/primeicons.css';
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
    faUserSecret,
    faCircleArrowUp,
    faBars,
    faAngleDown,
    faPhoneVolume,
    faLocationDot,
    faHouseUser,
    faCarSide,
} from '@fortawesome/free-solid-svg-icons'
import { faLine } from '@fortawesome/free-brands-svg-icons'


library.add(
    faUserSecret,
    faCircleArrowUp,
    faBars,
    faAngleDown,
    faPhoneVolume,
    faLine,
    faLocationDot,
    faHouseUser,
    faCarSide,
)


// setting locale info used by global scope as an options
const messages = {
    th: {
        message: {
            menu1: 'หน้าบ้าน'
        }
    },
    ja: {
        message: {
            hello: 'こんにちは、世界'
        }
    }
}
// Create VueI18n instance with options
const i18n =  createI18n({
    locale: 'th', // set locale
    messages, // set locale messages
  })

inject()
const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(PrimeVue)
app.use(Antd)
app.mount('#app')
