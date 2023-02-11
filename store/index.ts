﻿import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
    appLoaded: false,
    appLoadingFailed: false,
    sideMenu: true,
    discordLogin: false,
    modals: [],
});

let url = process.env.NODE_ENV === 'production' ? "https://api.daney.app/" : 'http://localhost:5000/';

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
    appLoaded: state => state.appLoaded,
    appLoadingFailed: state => state.appLoadingFailed,
    sideMenu: state => state.sideMenu,
    discordLogin: state => state.discordLogin,
    swaggerAxiosOptions() {
        return getSwaggerAxiosOptionsObj;
    },
}

export const mutations: MutationTree<RootState> = {
    SET_APP_LOADED: (state, appLoaded: boolean) => (state.appLoaded = appLoaded),
    SET_APP_LOADING_FAILED: (state, appLoadingFailed: boolean) => (state.appLoadingFailed = appLoadingFailed),
    SET_SIDE_MENU: (state, sideMenu: boolean) => (state.sideMenu = sideMenu),
    SET_DISCORD_LOGIN: (state, discordLogin: boolean) => (state.discordLogin = discordLogin),
    /*ADD_MODAL(state, modal) {
        state.modals.push(modal);
    },
    REMOVE_MODAL(state, modal) {
        const index = state.modals.indexOf(modal);
        if (index > -1)
            state.modals.slice(index, 1);
    },*/
}

export const actions: ActionTree<RootState, RootState> = {
    async setAppLoaded({ commit }, appLoaded: boolean) {
        commit('SET_APP_LOADED', appLoaded)
    },
    async setAppLoadingFailed({ commit }, appLoadingFailed: boolean) {
        commit('SET_APP_LOADING_FAILED', appLoadingFailed)
    },
    async setSideMenu({ commit }, sideMenu: boolean) {
        commit('SET_SIDE_MENU', sideMenu)
    },
    async setDiscordLogin({ commit }, discordLogin: boolean) {
        commit('SET_DISCORD_LOGIN', discordLogin)
    },
    /*ADD_MODAL(context, modal) {
        context.commit("ADD_MODAL", modal);
    },
    REMOVE_MODAL(context, modal) {
        context.commit("REMOVE_MODAL", modal);
    },*/
}

function getSwaggerAxiosOptions(): Configuration {
    const fingerprint = "";
    return {
        basePath: new URL(url).origin,
        accessToken: async () => {
            let token;
            if (localStorage.getItem("token") == null || localStorage.getItem("token") === "") {
                token = await getNewToken();
            } else {
                try {
                    token = await validateToken();
                } catch (e) {
                    token = await getNewToken();
                }
            }

            return token;
        },
        isJsonMime(mime: string): boolean {
            const jsonMime = new RegExp('^(application\/json|[^;/ \t]+\/[^;/ \t]+[+]json)[ \t]*(;.*)?$', 'i');
            return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === 'application/json-patch+json');
        }
    };
}

import axios from "axios";
import type {Configuration} from "~/services/autogenerated/V1/configuration";

const getSwaggerAxiosOptionsObj = getSwaggerAxiosOptions();
let validateTokenPromise: Promise<string> | null = null;

async function validateToken(): Promise<string> {
    const token = () => {
        return localStorage.getItem("token");
    };
    if (validateTokenPromise === null) {
        // @ts-ignore
        validateTokenPromise = new Promise((resolve, reject) => {
            const tmpToken = token()?.toString();
            if (tmpToken == null || tmpToken === "") {
                reject(new Error("No token"));
                return;
            }

            axios.post(`${url}api/v1.0/auth/validate-token`, {},
                {
                    headers: {"Authorization": "Bearer " + tmpToken}
                },
            ).then(() => {
                resolve(localStorage.getItem("token") || "");
                validateTokenPromise = null;
            }).catch((e) => {
                reject(e);
                validateTokenPromise = null;
            });
        });
    }

    return validateTokenPromise;
}

async function getNewToken() {
    let params = {
        token: localStorage.getItem('auth._token.discord'),
    }

    //@ts-ignore
    const fingerprint = ""/*window.store?.getters["getFingerprint"]*/;
    let token = (await axios({
        method: 'post',
        url: `${url}api/v1.0/auth/get-token`,
        params: params,
    })).data;

    axios.defaults.headers.common["Authorization"] = "Bearer " + token.token;

    localStorage.setItem("token", token.token);
    return token.token;
}