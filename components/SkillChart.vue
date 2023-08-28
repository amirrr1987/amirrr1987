<template>
  <div>
    <ClientOnly>
      <apexchart
        type="radar"
        height="550"
        :options="chartOptions"
        :series="props.chartData"
      />
    </ClientOnly>
  </div>
</template>
<script setup lang="ts">
const props = defineProps({
  chartData: {
    type: Array,
    default: () => [{ name: "title", data: [0, 0, 0, 0, 0] }],
    required: true,
  },
});
const chartOptions = ref({
  chart: {
    height: 350,
    type: "radar",
  },
  xaxis: {
    categories: ["Structure", "Fluency", "Clean Code", "Syntax", "Logic"],
    labels: {
      show: true,
      style: {
        colors: ["#42b883", "#42b883", "#42b883", "#42b883", "#42b883"],
        fontSize: "12px",
        fontFamily: "Arial",
      },
    },
  },
  plotOptions: {
    radar: {
      polygons: {
        strokeColor: "#e8e8e8",
        fill: {
          colors: ["#f8f8f8", "#fff"],
        },
      },
    },
  },
  yaxis: {
    tickAmount: 10,
    min: 0,
    max: 100,
  },
  markers: {
    size: 5,
    hover: {
      size: 10,
    },
  },
});
const series = ref([
  {
    name: "Score",
    data: [],
  },
]);
// const updateChart = () => {
//   //generate array of random numbers of length 10
//   const data = Array.from({ length: 10 }, () =>
//     Math.floor(Math.random() * 100)
//   );
//   chartOptions.value = {
//     ...chartOptions.value,
//     xaxis: {
//       categories: Array.from(
//         { length: 10 },
//         (_, i) => new Date().getFullYear() - i
//       ), // array of last 10 years
//     },
//   };
//   series.value = [
//     {
//       name: "Score",
//       data: data,
//     },
//   ];
// };
// onMounted(() => {
//   updateChart();
// });
</script>
