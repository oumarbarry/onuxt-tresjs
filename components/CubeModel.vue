<script setup lang="ts">
const { scene: model } = await useGLTF(
  "https://raw.githubusercontent.com/Tresjs/assets/main/models/gltf/blender-cube.glb",
  { draco: true },
)
</script>

<template>
  <primitive :object="model" />
</template>
