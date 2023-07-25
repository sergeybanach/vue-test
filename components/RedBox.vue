<template>
  <div class="box">
    redbox: {{ x }} {{ y }}
  </div>
</template>

<script setup>
const { x, y } = useMouse();
</script>

<style scoped>
  .box {
    width: 500px;
    height: 200px;
    background-color: rgb(255, 184, 184);
  }
</style>