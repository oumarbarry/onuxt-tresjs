<script setup lang="ts">
import type { TresRendererSetupContext } from "@tresjs/core"
import { WebGPURenderer } from "three/webgpu"
// import { OrbitControls } from "@tresjs/cientos"

function createWebGPURenderer(ctx: TresRendererSetupContext) {
  const renderer = new WebGPURenderer({
    canvas: toValue(ctx.canvas),
    alpha: true,
    antialias: true,
  })
  return renderer
}
</script>

<template>
  <TresCanvas :renderer="createWebGPURenderer" window-size>
    <TresPerspectiveCamera :position="[3, 3, 5]" :look-at="[0, 0, 0]" />
    <!-- <OrbitControls /> -->

    <HologramCube />
  </TresCanvas>
</template>
