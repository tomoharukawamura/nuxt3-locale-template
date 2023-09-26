<template>
  <div>
    <input type="button" value="言語切り替え" @click="switchLocale">
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
const path = computed(() => useRoute().path)
const { switchLocale } = useLocale(path)
</script>
