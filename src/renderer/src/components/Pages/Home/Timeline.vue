<template>
    <div class="m-2 h-16 rounded-xl text-2xl  text-center text-white" id="timeline">
        <slot></slot>
    </div>
</template>

<script setup>
    defineProps({
        bgcolor: {
            type: String,
            required: false,
            default: 'crimson'
        },
        color: {
            type: String,
            required: false,
            default: '#333'
        }
    })
</script>

<style scoped>
    #timeline {
        background-color: v-bind(bgcolor);
        color: v-bind(color);
    }
</style>
