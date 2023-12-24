<template>
  <div
    class="fixed h-screen overflow-y-auto transition-[width,left,right,background-color] duration-500 ltr:left-0 rtl:right-0 top-0 ltr:border-r rtl:border-l border-border bg-white dark:bg-myColor z-50 border-opacity-10 dark:border-white dark:border-opacity-10 overflow-hidden"
    :class="[modelValue ? 'w-[212px] ' : 'w-0 ']"
  >
    <div class="mx-4">
      <div class="flex justify-end py-2">
        <button
          @click="$emit('update:modelValue', !modelValue)"
          class="visible lg:hidden"
        >
          <Icon
            name="mdi:close"
            size="22"
            class="text-myColor dark:text-white"
          ></Icon>
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
      <div class="pl-3 min-w-[200px] mb-7">
        <div class="flex gap-5">
          <span
            class="text-14 capitalize text-myColor dark:text-white dark:text-opacity-60 text-opacity-60"
            >{{ $t("favorite") }}</span
          >
          <span
            class="text-14 capitalize text-myColor dark:text-white dark:text-opacity-40 text-opacity-40"
            >{{ $t("recently") }}</span
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
                class="text-myColor dark:text-white dark:text-opacity-20 text-opacity-20"
              />
              <span>{{ $t("overview") }}</span>
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
                class="text-myColor dark:text-white dark:text-opacity-20 text-opacity-20"
              />
              <span>{{ $t("project") }}</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <MenuNav :links="Links"></MenuNav>
      <MenuNav :links="LinksPaes"></MenuNav>
    </div>
  </div>
</template>

<script setup>
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
const Links = {
  title: "dashboard",
  items: [
    {
      name: "default",
      to: "/",
      icon: "ph:chart-pie-slice",
      submenu: [
        {
          to: "/",
          name: "overview",
        },
      ],
    },
    {
      name: "ecommerce",
      to: "/",
      icon: "ph:shopping-bag-open-duotone",
      submenu: [
        {
          to: "/user",
          name: "users",
        },
      ],
    },
    {
      name: "project",
      to: "/",
      icon: "ph:folder-notch",
      submenu: [
        {
          to: "/parcelleView",
          name: "Map",
        },
        {
          to: "/mapGoogleView",
          name: "Google Map",
        },
      ],
    },
    {
      name: "online courses",
      to: "/",
      icon: "ph:book-open-duotone",
    },
  ],
};
const LinksPaes = {
  title: "pages",
  items: [
    {
      name: "default",
      to: "/",
      icon: "ph:chart-pie-slice",
      submenu: [
        {
          to: "/",
          name: "overview",
        },
      ],
    },
    {
      name: "ecommerce",
      to: "/",
      icon: "ph:shopping-bag-open-duotone",
      submenu: [
        {
          to: "/",
          name: "overview",
        },
      ],
    },
    {
      name: "project",
      to: "/",
      icon: "ph:folder-notch",
      submenu: [
        {
          to: "/",
          name: "overview",
        },
      ],
    },
    {
      name: "online courses",
      to: "/",
      icon: "ph:book-open-duotone",
      submenu: [
        {
          to: "/",
          name: "overview",
        },
      ],
    },
  ],
};
</script>

<style scoped>
</style>