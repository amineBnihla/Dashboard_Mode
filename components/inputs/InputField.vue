
<template>
  <div class="relative w-40 rounded-md overflow-hidden">
    <Icon
      name="iconamoon:search-light"
      size="16"
      class="text-myColor text-opacity-20 dark:text-white dark:text-opacity-20 absolute left-2 top-1/2 -translate-y-1/2"
    />
    <input
      type="text"
      class="h-7 w-full px-8 bg-myColor dark:bg-white dark:bg-opacity-[0.05] bg-opacity-[0.05] outline-0 border-none text-14 dark:text-white placeholder:text-14 placeholder:text-myColor placeholder:text-opacity-20 dark:placeholder:text-white dark:placeholder:text-opacity-20"
      placeholder="Search..."
    />
    <span
      class="text-myColor text-opacity-20 dark:text-white dark:text-opacity-20 absolute right-2 top-1/2 -translate-y-1/2"
      >⌘/</span
    >
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>