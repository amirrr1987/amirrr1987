<template>
  <RadarChart v-bind="barChartProps" />
</template>

<script setup lang="ts">
import { Chart, registerables } from "chart.js";
import { RadarChart, useBarChart } from "vue-chart-3";
import { shuffle } from "lodash";
import { ref, computed } from "vue";
Chart.register(...registerables);

const data = ref([10, 30, 29, 68, 58]);
const chartData = computed(() => ({
  labels: ["Structure", "Fluency", "Clean Code", "Syntax", "Logic"],
  datasets: [
    {
      title: "aaa",
      data: data.value,
      backgroundColor: ["#fff"],
    },
  ],
}));

const options = computed(() => ({
  scales: {},
  plugins: {
    title: {
      display: false,
      text: "My Skill Chart.js",
    },
  },
}));
const { barChartProps } = useBarChart({
  chartData,

  options,
});

function shuffleData() {
  data.value = shuffle(data.value);
}
</script>
