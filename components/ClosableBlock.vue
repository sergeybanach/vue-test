<template>
  <div class="closable-box">
    <div class="close-btn" @click="closeBox">close</div>
    <map-controllers />
    <output-component />
  </div>
</template>

<script>
export default {
  emits: ["closeBox"],
  setup(props, ctx) {
    function closeBox() {
      ctx.emit("closeBox");
    }
    return {
      closeBox,
    };
  },
};
</script>

<style scoped>
.closable-box {
  width: 400px;
  height: 400px;
  background-color: rgb(172, 231, 231);
  position: relative;
}
.close-btn {
  position: absolute;
  widows: 50px;
  height: 50px;
  top: 0;
  right: 0;
  background-color: rebeccapurple;
  cursor: pointer;
}
</style>
