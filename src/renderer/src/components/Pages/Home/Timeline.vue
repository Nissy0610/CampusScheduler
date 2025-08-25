<template>
    <div class="m-1 h-16 rounded-xl text-center text-white block w-full box-content " id="timeline">
        <h2 class="text-2xl">
            <slot></slot>
        </h2>
        {{ time }}
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
        },
        time: {
            type: String,
            required: true,
        }
    })
</script>

<style scoped>
    #timeline {
        background-color: v-bind(bgcolor);
        color: v-bind(color);
    }
</style>
