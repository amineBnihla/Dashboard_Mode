<template>
  <div class="fixed w-screen h-screen left-0 top-0 overflow-hidden">
    <LayoutSidebarDashboard v-model="isActiveSideBar" />
    <LayoutSidebarDashboardRight v-model="isActiveSideRight" />
    <div
      class="fixed w-screen transition-[width,left,right] duration-500 top-0 h-screen"
      :class="toglleSidebar"
    >
      <LayoutHeaderDashboard
        @sidebar-toggle="isActiveSideBar = !isActiveSideBar"
        @sideright-toggle="isActiveSideRight = !isActiveSideRight"
      />
      <div class="p-5 h-full">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const isActiveSideBar = ref(true);
const isActiveSideRight = ref(true);
const toglleSidebar = computed(() => {
  if (isActiveSideBar.value && isActiveSideRight.value)
    return "ltr:lg:left-[212px] left-0 rtl:lg:left-[280px] lg:w-[calc(100vw-492px)]";
  if (!isActiveSideBar.value && !isActiveSideRight.value)
    return "lg:w-screen lg:left-0";
  if (!isActiveSideBar.value)
    return "lg:w-[calc(100vw-280px)] ltr:lg:left-0 rtl:lg:right-0";
  if (!isActiveSideRight.value)
    return "lg:w-[calc(100vw-212px)] ltr:lg:right-0 rtl:lg:left-0";
});

onMounted(() => {
  if (window.matchMedia("(max-width:1025px)").matches) {
    isActiveSideBar.value = false;
    isActiveSideRight.value = false;
  } else {
    isActiveSideBar.value = true;
    isActiveSideRight.value = true;
  }
});
</script>

<style  scoped>
</style>