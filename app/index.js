/**
 * Created by chang_su on 2017/5/15.
 */
import Vue from 'vue'
import App from './App.vue'

require('./style/normalize.css')
require('./style/app.css')
require ('./style/fontello/css/fontello.css')

/* eslint-disable no-new */
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App }
})
