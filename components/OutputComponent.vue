<template>
  <div>
    <div>Center: {{ center }}</div>
  </div>
</template>

<script>
  export default {
    setup() {
      const center = inject("center");
      return {
        center
      }
    }
  }
</script>

<style scoped>

</style>