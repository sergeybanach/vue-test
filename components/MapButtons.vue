<template>
  <div>
    <button @click="zoomIn">+</button>
    <button @click="zoomOut">-</button>
    <button @click="addControl">add geo control</button>
  </div>
</template>

<script>
import { GeolocateControl } from "maplibre-gl";
export default {
  setup() {
    const map = inject("map");
    const addControl = () => {
      map.addControl(
        new GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true,
          },
          trackUserLocation: true,
        })
      );
    };
    return { addControl };
  },
};
</script>

<style scoped></style>
