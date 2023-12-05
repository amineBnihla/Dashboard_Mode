<template>
  <div class="bg-bgchart dark:bg-white dark:bg-opacity-5 rounded-xl px-3">
    <div
      class="w-full flex flex-col md:flex-row gap-4 justify-between items-center pt-4 px-4"
    >
      <div class="flex gap-2 md:gap-5 items-center">
        <h3 class="text-14 text-myColor dark:text-white font-semibold">
          {{ $t("Traffic by Device") }}
        </h3>
      </div>
    </div>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <apexchart
        type="bar"
        height="200"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </ClientOnly>
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
      yaxis: {
        ...chartOptions.value.yaxis,
        opposite: false,
        labels: {
          ...chartOptions.value.yaxis.labels,
          align: "right",
          offsetX: 0,
          formatter: (value) => {
            if (value >= 1000000) return +value.toString().slice(0, -6) + "M";
            if (value >= 1000) return +value.toString().slice(0, -3) + "K";
            return value;
          },
        },
      },
    };
  } else if (lang == "ar") {
    chartOptions.value = {
      ...chartOptions.value,
      yaxis: {
        ...chartOptions.value.yaxis,
        opposite: true,
        labels: {
          ...chartOptions.value.yaxis.labels,
          align: "right",
          offsetX: 25,
          formatter: (value) => {
            if (value >= 1000000) return +value.toString().slice(0, -6) + "M";
            if (value >= 1000) return +value.toString().slice(0, -3) + "K";
            return value;
          },
        },
      },
    };
  }
}
onMounted(() => {
  changeLang(locale);
});
const series = [
  {
    data: [19041000, 30850000, 8510000, 21900000, 12200000, 28000000],
  },
];
const chartOptions = ref({
  chart: {
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#95A4FC", "#BAEDBD", "#1C1C1C", "#A8C5DA", "#A1E3CB", "#A8C5DA"],
  plotOptions: {
    bar: {
      columnWidth: "35%",
      distributed: true,
    },
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tickPlacement: "between",

  grid: {
    row: {
      colors: ["transparent"], // takes an array which will be repeated on columns
    },
  },
  xaxis: {
    categories: ["Linux", "Mac", "IOS", "Windows", "Android", "Other"],
    labels: {
      style: {
        colors: textChart.value,
        fontSize: "12px",
        cssClass: "apexcharts-xaxis-label",
      },
    },
    axisBorder: {
      show: true,
      color: textChart.value,
    },
    axisTicks: {
      show: false,
      borderType: "solid",
      color: textChart.value,
    },
  },
  yaxis: {
    opposite: false,

    tickAmount: 3,
    min: 0,
    max: 30000000,
    labels: {
      style: {
        colors: textChart.value,
        fontSize: "12px",
        cssClass: "apexcharts-xaxis-label",
      },
      formatter: (value) => {
        if (value >= 1000000) return +value.toString().slice(0, -6) + "M";
        if (value >= 1000) return +value.toString().slice(0, -3) + "K";
        return value;
      },
    },
  },
});
</script>

<style >
</style>