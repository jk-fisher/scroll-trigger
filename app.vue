<template>
  <div>
    <nav
      class="nav w-screen flex flex-row justify-center gap-10 h-12 items-center"
    >
      <NuxtLink to="/"> Home </NuxtLink>
      <NuxtLink to="/about"> About </NuxtLink>
    </nav>

    <NuxtPage />
  </div>
</template>
<script setup>
const route = useRoute();
</script>
<style scoped>
/* @import "./index.css"; */
</style>
