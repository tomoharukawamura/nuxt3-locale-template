<template>
  <div>
    <p>
      {{ $t('good-night') }}
    </p>
    <locale-link
      to="/index"
      :locale="locale"
    >
      {{ $t('to-home') }}
    </locale-link>
  </div>
</template>
<script lang="ts" setup>
const path = computed(() => useRoute().path)
const { locale, $t } = useLocale(path)
</script>