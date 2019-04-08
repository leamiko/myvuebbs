import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '@/router'
import * as types from './mutation-types'
// import router from '../router'
import * as moreActions from './actions'
import * as moreGetters from './getters'

Vue.use(Vuex)

const state = {
    user: ls.getItem('user'),
    auth: ls.getItem('auth'),
    articles: ls.getItem('articles')
}

const getters = {
    getArticleById: (state) => (id) => {
        let articles = state.articles
        if (Array.isArray(articles)) {
            articles = articles.filter(article => parseInt(id) === parseInt(article.articleId))
            return articles.length ? articles[0] : null
        } else {
            return null
        }
    },

    // 混入 moreGetters, 你可以理解为 getters = Object.assign(getters, moreGetters)
    ...moreGetters
}

const mutations = {
    [types.UPDATE_USER](state, user) {
        state.user = user
        ls.setItem('user', user)
    },

    [types.UPDATE_AUTH](state, auth) {
        state.auth = auth;
        ls.setItem('auth', auth)
    },

    [types.UPDATE_ARTICLES](state, articles) {
        state.articles = articles;
        ls.setItem('articles', articles)
    },
}

const actions = {
    login({ commit }, user) {
        if (user) {
            commit(types.UPDATE_USER, user)
            commit(types.UPDATE_AUTH, true)
            router.push('/')
        }
    },

    logout({ commit }) {
        commit(types.UPDATE_AUTH, false)
        router.push({
            name: 'Home',
            params: {
                logout: true
            }
        })
    },

    // 更新用户信息
    updateUser({ state, commit }, user) {
        const stateUser = state.user
        if (stateUser && typeof stateUser === 'Object') {
            user = { ...stateUser, ...user } // 合并新旧个人信息，等价于 user = Object.assign({}, stateUser, user)
        }
        commit(types.UPDATE_USER, user)
    },

    ...moreActions // const actions = Object.assign(actions, moreActions)
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

export default store