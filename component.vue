<template>
    <h1>{{msg}}</h1>
</template>
<script setup>
defineProps({
    msg: {
        type: String,
        default: 'Hello, World!'
    }
})
</script>
