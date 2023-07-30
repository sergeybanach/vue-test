<template>
  <div>
    <link
      rel="stylesheet"
      href="https://unpkg.com/maplibre-gl@3.2.1/dist/maplibre-gl.css"
    />
    <map-elem />
    <map-controllers />
  </div>
</template>

<script>
import { Map, Marker, Popup } from "maplibre-gl";
import styles_json from "~/public/dark-matter.json";
export default {
  setup() {
    console.log(styles_json);

    const mapRef = ref();
    provide("mapRef", mapRef);
    let map = ref();
    provide("map", map);

    const markers = ref([]);

    onMounted(() => {
      localStorage.setItem("styles_json", JSON.stringify(styles_json));
      initMap();
    });
    
    function initMap() {
      window.map = map;
      map.value = new Map({
        container: "map",
        style: {
          version: 8,
          sources: {},
          layers: [
            {
              id: "pink_layer",
              type: "background",
              paint: {
                "background-color": "#ffbbcc"
              }
            }
          ]
        },
        center: [-77.04, 38.907],
        zoom: 11.15,
      });
    }

    function btnClick() {
      drawPoints();
    }

    return {
      btnClick,
      markers,
      map,
    };
  },
  mounted() {
    console.log("mounted", this);
  },
  data() {
    return {
      test1: "test1",
    };
  },
};
</script>

<style scoped></style>
