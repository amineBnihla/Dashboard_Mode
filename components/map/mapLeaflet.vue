<template>
  <div class="fixed h-screen w-screen">
    <LMap ref="map" :zoom="zoom" :center="[47.21322, -1.559482]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&amp;copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        layer-type="base"
        name="OpenStreetMap"
      />
      <LPolygon
        :lat-lngs="[
          [37, -109.05],
          [41, -109.03],
          [41, -102.05],
          [37, -102.04],
        ]"
        color="red"
      ></LPolygon>
      <LMarker :lat-lng="[37, -109.05]">
        <l-popup>
          <div class="p-2">
            <h2 class="font-medium">Im the popup</h2>
          </div>
        </l-popup></LMarker
      >

      <LControl position="bottomleft">
        <button
          @click="clickHandler"
          class="px-4 py-2 bg-emerald-800 rounded-md text-white"
        >
          I am a useless button!
        </button>
      </LControl>
    </LMap>
  </div>
</template>

<script setup>
const zoom = ref(2);
const showMap = ref(false);
const clickHandler = () => {
  alert("Hello");
};
onMounted(() => {});
</script>

<style >
</style>