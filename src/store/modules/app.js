import Vue from 'vue'
// import { lsGet, lsSet } from '@/lib/localStorage'
import vettedTokenList from '@/config/vetted_tokenlist'

const state = {
    tokenFilterList: [],
    vettedTokenListData: vettedTokenList.tokens,
}

const mutations = {
    TOKEN_FILTER_LIST(_state, payload) {
        Vue.set(_state, 'tokenFilterList', payload)
    },
    // VETTED_TOKEN_LIST_DATA(_state, payload) {
    //     Vue.set(_state, 'vettedTokenListData', payload)
    // },
}
const actions = {}

export default {
    state,
    mutations,
    actions,
}
