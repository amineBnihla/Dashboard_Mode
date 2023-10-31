<template>
  <div
    class="fixed w-0 px-4 h-screen transition-[width,left,right,background-color] duration-500 ltr:left-0 rtl:right-0 top-0 ltr:border-r rtl:border-l border-border bg-white dark:bg-myColor z-50 border-opacity-10 dark:border-white dark:border-opacity-10 overflow-hidden"
    :class="{ 'w-[212px]': modelValue }"
  >
    <div class="flex justify-end py-2 px-4">
      <button
        @click="$emit('update:modelValue', !modelValue)"
        class="text-myColor dark:text-white visible lg:hidden"
      >
        X
      </button>
    </div>

    <div class="flex gap-2 pl-2 items-center mb-7 min-w-[200px]">
      <img
        src="~/assets/images/ByeWind.png"
        alt="image user"
        srcset=""
        class=""
      />
      <span class="text-14 text-myColor dark:text-white">ByeWind</span>
    </div>
    <div class="pl-3 min-w-[200px] mb-9">
      <div class="flex gap-5">
        <span
          class="text-14 capitalize text-myColor dark:text-white dark:text-opacity-60 text-opacity-60"
          >Favorite</span
        >
        <span
          class="text-14 capitalize text-myColor dark:text-white dark:text-opacity-40 text-opacity-40"
          >Recently</span
        >
      </div>
      <ul class="py-2">
        <li>
          <NuxtLink
            to="/"
            class="text-14 text-myColor dark:text-white flex items-center"
          >
            <Icon
              name="ci:dot-02-s"
              size="26"
              class="text-myColor dark:text-white dark:text-opacity-20 text-opacity-20 mr-1"
            />
            <span>Overview</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink
            to="/"
            class="text-14 text-myColor dark:text-white flex items-center"
          >
            <Icon
              name="ci:dot-02-s"
              size="26"
              class="text-myColor dark:text-white dark:text-opacity-20 text-opacity-20 mr-1"
            />
            <span>Projects</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <MenuNav></MenuNav>
    <div></div>
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<style scoped>
</style>