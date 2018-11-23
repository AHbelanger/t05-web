<template>

<div id="carpoolMainPage">

<!-- Navigation bar  -->
    <div class="topnav" id="main_nav">
      <router-link to="home">Home</router-link>
	  <a href="https://github.com/ECSE321-Fall2018/t05/wiki"  target="_blank">About</a>
	  <a href="">Our Application</a>
      <router-link to="Passengers">Passengers</router-link>
	  <router-link to="Drivers">Drivers</router-link>
	  <router-link to="Routes">Routes</router-link>
	</div>
   
</div>

</template>

<script>
  // TODO
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

</style>