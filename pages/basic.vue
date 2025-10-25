<script setup lang="ts">
import { OrbitControls } from "@tresjs/cientos"
</script>

<template>
  <TresCanvas clear-color="#82DBC5" window-size>
    <TresPerspectiveCamera :position="[10, 2, 5]" :look-at="[0, 0, 0]" />
    <OrbitControls />

    <RotatingCube />
  </TresCanvas>
</template>
