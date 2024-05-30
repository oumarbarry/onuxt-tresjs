<script setup lang="ts">
const yRotation = shallowRef(0)

useRenderLoop().onLoop(({ delta }) => {
  yRotation.value += 0.02 * delta
})
</script>

<template>
  <Body class="bg-[#333]">
    <main class="min-h-screen">
      <TresCanvas clear-color="#333">
        <TresPerspectiveCamera :position="[0, 2, 5]" />

        <Suspense>
          <CubeModel />
        </Suspense>

        <TresDirectionalLight :intensity="2" :position="[3, 3, 3]" />

        <TresAmbientLight :intensity="1" />

        <Stars
          :rotation="[0, yRotation, 0]"
          :radius="50"
          :depth="50"
          :count="5000"
          :size="0.3"
          :size-attenuation="true"
        />

        <TresGridHelper :args="[4, 4]" />

        <OrbitControls />
      </TresCanvas>
    </main>
  </Body>
</template>
