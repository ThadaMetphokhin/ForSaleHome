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
    TH: {
        Navbar: {
            menu1: 'หน้าบ้าน',
            menu2: {
                title: 'ห้องนอน',
                room1: 'ห้องนอน 1',
                room2: 'ห้องนอน 2',
            },
            menu3: 'โถงกลางบ้าน',
            menu4: 'ห้องน้ำในตัวบ้าน',
            menu5: 'ห้องครัว',
            menu6: 'แผนที่'
        },
        Information: {
            topicheader: 'รายละเอียดทั่วไป',
            Topic: {
                topic1: 'ห้องทั้งหมด',
                topic2: 'สถานที่ใกล้เคียง',
                topic3: 'ห่างจากตัวเมืองพะเยา'
            },
            textinformaiton: {
                text1: 'ห้องนอน 2',
                text2: 'ห้องน้ำ 1',
                text3: 'โรงพยาบาลจุน',
                text4: 'ตลาดเพิ่มทรัพย์',
                text5: 'โลตัส โกเฟรช ซู เปอร์มาร์เก็ต จุน',
                text6: '40 กิโลเมตร'
            },
            price: 'ราคา 1.8 ล้านบาท'
        },
        SectionInfor: {
            Topic1: {
                topic1: 'รายละเอียด',
                list1: 'แอร์ 1 ตัว',
                list2: 'พัดลม 3 ตัว',
                list3: 'ไฟ 4 ดวง',
            },
            Topic2: {
                topic2: 'รายละเอียด',
                list1: 'แอร์ 1 ตัว',
                list2: 'พัดลม 1 ตัว',
                list3: 'ไฟ 1 ดวง',
            },
            Topic3: {
                topic3: 'รายละเอียด',
                list1: 'แอร์ 1 ตัว',
                list2: 'พัดลม 1 ตัว',
                list3: 'ไฟ 1 ดวง',
            },
            Topic4: {
                topic4: 'รายละเอียด',
                list1: 'พัดลม 1 ตัว',
                list2: 'ไฟ 1 ดวง',
            },
            Topic5: {
                topic5: 'รายละเอียด',
                list1: 'ไฟ 1 ดวง',
                list2: 'เครื่องทำน้ำอุ่น',

            },
            Topic6: {
                topic6: 'รายละเอียด',
                list1: 'เคาน์เตอร์ห้องครัว',
                list2: 'ซิงค์ล้างจาน',
                list3: 'พัดลม 1 ตัว',
                list4: 'ไฟ 1 ดวง',
            }
        }
    },
    EN: {
        Navbar: {
            menu1: 'Front Home',
            menu2: {
                title: 'BedRoom',
                room1: 'BedRoom 1',
                room2: 'BedRoom 2',
            },
            menu3: 'Hallway',
            menu4: 'House Bathroom',
            menu5: 'Kitchen Room',
            menu6: 'Maps'
        },
        Information: {
            topicheader: 'General details',
            Topic: {
                topic1: 'All Room',
                topic2: 'Nearby places',
                topic3: 'Away from the city of Phayao'
            },
            textinformaiton: {
                text1: 'BedRoom 2',
                text2: 'BathRoom 1',
                text3: 'Chun Hospital',
                text4: 'Permsap Market',
                text5: 'Lotus Go Fresh Super Market Jun',
                text6: '40 kilometor'
            },
            price: 'price 1.8 million baht'
        },
        SectionInfor: {
            Topic1: {
                topic1: 'Details',
                list1: 'Air conditioner 1 ',
                list2: 'Fan 3 ',
                list3: 'Light 4 ',
            },
            Topic2: {
                topic2: 'Details',
                list1: 'Air conditioner  1 ',
                list2: 'Fan 1 ',
                list3: 'Light 1 ',
            },
            Topic3: {
                topic3: 'Details',
                list1: 'Air Conditioner 1 ',
                list2: 'Fan 1 ',
                list3: 'Light 1 ',
            },
            Topic4: {
                topic4: 'Details',
                list1: 'Fan 1 ',
                list2: 'Light 1 ',
            },
            Topic5: {
                topic5: 'Details',
                list1: 'Light 1 ',
                list2: 'Water Heater',

            },
            Topic6: {
                topic6: 'Details',
                list1: 'Kitchen Counter',
                list2: 'Sink',
                list3: 'Fan 1 ',
                list4: 'Light 1 ',
            }
        }
    }
}
// Create VueI18n instance with options
const i18n = createI18n({
    legacy: false,
    locale: 'TH', // set locale
    fallbackLocale: 'EN',
    globalInjection: true,
    messages, // set locale messages
})

inject()
const app = createApp(App)
app.component('fa', FontAwesomeIcon)
app.use(router)
app.use(PrimeVue)
app.use(Antd)
app.use(i18n)
app.mount('#app')
