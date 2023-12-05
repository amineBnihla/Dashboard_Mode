<template>
  <div class="relative">
    <input
      type="text"
      :placeholder="$t(placeHoldValue)"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="px-3 py-2 w-full rounded-md border border-slate-300 dark:border-slate-700 outline-none placeholder:text-14 text-14 text-myColor dark:text-white shadow-sm placeholder:text-gray-700 dark:placeholder:text-gray-200 dark:bg-gray-700 bg-white"
    />
    <span
      class="absolute w-full -bottom-5 left-0 text-12 text-red-500 dark:text-red-400 mt-1"
      :class="errorMsg != '' ? 'visible' : 'invisible'"
      >{{ errorMsg }}</span
    >
  </div>
</template>

<script setup>
defineProps(["modelValue", "errorMsg", "placeHoldValue"]);
defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
</style>