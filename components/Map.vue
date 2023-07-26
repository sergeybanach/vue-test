<template>
  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark"
      ><img
        src="https://api.maptiler.com/resources/logo.svg"
        alt="MapTiler logo"
    /></a>
    <div class="map" ref="map" id="map"></div>
  </div>
</template>

<script>
import { Map } from "maplibre-gl";
import { shallowRef, onMounted, onUnmounted, markRaw } from "vue";

export default {
  name: "Map",
  mounted() {
    const map = new Map({
      container: "map",
      center: [12.550343, 55.665957],
      zoom: 8,
      style: {
        version: 8,
        sources: {
          "raster-tiles": {
            type: "raster",
            tiles: ["https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"],
            tileSize: 256,
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          },
        },
        layers: [
          {
            id: "simple-tiles",
            type: "raster",
            source: "raster-tiles",
            minzoom: 0,
            maxzoom: 22,
          },
        ],
      },
    });
  },
};
</script>

<style scoped>
@import "/node_modules/maplibre-gl/dist/maplibre-gl.css";

.map-wrap {
  position: relative;
  width: 500px;
  height: 200px;
}

.map {
  position: absolute;
  width: 100%;
  height: 100%;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>
