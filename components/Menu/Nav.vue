<template>
  <div class="min-w-[200px]">
    <h2
      class="text-14 text-myColor dark:text-white dark:text-opacity-60 text-opacity-60 mb-2 pl-3"
    >
      Dashboards
    </h2>
    <ul>
      <li
        class="hover:bg-myColor dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-5 rounded-lg mb-1"
      >
        <NuxtLink to="/" class="flex items-center gap-1 py-1">
          <div class="min-w-[20px] ml-1 grid place-items-center">
            <Icon
              name="ic:round-keyboard-arrow-right"
              size="20"
              class="text-myColor dark:text-white dark:text-opacity-30 text-opacity-30"
            />
          </div>
          <Icon
            name="ph:chart-pie-slice"
            size="20"
            class="text-myColor mr-1 dark:text-white"
          />
          <span class="text-14 text-myColor dark:text-white">Default</span>
        </NuxtLink>
      </li>
      <li
        class="hover:bg-myColor dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-5 rounded-lg"
      >
        <NuxtLink to="/" class="text-myColor flex items-center gap-1 py-1">
          <div class="min-w-[20px] ml-1 grid place-items-center">
            <Icon
              name="ic:round-keyboard-arrow-right"
              size="20"
              class="text-myColor dark:text-white dark:text-opacity-30 text-opacity-30"
            />
          </div>
          <Icon
            name="ph:shopping-bag-open-duotone"
            size="20"
            class="text-myColor dark:text-white mr-1"
          />
          <span class="text-14 dark:text-white">Ecommerce</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
</script>

<style>
</style>