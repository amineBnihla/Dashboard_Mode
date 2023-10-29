<template>
  <div :dir="direction">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
const { locale } = useI18n();
const direction = computed(() => {
  return locale.value == "en" ? "ltr" : "rtl";
});
</script>
