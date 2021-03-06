import Vue from 'vue'
import Vuex from 'vuex'
import home from './home/index'
import plate from './plate/index'
import radar from './radar/index'
import app from './app/index'

Vue.use(Vuex)

export default new Vuex.Store({
  //模块化
  modules: {
      home,
      plate,
      radar,
      app
    }
})
