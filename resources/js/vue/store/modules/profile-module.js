import service from '../services/profile-service';

const state = {
  user: {},
};

const mutations = {
  SET_RESOURCE: (state, me) => {
    state.me = me;
  }
};

const actions = {
  me({commit, dispatch}, params) {
    return service.get(params)
      .then((profile) => {
        console.log(profile.user);
        commit('SET_RESOURCE', profile.user);
      });
  },

  update({commit, dispatch}, params) {
    return service.update(params)
      .then((profile) => {
        commit('SET_RESOURCE', profile);
      });
  },
};

const getters = {
  me: state => state.user
};

const profile = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};

export default profile;