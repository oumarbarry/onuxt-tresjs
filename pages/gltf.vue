<script setup lang="ts">
import { OrbitControls } from "@tresjs/cientos"

definePageMeta({ alias: ["/"] })
</script>

<template>
  <TresCanvas window-size>
    <TresPerspectiveCamera :position="[0, 2, 5]" :look-at="[0, 0, 0]" />
    <OrbitControls />

    <BlenderCube />

    <TresDirectionalLight :intensity="2" :position="[3, 3, 3]" />
    <TresAmbientLight :intensity="1" />

    <Superstar />

    <DevOnly>
      <TresGridHelper :args="[4, 4]" />
      <!-- <TresAxesHelper :args="[5]" /> -->
    </DevOnly>
  </TresCanvas>
</template>
