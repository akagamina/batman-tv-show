import axios from 'axios'

const state = {
    detailData: []
}

// getters
const getters = {
    getDetail(state) {
        return state.detailData;
    }
}

// actions
const actions = {
    getDetail(context, params) {
        axios.get('http://api.tvmaze.com/shows/' + params).then(response => {
            if(response.status === 200){
                context.commit('setShowDetails', response.data);
            }
        })
    }
}

// mutations
const mutations = {
    setShowDetails(state, data) {
        state.detailData = data;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}
