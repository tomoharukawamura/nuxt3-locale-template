<template>
  <div>
    <p>
      {{ $t('hello') }}
    </p>
    <locale-link
      to="/index"
      :locale="locale"
    >
      トップに戻る
    </locale-link>
  </div>
</template>
<script lang="ts" scoped>
const path = computed(() => useRoute().path)
const { locale, $t } = useLocale(path)
</script>