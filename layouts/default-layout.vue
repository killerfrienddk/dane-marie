<style scoped lang="scss">
main {
    width: calc(100% - 12rem);
}
</style>

<template>
    <div class="min-h-screen bg-gray-100">
        <div class="container mx-auto flex flex-row w-[80rem]">
            <default-side-menu/>
            <main>
                <div class="h-20"></div>
                <h1 class="pt-4 text-3xl font-bold">
                    {{$const.fullName}}
                </h1>
                <Nuxt/>
            </main>
        </div>
    </div>
</template>

<script lang="ts">
import DefaultSideMenu from "~/components/default/default-side-menu.vue";

export default {
    name: "default-layout",
    components: {DefaultSideMenu},
}
</script>
