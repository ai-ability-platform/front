<script setup lang="ts">

import home from './views/home/index.vue'
</script>

<template>
    <div class="full-screen-layout">
        <router-view/>
    </div>
</template>

<style scoped>
.full-screen-layout {
    width: 100%;
    height: 100vh;
}
</style>
