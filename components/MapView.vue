<template>
  <div style="height: 100vh; width: 100vw">
    <LMap :zoom="zoom" :center="[40.89086962874917, -73.8928386675601]">
      <LTileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />

      <!-- Court markers with icons -->
      <LMarker
        v-for="court in courts"
        :key="court.id"
        :lat-lng="[court.lat, court.lng]"
      >
        <LIcon
          icon-url="https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png"
          shadow-url="https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png"
          :icon-size="[25, 41]"
          :icon-anchor="[12, 41]"
          :popup-anchor="[1, -34]"
          :shadow-size="[41, 41]"
        />
        <LPopup>{{ court.name }}</LPopup>
      </LMarker>
    </LMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const zoom = ref(13)

const courts = [
  {
    id: 1,
    name: 'Van Cortlandt Park Tennis Courts',
    lat: 40.89086962874917,
    lng: -73.8928386675601,
  },
  {
    id: 2,
    name: 'Crotona Park Tennis Center',
    lat: 40.84028258650481,
    lng: -73.89492174552299,
  },
  {
    id: 3,
    name: 'Central Park Tennis Courts',
    lat: 40.785091,
    lng: -73.968285,
  },
]
</script>
