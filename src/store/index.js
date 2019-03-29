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

    [types.UPDATE_AUTH](state, auth){
        state.auth = auth;
        ls.setItem('auth', auth)
    }
}

const actions = {
    login({commit}, user) {
        if (user) {
            commit(types.UPDATE_USER, user)
            commit(types.UPDATE_AUTH, true)
            router.push('/')
        }
    },

    logout({commit}) {
        commit(types.UPDATE_AUTH, false)
        router.push({
            name: 'Home',
            params: {
                logout: true
            }
        })
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store