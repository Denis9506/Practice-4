import { router } from './router.js';
// import { header } from './widgets/header.js';
// import { search } from './widgets/search.js';
// import { popup } from './widgets/popup.js';
// import { msg } from './widgets/msg.js';
// import { toogle } from './widgets/toogle.js'; 
// import { img } from './widgets/img.js';

document.addEventListener('DOMContentLoaded',function(){
    const main = {
        data(){
            return {
                // url:"http://affiliate.yanbasok.com",
                // user:{name:"",phone:"",email:"",date:"",auth},
                // formData:{},
                // title:"",
                // date:"",
                // time:"",
            }
        },
        watch:{
            $router:function(){
                this.init();
            }
        },
        mounted:function(){
            this.init();
        },
        methods:{
            init(){

            }
        }
    };
    var app = Vue.createApp(main)
    // .component('Header', header)
    // .component('popup', popup)
    // .component('search', search)
    // .component('msg', msg)
    // .component('toogle', toogle)
    // .component('Image', img)
    .use(router)
    .mount('#content');
})