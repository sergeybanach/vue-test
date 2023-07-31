<template>
  <div>
    <link
      rel="stylesheet"
      href="https://unpkg.com/maplibre-gl@3.2.1/dist/maplibre-gl.css"
    />
    <map-elem />
    <sample-button @click="getFakeData">getFakeData</sample-button>
    <div>{{ runtimeConfig.public.apiBase }}</div>
    <div>zoom: {{ zoom }}</div>
    <closable-block
      @closeBox="isClosableShown = false"
      v-show="isClosableShown"
    />
    <sample-button
      @click="isClosableShown = true"
      v-show="isClosableShown === false"
      >Restore box</sample-button
    >
  </div>
</template>

<script>
import { Map, Marker, Popup } from "maplibre-gl";
import styles_json from "~/some-style.json";

export default {
  setup(props, context) {
    const runtimeConfig = useRuntimeConfig();

    let mapRef = ref();
    provide("mapRef", mapRef);
    let map = ref();
    provide("map", map);

    const zoom = new ref(12);
    provide("zoom", zoom);

    const center = new ref([-77.04, 35.907]);
    provide("center", center);

    const isClosableShown = ref(true);

    async function getFakeData() {
      const res = await useFetch("https://jsonplaceholder.typicode.com/posts");
      console.log(res.data.value[0]["body"]);
    }

    onMounted(() => {
      sessionStorage.setItem("styles_json", JSON.stringify(styles_json));

      initMap();
    });

    watch(zoom, (newVal, oldVal) => {
      map.value.setZoom(newVal);
    });

    watch(center, (newVal) => {
      console.log("Center watcher")
      map.value.setCenter(newVal);
    });

    function initMap() {
      window.map = map;
      map.value = new Map({
        container: mapRef.value,
        style: JSON.parse(sessionStorage.getItem("styles_json")),
        center: center.value,
        zoom: zoom.value,
      });
    }

    return {
      map,
      runtimeConfig,
      getFakeData,
      isClosableShown,
      zoom,
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
