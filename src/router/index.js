import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

// const routes = [{
//     path: '/auth/register',
//     name: 'Register',
//     component: () => import('@/views/auth/Register')
// }, {
//     path: '/',
//     name: 'Home',
//     component: () => import('@/views/Home')
// }, {
//     path: '*',
//     redirect: '/'
// }]

const router = new Router({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes
})

router.beforeEach((to, from, next)=> {
    // router访问store
    const app = router.app
    const store = app.$options.store
    const auth = store.state.auth

    app.$message.hide()

    // const auth = router.app.$options.store.state.auth
    if ((auth && to.path.indexOf('/auth/') !== -1) ||
    (!auth && to.meta.auth)) {
        next('/')
    } else {
        next()
    }
})

export default router