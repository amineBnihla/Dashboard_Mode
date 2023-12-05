<template>
  <div class="flex gap-5 dark:text-white flex-wrap">
    <template v-if="statistics?.length > 0">
      <StatisticsStatistic
        v-for="(statistic, index) in statistics"
        :key="index"
        :statistic="statistic"
      />
    </template>
  </div>
  <div class="mt-10 gap-10 grid grid-cols-4 md:grid-cols-12">
    <ChartsLineChart class="col-span-4 md:col-span-9" />
    <div
      class="p-5 overflow-y-auto bg-bgchart dark:bg-white dark:bg-opacity-5 col-span-4 md:col-span-3 rounded-xl"
    >
      <h2 class="text-14 mb-5 font-semibold text-myColor dark:text-white">
        Traffic by website
      </h2>
      <ul>
        <li
          class="flex items-center gap-3 w-full mb-4"
          v-for="(item, index) in traffic"
          :key="index"
        >
          <span class="text-myColor dark:text-white text-12 min-w-[60px]">{{
            item.name
          }}</span>
          <div
            class="w-0 h-[6px] bg-lineColor bg-opacity-100 dark:bg-opacity-50 rounded-sm"
            :style="{ width: item.range + '%' }"
          ></div>
        </li>
      </ul>
    </div>
    <ChartsBarChart class="col-span-4 md:col-span-7" />

    <ChartsPieChart class="col-span-4 md:col-span-5" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "layout-dashboard",
});
const statistics = [
  {
    title: "view",
    number: "770K",
    color: 1,
    numberTreding: "+11.01%",
    icon: "fluent:arrow-trending-16-regular",
  },
  {
    title: "visits",
    number: "367K",
    color: 0,
    numberTreding: "-0.03%",
    icon: "fluent:arrow-trending-16-regular",
  },
  {
    title: "new users",
    number: "770K",
    color: 1,
    numberTreding: "-11.01%",
    icon: "fluent:arrow-trending-16-regular",
  },
  {
    title: "view",
    number: "770K",
    color: 0,
    numberTreding: "-11.01%",
    icon: "fluent:arrow-trending-16-regular",
  },
];
const traffic = ref([
  {
    name: "Google",
    range: 80,
  },
  {
    name: "Youtube",
    range: 30,
  },
  {
    name: "Facebook",
    range: 60,
  },
  {
    name: "Instagram",
    range: 50,
  },
  {
    name: "Pinterest",
    range: 20,
  },
  {
    name: "Twitter",
    range: 10,
  },
]);
</script>

<style scoped>
</style>