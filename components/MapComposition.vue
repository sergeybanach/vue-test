<template>
  <div>
    <div id="map"></div>
  </div>
</template>

<script>
import { Map } from "maplibre-gl";
export default {
  setup() {
    const map = ref();
    provide("map", map);
    onMounted(() => {
      map.value = new Map({
        container: "map",
        style: "https://demotiles.maplibre.org/style.json", // style URL
        center: [0, 0], // starting position [lng, lat]
        zoom: 1, // starting zoom
      });
    });
    return { map };
  },
  mounted() {
    console.log("mounted");
  }
};
</script>

<style scoped>
#map {
  width: 200px;
  height: 500px;
  margin-left: 20px;
}
</style>
