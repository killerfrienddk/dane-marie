<style scoped lang="scss">

</style>

<template>
    <button type="button" @click="$emit('click')" :class="[classes]" class="btn">
        <slot name="left-icon"></slot>
        <slot/>
        <slot name="right-icon"></slot>
    </button>
</template>

<script lang="ts">
export default {
    name: "core-button",
    props: {
        classes: {
            default: 'btn-primary',
        },
    },
    data() {
        return {
            
        }
    },
    methods: {
    }
}
</script>