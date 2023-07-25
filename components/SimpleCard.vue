<template>
  <div class="outer-box">
    <div class="header grid-item">
      <div class="title">title title title</div>
      <div class="subtitle">subtitle subtitle</div>
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
@media (max-width: 400px) {
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
}

.header .title {
  font-size: 2rem;
  color: black;
}
.header .subtitle {
  font-size: 1.5rem;
  color: rgb(78, 78, 78);
}
.outer-box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  justify-content: center;
  align-items: center;
  width: 200;
  height: 200px;
  position: relative;
  gap: 5px;
}
.outer-box .text {
  font-size: 2rem;
}
.button {
  background-color: rgb(196, 169, 133);
  display: inline-block;
  padding: 5px;
  cursor: pointer;
}
.button:hover {
  background-color: rgb(135, 117, 92);
}
</style>
