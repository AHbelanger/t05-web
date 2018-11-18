<template>
   
<div id="routesPage">

<!-- Navigation bar  -->
    <div class="topnav" id="main_nav">
	  
      <router-link to="home">Home</router-link>
	  <a href="https://github.com/ECSE321-Fall2018/t05/wiki"  target="_blank">About</a>
	  <a href="">Our Application</a>

      <router-link to="Passengers">Passengers</router-link>
	  <router-link to="">Drivers</router-link>
	  <router-link to="Routes">Routes</router-link>

	</div>

<!-- Active Routes Table -->
    <div class="routeTable" id="routeTableId">
        <h1>List of Active Routes</h1>
        <table id="myTable">
            <tr>
                <th v-on:click="sortName">Driver Name</th>
                <th v-on:click="sortID">ID</th>
                <th v-on:click="sortstartPoint">Starting Point</th>
                <th v-on:click="sortDestination">Destination</th>
            </tr>
            <tr v-for="route in routes">
                <td>{{ route.driverName }}</td>
                <td>{{ route.id }}</td>
                <td>{{ route.startPoint }}</td>
                <td>{{ route.destination }}</td>
            </tr>
        </table>  
    
    </div>

    <!-- Error -->
    <span v-if="errorPassenger" style="color:red">Error: {{errorPassenger}} </span>


</div>

</template>

<script src="./routesJs.js">
</script>

<style>
/* Navigation bar */
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

/*Routes table*/
.routeTable h1{
    padding-top: 1em;
  font-family: Helvetica, Arial;
  font-size: 2em;
  text-transform: uppercase;
}

.routeTable table{
     margin-top: 3em;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}

.routeTable th,
td{
    font-family: Helvetica, Arial;
  font-size: 1em;
  padding: 0.5em;
  border: 1px solid black;
}

.routeTable th{
    cursor:pointer;
}

.routeTable th:hover{
    color: blue;
}

</style>

