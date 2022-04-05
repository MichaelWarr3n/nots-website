<script>
import items from '../data/items.js';
import ItemCard from '../components/ItemCard.vue';
import Modal from '../components/Modal.vue';

  export default {
    name: 'Shop',
    components: {
      ItemCard,
      Modal
    },
    data() {
      return {
        items: items,
        isModalVisible: false,
        modalSelect: 0
      };
    },
    methods: {
      showModal(e) {
        this.isModalVisible = true;
        this.modalSelect = e.target.getAttribute('pkey');
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
  };
</script>


<template>
  <div class="shop">
    <div class="items-container">

      <ItemCard
        v-for="item in this.items"
        v-bind:itemName="item.name" 
        v-bind:itemPrice="item.price" 
        v-bind:imageSrc="item.imageSrc" 
        v-bind:imageAlt="item.imageAlt"
        v-bind:key="item.key"
        v-bind:pkey="item.index"
        v-bind:showModal="showModal"
      />
      
    </div>

    <Modal 
      v-show="isModalVisible" 
      @close="closeModal" 
      v-bind:modalHeader="this.items[this.modalSelect].name" 
      v-bind:modalBody="this.items[this.modalSelect].description"
      v-bind:itemSelect="this.modalSelect"
    />

  </div>
</template>

<style scoped>

.shop {
  width: 100vw;
  min-height: 90vh;
  background-color: #AACB53;
  display: flex;
  justify-content: center;
  align-items: center;
}

.items-container {
  width: 80%;
  height: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 80px;
  box-sizing: border-box;
  padding: 80px;
}

@media only screen and (max-width: 700px) {

  .items-container {
    width: 90%;
    height: 90%;
    padding: 40px;
    gap: 40px;
  }

}

@media only screen and (max-width: 465px) {

  .items-container {
    padding: 20px;
    gap: 20px;
  }

}

</style>