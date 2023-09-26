<template>
  <nuxt-link :to="link">
    <slot/>
  </nuxt-link>
</template>
<script lang="ts" setup>
import { createLink } from '../utils/createLink'
const props = defineProps<{
  to: string,
  locale: 'ja' | 'en'
}>()
const link = computed(() => createLink(props.locale, props.to))
</script>