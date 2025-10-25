<script setup lang="ts">
import { Grid, OrbitControls } from "@tresjs/cientos"
import { TresCanvas } from "@tresjs/core"
</script>

<template>
  <TresCanvas clear-color="#333" window-size>
    <TresPerspectiveCamera :position="[11, 11, 11]" />
    <OrbitControls />

    <Car />

    <TresDirectionalLight :intensity="2" :position="[3, 3, 3]" />
    <TresAmbientLight :intensity="1" />

    <Grid
      :args="[20, 20]"
      cell-color="#82dbc5"
      :cell-size="0.6"
      :cell-thickness="0.5"
      section-color="#fbb03b"
      :section-size="2"
      :section-thickness="1.3"
      :infinite-grid="true"
      :fade-from="0"
      :fade-distance="12"
      :fade-strength="1"
    />

    <DevOnly>
      <TresGridHelper :args="[30, 30]" />
    </DevOnly>
  </TresCanvas>
</template>
