<template>
  <div
    class="fixed w-0 h-screen ltr:right-0 top-0 ltr:border-l rtl:border-r rtl:left-0 bg-white dark:bg-myColor transition-[width,left,right,background-color] duration-500 z-50 border-border border-opacity-10 dark:border-white dark:border-opacity-10"
    :class="{ 'w-[280px]': modelValue }"
  >
    <button
      @click="$emit('update:modelValue', !modelValue)"
      class="text-myColor dark:text-white visible lg:hidden"
    >
      X
    </button>
    SideBar Right
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped>
</style>