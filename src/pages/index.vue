<template>
  <div>
    <p>
      {{ $t('see-you') }}
    </p>
    <p>
      {{ locale }}
    </p>
    <locale-link
      :locale="locale"
      to="/page1"
    >
      {{ $t('to-page1') }}
    </locale-link>
  </div>
</template>
<script lang="ts" setup>
const path = computed(() => useRoute().path)
const { locale, $t } = useLocale(path)
</script>