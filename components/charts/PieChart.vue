<template>
  <div
    class="bg-bgchart dark:bg-white flex flex-col dark:bg-opacity-5 rounded-xl px-3"
  >
    <div class="w-full flex items-center pt-4 px-4">
      <div class="flex gap-2 md:gap-5 items-center">
        <h3 class="text-14 text-myColor dark:text-white font-semibold">
          {{ $t("Traffic by location") }}
        </h3>
      </div>
    </div>
    <div class="flex-1 mt-2 flex items-center overflow-auto">
      <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <apexchart
          height="200"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </ClientOnly>
      <!-- <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <apexchart
          height="200"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </ClientOnly>
      <ClientOnly fallback-tag="span" fallback="Loading comments...">
        <apexchart
          height="200"
          :options="chartOptions"
          :series="series"
        ></apexchart>
      </ClientOnly> -->
    </div>
  </div>
</template>

<script setup>
const black = ref("#1c1c1c");
const blueSky = ref("#A8C5DA");
const textChart = ref("#1c1c1c66");
const { locale } = useI18n();
watch(locale, (newVal) => {
  console.log(newVal);
  changeLang(newVal);
});
function changeLang(lang) {
  if (lang == "en") {
    chartOptions.value = {
      ...chartOptions.value,
      legend: {
        width: 150,
        height: 300,
        offsetY: -20,
        markers: {
          offsetX: -10,
        },
      },
    };
  } else if (lang == "ar") {
    console.log(lang);
    chartOptions.value = {
      ...chartOptions.value,
      legend: {
        width: 150,
        height: 300,
        offsetY: -20,
        markers: {
          width: 12,
          offsetX: 10,
        },
      },
    };
  }
}
onMounted(() => {
  changeLang(locale);
});
const series = [38.6, 22.5, 30.8, 8.1];
const chartOptions = ref({
  chart: {
    type: "donut",
    width: "320px",
    // zoom: {
    //   enabled: false,
    // },
    // toolbar: {
    //   show: false,
    // },
  },
  labels: ["United State", "Canada", "Orange", "Watermelon"],
  colors: ["#95A4FC", "#BAEDBD", "#C6C8A9", "#A8C5DA"],
  //   dataLabels: {
  //     enabled: true,
  //     formatter: function (val, opts) {
  //       return val + "%";
  //     },
  //   },
  tooltip: {
    enabled: true,
    y: {
      formatter: (val) => val + "%",
    },
  },
  //   plotOptions: {
  //     pie: {
  //       donut: {
  //         size: "65%",
  //         background: "transparent",
  //         labels: {
  //           show: true,
  //           value: {
  //             show: true,
  //             fontSize: "16px",
  //             fontFamily: "Helvetica, Arial, sans-serif",
  //             fontWeight: 400,
  //             color: undefined,
  //             offsetY: 16,
  //             formatter: function (val) {
  //               return val + "%";
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  stroke: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
});
</script>

<style >
</style>