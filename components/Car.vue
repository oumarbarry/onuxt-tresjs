<script setup lang="ts">
import { useFBX } from "@tresjs/cientos"

const modelPath = "https://raw.githubusercontent.com/Tresjs/assets/main/models/fbx/low-poly-truck/Jeep_done.fbx"
const { state: model } = useFBX(modelPath)
</script>

<template>
  <primitive v-if="model" :object="model" :scale="0.015" />
</template>
