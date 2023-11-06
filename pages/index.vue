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
</script>

<style scoped>
</style>