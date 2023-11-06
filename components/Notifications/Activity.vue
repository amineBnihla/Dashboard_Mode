<template>
  <li
    class="relative rounded-lg mb-4 flex gap-1 before:absolute before:w-[1px] before:bg-myColor dark:before:bg-white dark:before:bg-opacity-10 before:bg-opacity-10 before:h-4 before:-bottom-3 ltr:before:left-3 rtl:before:right-3"
  >
    <img
      :src="useAsset(activity?.icon)"
      class="text-myColor w-6 h-6 mt-1 ltr:mr-1 rtl:ml-1 dark:text-white"
    />
    <div>
      <span class="text-14 text-myColor dark:text-white line-clamp-1">{{
        activity?.title
      }}</span>
      <span
        class="text-12 block text-myColor dark:text-white text-opacity-40 dark:text-opacity-40"
        >{{ activity?.subtitle }}</span
      >
    </div>
  </li>
</template>

<script setup>
const props = defineProps(["activity"]);
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