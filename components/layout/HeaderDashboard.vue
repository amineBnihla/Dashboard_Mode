<template>
  <div
    class="w-full h-[110px] md:h-[68px] border-b border-b-border border-opacity-10 dark:border-b-white dark:border-opacity-10 py-5 px-7"
  >
    <div class="flex flex-col md:flex-row gap-5 justify-between">
      <div class="header-left flex items-center gap-5">
        <button>
          <Icon
            name="ph:sidebar"
            size="18"
            class="text-myColor dark:text-white"
            @click="$emit('sidebarToggle')"
          />
        </button>
        <button>
          <Icon
            name="ant-design:star-twotone"
            size="18"
            class="text-myColor dark:text-white"
          />
        </button>
        <div class="BreadCrump flex gap-2">
          <span
            class="text-14 text-myColor dark:text-white dark:text-opacity-40 text-opacity-40"
            >{{ $t("dashboard") }} /
          </span>
          <span class="text-14 text-myColor dark:text-white">{{
            $t("default")
          }}</span>
        </div>
      </div>
      <div class="header-right flex items-center gap-4">
        <InputsInputField />
        <div class="flex gap-4 items-center">
          <button @click="darkLight">
            <Icon
              name="ph:sun-duotone"
              size="18"
              class="text-myColor dark:text-white"
            />
          </button>
          <button>
            <Icon
              name="ph:clock-counter-clockwise-duotone"
              size="18"
              class="text-myColor dark:text-white"
            />
          </button>
          <button
            @click="switchLangue"
            class="text-myColor dark:text-white uppercase text-14 w-5"
          >
            {{ locale }}
          </button>
          <button>
            <Icon
              name="ph:sidebar"
              size="18"
              class="text-myColor dark:text-white"
              @click="$emit('siderightToggle')"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode();
const { locale } = useI18n();
function switchLangue() {
  locale.value = locale.value == "en" ? "ar" : "en";
}
function darkLight() {
  colorMode.preference = colorMode.preference == "dark" ? "light" : "dark";
}
</script>

<style  scoped>
</style>