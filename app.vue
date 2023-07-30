<template>
  <map-container />
</template>

<script>
export default {
  setup() {
    const map = new ref("initial map value");
    const t = ref("test ref")
    provide("map", map);
    function btnClick() {
      console.log("Click button");
    }
    return {
      btnClick
    }
  }
};
</script>

<style scoped></style>
