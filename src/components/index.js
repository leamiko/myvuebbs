import Vue from 'vue'
import Message from './Message'
import Modal from './Modal'
import Pagination from './Pagination'

// Vue.component('Message', Message)
// Vue.component('Modal', Modal)

const components = {
    Message,
    Modal,
    Pagination
}

for (const [key, value] of Object.entries(components)) {
    Vue.component(key, value)
}