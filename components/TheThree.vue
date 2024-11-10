<script lang="ts" setup>
import * as THREE from "three";
import { TresCanvas } from "@tresjs/core";
import { OrbitControls, Text3D } from "@tresjs/cientos";
</script>

<template>
  <TresCanvas windowSize>
    <TresPerspectiveCamera :position="[4, 3, 9]" />
    <OrbitControls />
    <TresMesh>
      <TresBoxGeometry :args="[1, 1, 1]" />
      <TresMeshBasicMaterial color="green" />
    </TresMesh>
    <TresDirectionalLight :position="[-30, 2, 14]" :intensity="2" cast-shadow />
  </TresCanvas>
</template>
<style>

canvas {
  width: 100% !important;
  height: 100% !important;
  position: static !important;
}
</style>