<template>
  <div
    class="fixed w-0 h-screen transition-[width,left,right,background-color] duration-500 ltr:left-0 rtl:right-0 top-0 ltr:border-r rtl:border-l border-border bg-white dark:bg-myColor z-50 border-opacity-10 dark:border-white dark:border-opacity-10 overflow-hidden"
    :class="{ 'w-[212px]': modelValue }"
  >
    <button
      @click="$emit('update:modelValue', !modelValue)"
      class="text-myColor dark:text-white visible lg:hidden"
    >
      X
    </button>
    SideBar
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped>
</style>