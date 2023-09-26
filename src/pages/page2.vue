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
const { locale, $t } = useLocale()
</script>