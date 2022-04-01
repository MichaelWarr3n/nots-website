<template>
  <div class="home">
    <div class="home-buttons">
      <router-link to="/about">About &#62;</router-link>
      <router-link to="/shop">Shop &#62;</router-link>
    </div>
  </div>
</template>

<style scoped>

.home {
  height: 90vh;
  width: 100vw;
}

.home-buttons {
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  top: 70vh;
}

.home-buttons a {
  height: 80%;
  width: 25%;
  font-family: 'Space Mono', monospace;
  font-weight: 700;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  background-color: #294898;
  color: #AACB53;
  margin: 0 20px;
}

.home-buttons a:hover {
  color: #294898;
  background-color: #AACB53;
  cursor: pointer;
  border: 5px #294898 solid;
}

@media only screen and (max-width: 700px) {

  .home-buttons a {
    width: 30%;
  }

}

</style>
