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

router.beforeEach((to, from, next) => {
    // router访问store
    const app = router.app
    const store = app.$options.store
    const auth = store.state.auth

    const articleId = to.params.articleId

    app.$message.hide()

    // const auth = router.app.$options.store.state.auth
    if ((auth && to.path.indexOf('/auth/') !== -1) ||
        (!auth && to.meta.auth) ||
        // 有 articleId 且不能找到与其对应的文章时，跳转到首页
        (articleId && !store.getters.getArticleById(articleId))) {
        next('/')
    } else {
        next()
    }
})

router.afterEach((to, from) => {
    const app = router.app
    const store = app.$options.store
    const showMsg = to.params.showMsg

    if (showMsg) {
        if (typeof showMsg === 'string') {
            app.$message.show(showMsg)
        } else {
            app.$message.show('操作成功')
        }
    }
})

export default router