<script>

export default {
  name: 'ItemCard',
  props: {'itemName': String, 'itemPrice': String, 'imageSrc': String, 'imageAlt': String, 'showModal': Function}
}

</script>


<template>

<div class="item" @click="showModal">
  <div class="image-container">
    <img v-bind:src="require(`@/assets/${imageSrc}`)" v-bind:alt="imageAlt">
  </div>
  <p>{{ itemName }}</p>
  <p>&pound;{{ itemPrice }}</p>
</div>

</template>

<style scoped>

.item {
  box-sizing: border-box;
  padding: 5px;
  width: 15vw;
  height: max-content;
  background-color: #f1eaea;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item:hover {
  background-color: #294898;
  cursor: pointer;
  color: #f1eaea;
}

.image-container {
  height: 25vh;
  margin-top: 15px;
  pointer-events: none;
}

.item img {
  height: 100%;
}

.item p {
  font-family: 'Space Mono', monospace;
  margin: 10px 0;
  pointer-events: none;
}

</style>