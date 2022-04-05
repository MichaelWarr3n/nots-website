<script>
  export default {
    name: 'Modal',
    props: {'modalHeader': String, 'modalBody': String, 'itemSelect': String},
    methods: {
      close() {
        this.$emit('close');
      },
      addToCart() {
        if (this.itemSelect === '0') {
          this.$store.commit('addMacrameBag');
        }
        else if (this.itemSelect === '1') {
          this.$store.commit('addMacrameHanger');
        }
        else if (this.itemSelect === '2') {
          this.$store.commit('addCarabina');
        }
        else if (this.itemSelect === '3') {
          this.$store.commit('addCameraStrap');
        };
      },
      removeFromCart() {
        if (this.itemSelect === '0') {
          this.$store.commit('removeMacrameBag');
        }
        else if (this.itemSelect === '1') {
          this.$store.commit('removeMacrameHanger');
        }
        else if (this.itemSelect === '2') {
          this.$store.commit('removeCarabina');
        }
        else if (this.itemSelect === '3') {
          this.$store.commit('removeCameraStrap');
        };
      }
    },
  };
</script>

<template>
  <div class="modal-backdrop" @click.self="close">
    <div class="modal">
      <header class="modal-header">
        <p> {{modalHeader}} </p>
        <button type="button" class="btn-close" @click="close">x</button>
      </header>

      <section class="modal-body">
        <p> {{modalBody}} </p>
        <img src="" alt="">
      </section>

      <footer class="modal-footer">
        <p class="basket-label">Quantity in cart</p>
        <button class="quantity-button" @click="removeFromCart">-</button>
        <p v-if="this.itemSelect === '0'" class="basketQty">{{this.$store.state.macrameBagQty}}</p>
        <p v-if="this.itemSelect === '1'" class="basketQty">{{this.$store.state.macrameHangerQty}}</p>
        <p v-if="this.itemSelect === '2'" class="basketQty">{{this.$store.state.carabinaQty}}</p>
        <p v-if="this.itemSelect === '3'" class="basketQty">{{this.$store.state.cameraStrapQty}}</p>
        <button class="quantity-button" @click="addToCart">+</button>
      </footer>
    </div>
  </div>
</template>


<style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    font-family: 'Space Mono', monospace;
    width: 40vw;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #AACB53;
    justify-content: space-between;
    align-items: center;
    display: flex;
    padding: 15px;
    font-size: 24px;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    display: flex;
    justify-content:right;
    align-items: center;
    padding: 15px;
  }

  .modal-body {
    position: relative;
    padding: 30px 10px;
  }

  .basket-label {
    margin-right: 20px;
  }

  .basketQty {
    font-weight: 700;
    padding: 0 10px;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: #AACB53;
    background: transparent;
  }

  .quantity-button {
    padding: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Space Mono', monospace;
    background-color: #AACB53;
    color: #FFF;
    border: none;
  }

  .quantity-button:hover {
    cursor: pointer;
    background-color: #294898;
  }

  @media only screen and (max-width: 700px) {

    .modal {
      width: 60vw;
    }

    .modal-body {
      font-size: 14px;
    }

  }

  @media only screen and (max-width: 350px) {

    .modal-header {
      font-size: 20px;
      padding: 10px;
    }

    .modal-body {
      padding: 10px;
    }

  }

</style>
