<template>

    <RadarChart v-bind="barChartProps" />
</template>

<script lang="ts">
import { Chart, registerables } from "chart.js";
import { RadarChart, useBarChart } from "vue-chart-3";
import { ref, computed, defineComponent } from "vue";
import { shuffle } from "lodash";

Chart.register(...registerables);

export default defineComponent({
  name: "SkillChart",
  components: {
    RadarChart,
  },
  setup() {
    const data = ref([10, 30, 29, 68, 58]);

    const chartData = computed(() => ({
      
      labels: ["Structure", "Fluency", "Clean Code", "Syntax", "Logic"],
      datasets: [
        {
          title: 'aaa',
          data: data.value,
          backgroundColor: [
            "#fff",
          ],
        },
      ],
    }));
    const options = computed(() => ({
      scales: {
    
      },
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

    return { shuffleData, barChartProps };
  },
});
</script>
