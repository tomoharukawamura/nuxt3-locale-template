<template>
  <nuxt-link :to="link">
    <slot/>
  </nuxt-link>
</template>
<script lang="ts" setup>
const props = defineProps<{
  to: string,
  locale: 'ja' | 'en'
}>()
const link = computed(() => props.to === '/index'? `/${props.locale}`: `${props.to}/${props.locale}`)
</script>