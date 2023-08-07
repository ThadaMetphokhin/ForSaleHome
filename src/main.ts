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
} from '@fortawesome/free-solid-svg-icons'
import {faLine} from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faCircleArrowUp, faBars, faAngleDown, faPhoneVolume,faLine)



// setting locale info used by global scope as an options
const i18n = createI18n({
    locale: 'TH',
    messages: {
        en: {
            message: {
                hello: 'hello world',
                greeting: 'good morning, world!'
            }
        },
        ja: {
            message: {
                hello: 'こんにちは、世界',
                greeting: 'おはよう、世界！'
            }
        }
    }
})

const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(PrimeVue,{icon:'lineicon'})
app.use(Antd)
app.use(i18n)
app.use(inject)
app.mount('#app')
