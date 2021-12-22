import service from '../services/events-service';

const state = {
  events: {},
};

const mutations = {
  SET_RESOURCE: (state, payload) => {
    state.events = payload;
  }
};

const actions = {
  events({commit, dispatch}, params) {
    console.log(params);
    return service.get(params)
      .then((events) => {
        console.log(events.data.data);
        commit('SET_RESOURCE', events.data.data);
      });
  },
  eventsByDate({commit, dispatch}, params) {
    console.log(params);
    return service.get(params)
      .then((events) => {
        console.log(events.data.data);
        commit('SET_RESOURCE', events.data.data);
      });
  },
};

const getters = {
  events: state => state.events
};

const events = {
  state,
  getters,
  actions,
  mutations
};

export default events;