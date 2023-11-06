<template>
  <div class="mb-5">
    <h2
      class="text-14 text-myColor dark:text-white dark:text-opacity-60 text-opacity-60 mb-2 pl-3 capitalize"
    >
      {{ $t(links.title) }}
    </h2>
    <ul>
      <li
        class="hover:bg-myColor listMenu dark:hover:bg-white dark:hover:bg-opacity-10 hover:bg-opacity-5 rounded-lg mb-1"
        v-for="(link, index) in links.items"
        :key="index"
        @click="OpenSubMenu"
      >
        <NuxtLink :to="link?.to" class="flex items-center gap-[2px] py-1">
          <div class="min-w-[10px] overflow-hidden grid place-items-center">
            <Icon
              v-if="link.submenu?.length > 0"
              name="ic:round-keyboard-arrow-right"
              size="20"
              class="text-myColor arrowOpen dark:text-white dark:text-opacity-30 text-opacity-30"
            />
          </div>
          <Icon
            :name="link?.icon"
            size="20"
            class="text-myColor ltr:mr-1 rtl:ml-1 min-w-[20px] dark:text-white"
          />

          <span class="text-14 text-myColor dark:text-white capitalize">{{
            $t(link?.name)
          }}</span>
        </NuxtLink>

        <ul
          class="mt-1 overflow-hidden listSubMenu max-h-0 transition-[max-height] duration-500 ease-in-out"
          v-if="link.submenu?.length > 0"
        >
          <li class=" " v-for="(submenu, ind) in link.submenu" :key="ind">
            <NuxtLink
              :to="submenu.to"
              class="py-1 block ltr:pl-12 rtl:pr-12 text-myColor capitalize dark:text-white text-14 hover:bg-myColor hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-5"
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
const OpenSubMenu = (e) => {
  const subMen = e.currentTarget.querySelector(".listSubMenu");
  const AllSubMenu = document.querySelectorAll(".listSubMenu");
  if (subMen.classList.contains("max-h-[1000px]")) {
    removeClass(subMen);
    e.currentTarget.querySelector(".arrowOpen").style.transform =
      "rotate(0deg)";
    return;
  }
  AllSubMenu.forEach((sub) => {
    sub.parentElement.querySelector(".arrowOpen").style.transform =
      "rotate(0deg)";
    removeClass(sub);
  });
  e.currentTarget.querySelector(".arrowOpen").style.transform = "rotate(90deg)";
  subMen.classList.add("max-h-[1000px]");
  subMen.parentElement.classList.add(
    "bg-myColor",
    "dark:bg-white",
    "dark:bg-opacity-10",
    "bg-opacity-5"
  );
};
function removeClass(elem) {
  elem.classList.remove("max-h-[1000px]");
  elem.parentElement.classList.remove(
    "bg-myColor",
    "dark:bg-white",
    "dark:bg-opacity-10",
    "bg-opacity-5"
  );
}
</script>

<style>
</style>