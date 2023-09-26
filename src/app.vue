<template>
  <div>
    <input type="button" :value="btNMessage" @click="switchLocale">
    <NuxtPage />
  </div>
</template>
<script lang="ts" setup>
const path = computed(() => useRoute().path)
const { switchLocale, locale } = useLocale(path)
const btNMessage = computed(() => locale.value === 'ja'? '言語切り替え': 'switch locale')
</script>
