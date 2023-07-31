<template>
  <div>
    <link
      rel="stylesheet"
      href="https://unpkg.com/maplibre-gl@3.2.1/dist/maplibre-gl.css"
    />
    <map-elem />
    <map-controllers />
    <sample-button @click="getFakeData">getFakeData</sample-button>
    <div>{{ runtimeConfig.public.apiBase }}</div>
    <closable-block @closeBox="isClosableShown = false;" v-show="isClosableShown"/>
  </div>
</template>

<script>
import { Map, Marker, Popup } from "maplibre-gl";
import { JsxFlags, forEachChild } from "typescript";
import styles_json from "~/some-style.json";

export default {
  setup(props, context) {
    const runtimeConfig = useRuntimeConfig();

    console.log(context);
    const mapRef = ref();
    provide("mapRef", mapRef);
    let map = ref();
    provide("map", map);

    const markers = ref([]);

    const isClosableShown = ref(true);

    async function getFakeData() {
      const res = await useFetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      console.log(res.data.value[0]["body"])
    }

    onMounted(() => {
      sessionStorage.setItem("styles_json", JSON.stringify(styles_json));
      sessionStorage.setItem("center", JSON.stringify([-77.0, 38.6]));
      sessionStorage.setItem("zoom", JSON.stringify(9));

      initMap();
    });

    function initMap() {
      window.map = map;
      map.value = new Map({
        container: mapRef.value,
        style: JSON.parse(sessionStorage.getItem("styles_json")),
        center: JSON.parse(sessionStorage.getItem("center")) || [-77.04, 35.907],
        zoom: JSON.parse(sessionStorage.getItem("zoom")) || 11,
      });
    }

    return {
      markers,
      map,
      runtimeConfig,
      getFakeData,
      isClosableShown,
    };
  },
  data() {
    return {
      test1: "test1",
    };
  },
};
</script>

<style scoped></style>
