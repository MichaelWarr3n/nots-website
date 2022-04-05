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
  max-width: 13vw;
  margin-top: 15px;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.item img {
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
}

.item p {
  font-family: 'Space Mono', monospace;
  margin: 10px 0;
  pointer-events: none;
}

@media only screen and (max-width: 1000px) {

  .item {
    width: 22vw;
  }

  .image-container {
    height: 20vh;
    max-width: 20vw;
  }
  
}

@media only screen and (max-width: 700px) {

  .item {
    width: 32vw;
  }

  .image-container {
    height: 20vh;
    max-width: 30vw;
  }

}

@media only screen and (max-width: 465px) {

  .image-container {
    height: 16vh;
    max-width: 40vw;
  }

}

</style>