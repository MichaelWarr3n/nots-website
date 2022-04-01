<template>
  <div id="app">
    <nav class="nav">
      <div class="spacing-div">
      </div>
      <div class="nav-options">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/shop">Shop</router-link>
      </div>
      <div class="basket-container">
        <router-link to='/cart'><span class="fa fa-cart-shopping"></span></router-link>
      </div>
    </nav>
    <router-view />
  </div>
</template>


<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dPIFZifjKcF5UAWdDRYEF8RXi4EwQ.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/spacemono/v10/i7dMIFZifjKcF5UAWdDRaPpZUFWaHi6WZ3Q.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-family: 'Lakki Reddy';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/lakkireddy/v17/S6u5w49MUSzD9jlCPmvLZTfvzdgf7PxY.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

#app {
  background-image: url('./assets/logo-1.jpg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #AACB53;
}

.nav {
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
  font-family: 'Lakki Reddy', sans-serif;
}

.nav-options a {
  font-weight: bold;
  color: #121212;
  padding: 0 20px;
  font-size: 20px;
}

.basket-container {
  margin-right: 100px;
}

.basket-container a {
  color: #121212;
}

.basket-container svg {
  width: 25px;
  height: 25px;
}

.spacing-div {
  margin-left: 100px;
  width: 25px;
}

.nav a.router-link-exact-active {
  color: #294898;
}

.hidden {
  display: none;
}

@media only screen and (max-width: 700px) {

  .basket-container {
    margin-right: 30px;
  }

  .spacing-div {
    display: none;
  }

}

@media only screen and (max-width: 400px) {

  .nav-options a {
    padding: 0 12px;
  }

  .basket-container {
    margin-right: 10px;
  }

}
</style>
