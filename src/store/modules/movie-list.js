import axios from 'axios'

const state = {
    listArr: []
}

// getters
const getters = {
    getShowList(state) {
        return state.listArr;
    }
}

// actions
const actions = {
    getShowList(context, params) {
        axios.get('http://api.tvmaze.com/search/shows?q=batman')
            .then(response => {
                if (response.status === 200) {
                    context.commit('setShowList', response.data)
                }
            })
    }
}

const mutations = {
    setShowList(state, data) {
        let rawData = data;

        for (let i = 0; i < rawData.length; i++) {
            let obj = rawData[i];
            obj.show.premiered = new Date(obj.show.premiered)
        }

        let sortedData = data.sort((a, b) => a.show.premiered - b.show.premiered)
        // sortedData = sortedData.reverse();
        state.listArr = sortedData;
    }
}

export default {
    namespaced: false,
    state,
    getters,
    actions,
    mutations
}
