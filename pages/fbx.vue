<script setup lang="ts">
import { OrbitControls } from "@tresjs/cientos"
import { TresCanvas } from "@tresjs/core"
</script>

<template>
  <TresCanvas clear-color="#1F90FF" window-size>
    <TresPerspectiveCamera :position="[11, 11, 11]" />
    <OrbitControls />

    <Car />

    <TresDirectionalLight
      :intensity="2"
      :position="[3, 3, 3]"
    />
    <!-- <TresAmbientLight :intensity="1" /> -->
  </TresCanvas>
</template>
