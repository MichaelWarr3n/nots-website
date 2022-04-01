<script>
import items from '../data/items.js';

export default {
  name: 'Cart',
  data() {
    return {
      items: items,
    };
  },
  computed: {
    totalCheckoutValue() {
      return ((this.$store.state.macrameBagQty * Number(this.items[0].price)) + (this.$store.state.macrameHangerQty * Number(this.items[1].price)) + (this.$store.state.carabinaQty * Number(this.items[2].price)) + (this.$store.state.cameraStrapQty * Number(this.items[3].price))).toFixed(2);
    }
  }
};
</script>


<template>
  <div class="cart-container">
    <div v-if="this.$store.state.macrameBagQty === 0 && 
    this.$store.state.macrameHangerQty === 0 &&
    this.$store.state.carabinaQty === 0 &&
    this.$store.state.cameraStrapQty === 0" class="empty-cart-container">
      <img src="@/assets/sad-smiley.png" alt="sad cartoon face">
      <p>it looks like there's nothing in your basket...</p>
    </div>
    <div v-else class="full-cart-container">
      <table class="checkout-table">
        <tr class="item-headers">
          <th></th>
          <th>Name</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
        <tr v-if="this.$store.state.macrameBagQty" class="item-row">
          <td><img v-bind:src="require(`@/assets/${items[0].imageSrc}`)" v-bind:alt="items[0].imageAlt"></td>
          <td>{{items[0].name}}</td>
          <td>{{items[0].price}}</td>
          <td>
            <div class="quantity-data">
              <button class="quantity-button" @click="() => this.$store.commit('removeMacrameBag')">-</button>
              {{this.$store.state.macrameBagQty}}
              <button class="quantity-button" @click="() => this.$store.commit('addMacrameBag')">+</button>
            </div>
          </td>
        </tr>
        <tr v-if="this.$store.state.macrameHangerQty" class="item-row">
          <td><img v-bind:src="require(`@/assets/${items[1].imageSrc}`)" v-bind:alt="items[1].imageAlt"></td>
          <td>{{items[1].name}}</td>
          <td>{{items[1].price}}</td>
          <td>
            <div class="quantity-data">
              <button class="quantity-button" @click="() => this.$store.commit('removeMacrameHanger')">-</button>
              {{this.$store.state.macrameHangerQty}}
              <button class="quantity-button" @click="() => this.$store.commit('addMacrameHanger')">+</button>
            </div>
          </td>
        </tr>
        <tr v-if="this.$store.state.carabinaQty" class="item-row">
          <td><img v-bind:src="require(`@/assets/${items[2].imageSrc}`)" v-bind:alt="items[2].imageAlt"></td>
          <td>{{items[2].name}}</td>
          <td>{{items[2].price}}</td>
          <td>
            <div class="quantity-data">
              <button class="quantity-button" @click="() => this.$store.commit('removeCarabina')">-</button>
              {{this.$store.state.carabinaQty}}
              <button class="quantity-button" @click="() => this.$store.commit('addCarabina')">+</button>
            </div>
          </td>
        </tr>
        <tr v-if="this.$store.state.cameraStrapQty" class="item-row">
          <td><img v-bind:src="require(`@/assets/${items[3].imageSrc}`)" v-bind:alt="items[3].imageAlt"></td>
          <td>{{items[3].name}}</td>
          <td>{{items[3].price}}</td>
          <td>
            <div class="quantity-data">
              <button class="quantity-button" @click="() => this.$store.commit('removeCameraStrap')">-</button>
              {{this.$store.state.cameraStrapQty}}
              <button class="quantity-button" @click="() => this.$store.commit('addCameraStrap')">+</button>
            </div>
          </td>
        </tr>
        <tr class="table-footer">
          <td></td>
          <td></td>
          <td>{{totalCheckoutValue}}</td>
          <td><button>checkout &gt;</button></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>

.cart-container {
    min-height: 90vh;
    background-color: #AACB53;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Space Mono', monospace;
}

.empty-cart-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 28px;
}

.empty-cart-container img {
  width: 50%;
  margin-bottom: 30px;
}

.full-cart-container {
  width: 80%;
}

.full-cart-container table {
  width: 100%;
  margin: 5vh 0;
  background-color: #FFF;
}

.checkout-table, .item-headers, .item-row, .item-headers th, .item-row td, .table-footer td {
  border-collapse: collapse;
  border: 1px #000 solid;
}

.item-headers th {
  padding: 10px;
  font-weight: 700;
}

.item-row {
  height: 20vh;
}

.item-row img {
  height: 15vh;
}

.item-row td, .table-footer td {
  text-align: center;
  vertical-align: middle;
}

.table-footer td {
  padding: 10px;
}

.table-footer td button {
  width: 80%;
  padding: 5px;
  font-family: 'Space Mono', monospace;
  background-color: #AACB53;
  color: #FFF;
  border: none;
}

.quantity-data {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quantity-button {
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  font-family: 'Space Mono', monospace;
  background-color: #AACB53;
  color: #FFF;
  border: none;
}

.quantity-button:hover, .table-footer td button:hover {
  cursor: pointer;
  background-color: #294898;
}

</style>