import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://www.mountainproject.com/data/"

const params = {
  //DONT DO THIS AT HOME KIDS
  //TODO remove after interview
  key: '200655334-ea379465d3371495c57a5b9fa8db9c63',
  lat: '48.85',
  lon: '2.34',
  maxResults: 5,
  maxDistance: 100
}

//export as actions to load into unit tests
export const actions = {
  loadCrags({commit}) {
    //I can see this getting a bit repetitive in a big app, should make a function to do this
    return Vue.axios.get('get-routes-for-lat-lon', {params}).then(result => {
      commit('GET_CRAGS', result.data.routes);
    }).catch(error => {
      throw new Error(`error ${error.status}`);
    });
  }
}

export default new Vuex.Store({
  state: {
    crags: []
  },
  actions,
  mutations: {
    GET_CRAGS(state, crags) {
      state.crags = crags;
    }
  }
})
