import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import UploadFoto from '../views/UploadFoto.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/upload-foto',
        name: 'UploadFoto',
        component: UploadFoto
    }, {
        path: '/detail/:userId',
        name: 'detail',
        component: Detail
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
