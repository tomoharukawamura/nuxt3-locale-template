<template>
    <div>
        <p>
            {{ $t('see-you') }}
        </p>
        <p>
            {{ locale }}
        </p>
        <p @click="switchLocale">
            きりかえ
        </p>
        <locale-link
            :locale="locale"
            to="/pageA"
        >
            ページAへ
        </locale-link>
    </div>
</template>
<script lang="ts" setup>
const path = computed(() => useRoute().path)
const { locale, switchLocale, $t } = useLocale(path)
</script>