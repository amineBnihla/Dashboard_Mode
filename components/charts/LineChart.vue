<template>
  <div class="bg-bgchart dark:bg-white dark:bg-opacity-5 rounded-xl">
    <div
      class="w-full flex flex-col md:flex-row gap-4 justify-between items-center p-5"
    >
      <div class="flex gap-2 md:gap-5 items-center">
        <h3 class="text-14 text-myColor dark:text-white font-semibold">
          {{ $t("Total Users") }}
        </h3>
        <span
          class="text-myColor text-opacity-40 dark:text-white dark:text-opacity-40 text-14"
          >{{ $t("Total Projects") }}</span
        >
        <span
          class="text-myColor text-opacity-40 dark:text-white dark:text-opacity-40 text-14"
          >{{ $t("Operating Status") }}</span
        >
      </div>
      <div
        class="flex gap-3 relative items-center pl-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-[1px] before:h-4 before:bg-myColor before:bg-opacity-20 before:dark:bg-white dark:before:bg-opacity-10"
      >
        <!-- <span class="text-my">|</span> -->
        <div class="flex items-center gap-2">
          <div class="w-1 h-1 rounded-full bg-lineColor"></div>
          <span class="text-myColor dark:text-white text-12">{{
            $t("Current week")
          }}</span>
        </div>
        <div class="flex items-center gap-2">
          <div class="w-1 h-1 rounded-full bg-myColor dark:bg-white"></div>
          <span class="text-myColor dark:text-white text-12">{{
            $t("Previous week")
          }}</span>
        </div>
      </div>
    </div>
    <ClientOnly fallback-tag="span" fallback="Loading comments...">
      <apexchart
        type="line"
        height="250"
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
const colorMode = useColorMode();
watch(locale, (newVal) => {
  console.log(newVal);
  changeLang(newVal);
});
watch(
  () => colorMode.preference,
  (newVal) => {
    isDark(newVal);
  }
);
function isDark(newVal) {
  if (newVal == "dark") {
    chartOptions.value = {
      ...chartOptions.value,
      colors: ["#FFFFFF", "#A8C5DA"],
    };
  } else if (newVal == "light") {
    chartOptions.value = {
      ...chartOptions.value,
      colors: ["#1c1c1c", "#A8C5DA"],
    };
  }
}
function changeLang(lang) {
  if (lang == "en") {
    chartOptions.value = {
      ...chartOptions.value,
      xaxis: {
        ...chartOptions.value.xaxis,
        opposite: false,
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
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
      xaxis: {
        ...chartOptions.value.xaxis,
        opposite: true,
        categories: [
          "يناير",
          "فبراير",
          "مارس",
          "أبريل",
          "مايو",
          "يونيو",
          "يوليو",
          "أغسطس",
        ],
      },
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
  isDark(colorMode.preference);
  changeLang(locale.value);
});
const series = [
  {
    name: "Desktops",
    data: [
      11041000, 10850000, 8510000, 11900000, 12200000, 13000000, 15000000,
      16000000,
    ],
  },
  {
    name: "Low - 2013",
    data: [
      8510000, 13350000, 12510000, 11900000, 9000000, 10000000, 12000000,
      20000000,
    ],
  },
];
import ar from "apexcharts/dist/locales/ar.json";
console.log(ar);
const chartOptions = ref({
  chart: {
    id: "vuechart-example",
    zoom: {
      enabled: false,
    },
    locales: [ar],
    defaultLocale: "ar",
    toolbar: {
      show: false,
    },
    fontFamily: "Inter, sans-serif",
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tickPlacement: "between",
  colors: ["#1c1c1c", "#A8C5DA"],

  forecastDataPoints: {
    count: 1,
  },
  stroke: {
    curve: "smooth",
    lineCap: "round",
    width: 3,
  },
  grid: {
    row: {
      colors: ["transparent"], // takes an array which will be repeated on columns
    },
  },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
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
    tickAmount: 3,
    min: 0,
    max: 30000000,
    labels: {
      style: {
        colors: textChart.value,
        fontSize: "12px",
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },
});
</script>

<style >
.dark .apexcharts-text tspan {
  fill: #ffffff66 !important;
}
.dark .apexcharts-legend-text {
  color: #d5d5d5 !important;
}
</style>