<template>
  <div class="">
    <h2
      class="text-14 text-myColor dark:text-white dark:text-opacity-60 text-opacity-60 mb-2 pl-3"
    >
      {{ $t(links.title) }}
    </h2>
    <ul>
      <li
        class="hover:bg-myColor dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-5 rounded-lg mb-1"
        v-for="(link, index) in links.items"
        :key="index"
      >
        <NuxtLink
          :to="link?.to"
          class="flex items-center gap-[2px] py-1"
          @click="openMenu = !openMenu"
        >
          <div class="min-w-[10px] overflow-hidden grid place-items-center">
            <Icon
              v-if="link.submenu?.length > 0"
              name="ic:round-keyboard-arrow-right"
              size="20"
              class="text-myColor dark:text-white dark:text-opacity-30 text-opacity-30"
            />
          </div>
          <Icon
            :name="link?.icon"
            size="20"
            class="text-myColor ltr:mr-1 rtl:ml-1 min-w-[20px] dark:text-white"
          />

          <span class="text-14 text-myColor dark:text-white">{{
            $t(link?.name)
          }}</span>
        </NuxtLink>

        <ul
          class="mt-1 overflow-hidden"
          :class="OpenSubMenu"
          v-if="link.submenu?.length > 0"
        >
          <li class=" " v-for="(submenu, ind) in link.submenu" :key="ind">
            <NuxtLink
              :to="submenu.to"
              class="py-1 block ltr:pl-12 rtl:pr-12 text-myColor dark:text-white text-14 hover:bg-myColor hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-5"
            >
              {{ $t(submenu.name) }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps(["links"]);
const openMenu = ref(false);
const OpenSubMenu = computed(() => {
  return openMenu.value == true ? "min-h-0" : "h-0";
});
</script>

<style>
</style>