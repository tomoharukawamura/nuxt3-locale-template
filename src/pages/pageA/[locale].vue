<template>
  <div>
    <p>
      {{ $t('hello') }}
    </p>
    <p @click="switchLocale">
      言語切り替え
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
const { $t, switchLocale, locale } = useLocale(path)
</script>