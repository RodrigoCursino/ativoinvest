require('./bootstrap');

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'


window.Vue = require('vue');



// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Helpers
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
    theme: {
        primary: colors.red.darken1, // #E53935
        secondary: colors.red.lighten4, // #FFCDD2
        accent: colors.indigo.base // #3F51B5
    }
})
const app = new Vue({
    el: '#app',
    data () {
        return {
            hello: 'Hello World'
        }
    },
});