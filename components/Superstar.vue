<script setup lang="ts">
import { Stars } from "@tresjs/cientos"

const yRotation = ref(0)

const { onBeforeRender } = useLoop()

onBeforeRender(({ delta }) => {
  yRotation.value += 0.02 * delta
})
</script>

<template>
  <Stars
    :rotation="[0, yRotation, 0]"
    :radius="50"
    :depth="50"
    :count="5000"
    :size="0.3"
    :size-attenuation="true"
  />
</template>
