<template>
    <button class="m-1 rounded-lg font-semibold min-w-24 hover:shadow-xl active:opacity-90" :class="[color, size]">
        <slot></slot>
    </button>
</template>

<script setup>
    defineProps({
        color: {
            type: String,
            default: 'red'
        },
        size: {
            type: String,
            default: 'md'
        }
    })
</script>

<style scoped>
    /* 色 */
    .red {
        background-color: crimson;
        color: white;
    }

    .blue {
        background-color: dodgerblue;
    }

    .indigo {
        background-color: indigo;
        color: white;
    }

    .green {
        background-color: forestgreen;
    }

    .white {
        background-color: white;
        color: #333;
        border: solid 1px #ccc;
    }

    .white:active {
        background-color: #ccc;
    }

    /* サイズ */
    .sm {
        padding: 8px 12px;
        font-size: 10px;
    }

    .md {
        padding: 10px 16px;
        font-size: 12px;
        height: 40px;
    }

    .lg {
        padding: 15px 24px;
        font-size: 16px;
    }

    /* 無効時 */
    button:disabled {
        background-color: #ccc;
    }
</style>
