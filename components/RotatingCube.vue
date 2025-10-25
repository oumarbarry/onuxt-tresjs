<script setup lang="ts">
import type { Mesh } from "three"
import { useLoop } from "@tresjs/core"

const cubeRef = shallowRef<Mesh | null>(null)

const { onBeforeRender } = useLoop()

onBeforeRender(() => {
  if (cubeRef.value) {
    cubeRef.value.rotation.x += 0.01
    cubeRef.value.rotation.y += 0.01
  }
})
</script>

<template>
  <TresMesh ref="cubeRef" :position="[0, 1, 0]">
    <TresBoxGeometry :args="[1, 1, 1]" />
    <TresMeshNormalMaterial />
  </TresMesh>
</template>
