import * as constants from '~/plugins/config-constants'

declare module 'vue/types/vue' {
    interface Vue {
        $const: typeof constants
    }
}

declare module '@nuxt/types' {
    interface Context {
        $const: typeof constants
    }
}

declare module 'vuex' {
    interface ActionContext<S, R> {
        $const: typeof constants
    }
}

export {
    fullName,
    email,
    facebook,
    instagram,
}

const fullName = "Dane-Marie Mc Master";
const email = "Minkigrey747@gmail.com";
const facebook = "https://www.facebook.com/danemarie.greyvenstein?mibextid=ZbWKwL";
const instagram = "https://instagram.com/minkimcmaster?igshid=YmMyMTA2M2Y=";

