<style scoped lang="scss">

</style>

<template>
        <div class="flex flex-col w-48 overflow-hidden">
            <div class="flex items-center justify-center h-20">
                <h1 class="text-3xl uppercase text-indigo-500"></h1>
            </div>
            <ul class="flex flex-col py-4 px-5">
                <li>
                    <nuxt-link :to="{name:'index'}" exact-active-class="!text-gray-800" class="flex flex-row items-center h-9 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="text-lg font-medium h-8 w-12">Bio</span>
                    </nuxt-link>
                </li>
                <li>
                    <nuxt-link :to="{name:'contact'}" active-class="!text-gray-800" class="flex flex-row items-center h-9 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
                        <span class="text-lg font-medium h-8 w-12">Contact</span>
                    </nuxt-link>
                </li>
            </ul>
        </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent ({
    name: "default-side-menu",
    data() {
        return {
        }
    },
    methods: {
    },
})
</script>
