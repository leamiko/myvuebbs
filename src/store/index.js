import Vue from 'vue'
import Vuex from 'vuex'
import ls from '../utils/localStorage'
import router from '@/router'
import * as types from './mutation-types'
// import router from '../router'

Vue.use(Vuex)

const state = {
    user: ls.getItem('user'),
    auth: ls.getItem('auth')
}

const mutations = {
    [types.UPDATE_USER](state, user) {
        state.user = user
        ls.setItem('user', user)
    },

    [types.UPDATE_AUTH](state, auth) {
        state.auth = auth;
        ls.setItem('auth', auth)
    }
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
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store