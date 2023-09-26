<template>
    <div>
      <p>
        {{ $t('hello') }}
      </p>
      <locale-link
        to="/page2"
        :locale="locale"
      >
        ページ2へ
      </locale-link>
    </div>
  </template>
  <script lang="ts" setup>
  const path = computed(() => useRoute().path)
  const { $t, locale } = useLocale(path)
  </script>