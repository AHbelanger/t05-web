<template>

<div id="carpoolMainPage">

<!-- Navigation bar  -->
    <div class="topnav" id="main_nav">
      <router-link to="/">Home</router-link>
	  <a href="https://github.com/ECSE321-Fall2018/t05-web/wiki"  target="_blank">About</a>
      <router-link to="Passengers">Passengers</router-link>
	  <router-link to="Drivers">Drivers</router-link>
	  <router-link to="Routes">Routes</router-link>
	</div>

  <div class="description">
    <h1>What is this?</h1>
    <p> This web page lets our CarpoolApp admins have a fleet overview status and rank routes, passengers and drivers according to varying criteria.</p>
  </div>   

  <div class="features">
    <h2>Features</h2>
    <p>In this sprint, we were asked to implement a Vue.js web application do to support system admins of our CarpoolApp. Our web app is separated into tabs which include three categories: drivers, passengers and routes. A more detailed depiction of the features can be found in the about tab.</p>
  </div>

<div class="members">
  <h1>Our developers</h1>
  <div class="pictures">
    <img id="mike" src="https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.0-9/20664734_1427703367319401_288141981745405926_n.jpg?_nc_cat=108&_nc_ht=scontent.fyhu1-1.fna&oh=6db375bece753a4de20d91e0cf58fb3a&oe=5CAB9F31" alt="Mike">
    <img src="https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.0-9/19105704_1481648448524563_6891814565629293334_n.jpg?_nc_cat=111&_nc_ht=scontent.fyhu1-1.fna&oh=50babae7de0ce226e679b1c2658f3b9f&oe=5C72D17D" alt="An Khang">
    <img src="https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.0-9/17426085_1267275363362535_5560352914503949084_n.jpg?_nc_cat=103&_nc_ht=scontent.fyhu1-1.fna&oh=97b030a631a9517edc558357f24f3e19&oe=5CAD3EF6" alt="Roger">
    <img src="https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.0-9/12243259_911292588956552_5916802848587616830_n.jpg?_nc_cat=104&_nc_ht=scontent.fyhu1-1.fna&oh=0f00e33a67a8d3af20738e9e2df8afff&oe=5CB11557" alt="Alexa">
    <img src="https://www.instagram.com/p/BfE3byGFbfrMgnexqH4oE5GDVBsdR086H9Ap6w0/" alt="Antoine">
  </div>
</div>

</div>


</template>

<script>
  
</script>

<style>

/* Navigations bar */
.topnav a {
  color: #585858;
  text-align: center;
  padding: 16px;
  text-decoration: none;
  font-size: 10px;
  text-transform: uppercase;
  font-family: Helvetica, Arial;
  letter-spacing: 2px;	
}
.topnav a:hover {
  color: red;
}

.description{
  text-align: left;
  padding-left: 20%;
  padding-top: 5%;
}
.description h1{
  font-size: 1.9em;
}

.features{
  text-align: left;
  padding-left: 20%;
  padding-right: 13%;
  padding-top: 2%;
}

.members h1{
  font-size: 1.9em;
}

.members{
  text-align: left;
  padding-left: 20%;
  padding-right: 13%;
  padding-top: 2%;
}

.pictures{
  padding-top: 2%;
  padding-bottom: 10%;
}
.pictures img{
  width: 15%;
  height: auto;
}




</style>