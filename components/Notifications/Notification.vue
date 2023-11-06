<template>
  <li class="rounded-lg mb-3 flex gap-1">
    <img
      :src="useAsset(notification?.icon)"
      class="text-myColor w-6 h-6 mt-1 ltr:mr-1 rtl:ml-1 dark:text-white"
    />
    <div>
      <span class="text-14 text-myColor dark:text-white line-clamp-1">{{
        notification?.title
      }}</span>
      <span
        class="text-12 block text-myColor dark:text-white text-opacity-40 dark:text-opacity-40"
        >{{ notification?.subtitle }}</span
      >
    </div>
  </li>
</template>

<script setup>
const props = defineProps(["notification"]);
function useAsset(path) {
  const assets = import.meta.glob("~/assets/**/*", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/images/" + path];
}
</script>

<style>
</style>