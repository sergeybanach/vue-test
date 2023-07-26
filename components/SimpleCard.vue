<template>
  <div class="outer-box">
    <div class="header grid-item">
      <div class="title">Lorem ipsum dolor sit amet.</div>
      <div class="subtitle">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, inventore!
      </div>
    </div>
    <div class="content grid-item">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum doloremque
      atque deleniti quas autem iusto. Temporibus soluta perferendis enim
      doloribus rerum
    </div>
    <div class="img-box grid-item"></div>
  </div>
</template>

<script setup></script>

<style scoped></style>

<style>
.grid-item {
  height: 100%;
  padding: 1rem;
}
.outer-box {
  display: grid;
  grid-template-columns: 1fr 1fr 200px;
  grid-template-rows: 200px 1fr 1fr;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 200;
  height: 200px;
  position: relative;
  gap: 5px;
}
.outer-box .img-box {
  background-image: url("/img.jpg");
  background-size: cover;
  background-position: -50px -20px;
  background-size: 140%;
  grid-column: 3;
  grid-row-start: 1;
  grid-row-end: 4;
  width: 200px;
  height: 200px;
}
.outer-box .header {
  grid-column: 1 / span 2;
  grid-row: 1;
}
.outer-box .content {
  grid-column: 1 / span 2;
  grid-row: 2 / span 2;
}
.header .title {
  font-size: 2rem;
  color: black;
}
.header .subtitle {
  font-size: 1.2rem;
  color: rgb(78, 78, 78);
}
@media (max-width: 600px) {
  .outer-box .img-box {
    grid-column: 3;
    grid-row: 1;
    width: 100px;
    height: 100px;
  }
  .outer-box .header {
    grid-column: 1 / span 2;
    grid-row: 1;
  }
  .outer-box .content {
    grid-column: 1 / span 3;
    grid-row: 2 / span 2;
  }
  .outer-box {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100px 1fr 1fr;
  }
}
@media (max-width: 400px) {
  .outer-box .img-box {
    width: 50px;
    height: 50px;
  }
  .outer-box {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50px 1fr 1fr;
  }
}


</style>
