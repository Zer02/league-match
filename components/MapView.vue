<template>
  <div style="height:100vh; width:100vw">
    <LMap ref="map" :zoom="zoom" :center="[40.89086962874917, -73.8928386675601]" :use-global-leaflet="false">
      <LTileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors" layer-type="base" name="OpenStreetMap" />
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const zoom = ref(13)
</script>
