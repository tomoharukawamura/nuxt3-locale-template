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
  <script lang="ts" setup>
  const path = computed(() => useRoute().path)
  const { $t, locale } = useLocale(path)
  </script>