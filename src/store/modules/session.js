import { start } from "../../services/session";

const ls = localStorage.getItem("@AppVuex[session]");

// Initial state
const initial = {
    data: {
        is_authorized: false,
        token: null,
        user: {
            id: null,
            email: null,
            name: null,
            mobile_phone: null,
        },
    },
    error: null,
};

// State
const state = ls !== null ? { ...initial, data: JSON.parse(ls) } : initial;

// Getters
const getters = {
    isAuthorized: (state) => state.data.is_authorized === true,
    user: (state) => state.data.user,
};

// Actions
const actions = {
    async start({ commit }, payload) {
        try {
            const data = await start(payload.email, payload.password);
            commit("start", { ...data, is_authorized: true });
            localStorage.setItem(
                "@AppVuex[session]",
                JSON.stringify({
                    ...data,
                    is_authorized: true,
                })
            );
        } catch (error) {
            commit("setError", error.message);
            localStorage.removeItem("@AppVuex[session]");
        }
    },

    destroy({ commit }) {
        commit("destroy");
        localStorage.removeItem("@AppVuex[session]");
    },

    updateUserCurrentSession({ commit }, user) {
        commit("updateUserCurrentSession", user);
        const session = JSON.parse(localStorage.getItem("@AppVuex[session]"));
        const ns = { ...session, user };
        localStorage.setItem("@AppVuex[session]", JSON.stringify(ns));
    },
};

// Mutations
const mutations = {
    start(state, session) {
        state.data = session;
        state.error = null;
    },
    destroy(state) {
        state.error = null;
        const user = { id: null, name: null, email: null, mobile_phone: null };
        state.data = { is_authorized: false, token: null, user };
    },
    setError(state, error) {
        state.error = error;
        state.is_authorized = false;
    },
    updateUserCurrentSession(state, user) {
        state.error = false;
        state.data.user = user;
        state.data.is_authorized = true;
    },
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
