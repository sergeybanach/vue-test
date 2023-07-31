<template>
  <div class="map-controllers">
    <div>
      <sample-button @click="zoomIn">zoomIn</sample-button>
      <sample-button @click="zoomOut">zoomOut</sample-button>
    </div>
    <sample-button @click="setCenter">setCenter</sample-button>
    <div>lng = <input type="text" name="" id="" v-model="lng" /></div>
    <div>lat = <input type="text" name="" id="" v-model="lat" /></div>
  </div>
</template>

<script>
export default {
  setup() {
    const zoom = inject("zoom");
    const center = inject("center");
    const map = inject("map");
    const lng = ref(center.value[0]);
    const lat = ref(center.value[1]);

    function zoomIn() {
      zoom.value += 1;
    }
    function zoomOut() {
      zoom.value -= 1;
    }
    function setCenter() {
      map.value.setCenter([Number(lng.value), Number(lat.value)]);
      center.value = [Number(lng.value), Number(lat.value)];
    }
    return {
      zoomIn,
      zoomOut,
      lng,
      lat,
      setCenter,
      center,
    };
  },
};
</script>

<style scoped></style>
