<template>
  <div ref="mapRef" id="map"></div>
</template>

<script>
import { Map } from "maplibre-gl";
export default {
  setup(props) {
    console.log(props)
    const mapRef = new ref();
    const map = new ref();
    onMounted(() => {
      map.value = new Map({
        container: "map",
        style: "https://demotiles.maplibre.org/style.json",
      });

    });
    return {
      mapRef,
      map,
    };
  },
  props: {
    lng: 57.780,
    lat: 28.380,
  }
};
</script>

<style scoped>
#map {
  width: 500px;
  height: 300px;
}
</style>
