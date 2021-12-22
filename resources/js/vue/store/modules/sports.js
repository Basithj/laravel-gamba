import service from '../services/sports-service';

const state = {
  sports: {},
};

const mutations = {
  SET_RESOURCE: (state, payload) => {
    state.sports = payload;
  }
};

const actions = {
  sports({commit, dispatch}, params) {
    return service.get(params)
      .then((sports) => {
        //console.log(sports.data.data);
        localStorage.setItem('sports', JSON.stringify(sports.data.data));
        commit('SET_RESOURCE', sports.data.data);
      });
  },
};

const getters = {
  sports: state => state.sports
};

const sports = {
  state,
  getters,
  actions,
  mutations
};

export default sports;