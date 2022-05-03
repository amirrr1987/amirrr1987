<template>
  <apexchart
    type="radar"
    height="100%"
    :options="chartOptions"
    :series="props.chartData"
  />
</template>
<script setup lang="ts">
import { reactive, defineProps } from "vue";
import apexchart from "vue3-apexcharts";

const props = defineProps({
  chartData: {
    type: Array,
    default: () => [{ name: "title", data: [0, 0, 0, 0, 0] }],
    required: true
  },
});

const chartOptions = reactive({
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
</script>
