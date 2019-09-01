import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'
import movieListModule from './modules/movie-list'
import movieDetailModule from './modules/movie-detail'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []

export default function  () {
  return new Vuex.Store({
    modules: {
      movieList: movieListModule,
      movieDetail: movieDetailModule 
    },
    state: {},
    mutations: {},
    actions: {},
    strict: debug,
    plugins
  })
}
