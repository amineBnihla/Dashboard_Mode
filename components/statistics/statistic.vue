
import type { StatisticsStatistic } from '#build/components';
<template>
  <div
    class="px-7 py-5 rounded-2xl min-w-[150px] flex-1"
    :class="[statistic.color == 1 ? 'bg-lightGreen' : 'bg-lightBlue']"
  >
    <h2 class="text-myColor text-14 font-semibold mb-3">
      {{ $t(statistic?.title) }}
    </h2>
    <div class="flex justify-between items-center">
      <span class="text-myColor text-24 font-semibold">{{
        statistic?.number
      }}</span>
      <span class="text-myColor text-12"
        >{{ statistic?.numberTreding }}
        <Icon :name="statistic?.icon" class="text-myColor" size="16"></Icon>
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps(["statistic"]);
</script>
