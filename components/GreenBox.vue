<template>
  <div class="box">greenbox: {{ x }} {{ y }}</div>
</template>

<script setup>
const { x, y } = useMouse();
</script>

<style scoped>
.box {
  width: 500px;
  height: 200px;
  background-color: rgb(222, 255, 184);
}
</style>
