<template>
    <div>
      <p>
        {{ $t('hello') }}
      </p>
      <locale-link
        to="/page2"
        :locale="locale"
      >
        {{ $t('to-page2') }}
      </locale-link>
    </div>
  </template>
  <script lang="ts" setup>
  const { $t, locale } = useLocale()
  </script>