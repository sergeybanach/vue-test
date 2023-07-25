<template>
  <div>
    <RedBox />
  </div>
</template>

<script setup>
// import { useMouse } from '/mouse.js'
// const { data, refresh, pending } = await useAsyncData("/api/hello", () =>
//   $fetch("/api/hello")
  

// );
const count = ref(1);
const double = computed(() => count.value * 2)
const {x, y} = useMouse();

</script>
