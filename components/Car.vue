<script setup lang="ts">
import { useFBX } from "@tresjs/cientos"

const path = "https://raw.githubusercontent.com/Tresjs/assets/main/models/fbx/low-poly-truck/Jeep_done.fbx"
const { state } = useFBX(path)
</script>

<template>
  <primitive v-if="state" :object="state" :scale="0.025" />
</template>
