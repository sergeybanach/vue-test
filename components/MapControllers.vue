<template>
  <div class="map-controllers">
    <sample-button @click="setZoom">zoom</sample-button>
  </div>
</template>

<script>
export default {
  setup() {
    const map = inject("map");
    function setZoom() {
      console.log(map);
      map.value.setZoom(15);
    }
    function drawPoints() {
      map.value.setCenter([28.123, 57.324]);
      map.value.setZoom(5);
      const marker = new Marker().setLngLat([28.123, 57.123]).addTo(map.value);
    }
    return {
      setZoom,
    };
  },
};
</script>

<style scoped></style>
