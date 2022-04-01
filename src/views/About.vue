<template>
  <div class="about">
    <div class="about-container">
      <h1>About</h1>
      <img class="flower-small" src="../assets/flower-art.jpg" alt="flower art">
      <img class="flower-medium" src="../assets/flower-art.jpg" alt="flower art">
      <img class="flower-large" src="../assets/flower-art.jpg" alt="flower art">
      <div class="text-image-container">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img src="../assets/logo-2.jpg" alt="Nots alternate logo">
      </div>
    </div>
  </div>
</template>

<style scoped>

.about {
  width: 100vw;
  height: 90vh;
  background-color: #AACB53;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-container {
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-container h1 {
  font-family: 'Lakki Reddy', sans-serif;
  font-size: 48px;
  margin: 50px;
}

.flower-small {
  width: 10vw;
  position: absolute;
  right: 80vw;
  bottom: 10vh;
}

.flower-medium {
  width: 12vw;
  position: absolute;
  left: 80vw;
  top: 15vh;
}

.flower-large {
  width: 14vw;
  position: absolute;
  left: 50vw;
  top: 20vh;
}

.text-image-container {
  height: 30vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.text-image-container p {
  width: 40%;
  font-family: 'Space Mono', monospace;
  background-color: #C8D989;
  padding: 10px;
  border-radius: 5%;
  z-index: 2;
  font-size: 18px;
}

.about-container .text-image-container img {
  height: 100%;
  max-width: 50%;
  object-fit: cover;
}

@media only screen and (max-width: 968px) {

  .text-image-container {
    flex-direction: column;
    height: auto;
  }

  .text-image-container p {
    width: 100%;
  }

  .about-container .text-image-container img {
    margin-top: 40px;
  }

  .about-container h1 {
    font-size: 36px;
    margin: 40px;
  }

}

@media only screen and (max-width: 400px) {

  .about-container h1 {
    font-size: 24px;
    margin: 30px;
  }

  .text-image-container p {
    font-size: 14px;
  }

}

</style>
