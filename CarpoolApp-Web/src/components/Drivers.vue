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

    <h1>List of Drivers</h1>

    <!-- Select menu bar -->
    <div class="selectMenu">    
        <select id="selectActive" v-on:change="select">
            <option value="All">All</option>
            <option value="Active">Active</option>
        </select>
    </div>

  <!-- Search bar -->
  <input type="text" name="name" placeholder="Search..." id="searchBox" v-on:change="search()"><br>

  <!-- Driver table -->
  <div class="driverTable" id="driverTableId">
    <table id="myTable">
      <tr>
        <th v-on:click="sortName">Name</th>
        <th v-on:click="sortID">ID</th>
        <th v-on:click="sortPrice">Average Price Per Km</th>
        <th v-on:click="sortTotalKM">Total Distance Traveled</th>
        <th>Routes</th>
      </tr>
      <tr v-for="driver in searchDrivers" v-bind:id="driver.id">
        <td>{{ driver.name }}</td>
        <td>{{ driver.id }}</td>
        <td>{{ driver.averagePrice }}</td>
        <td>{{ driver.totalKM }}</td>
        <td class="routeList" id="routes">
                    <ul>
                        <li v-for="route in driver.routes" v-on:click="routeInfo(route)">
                            {{route.id}}
                        </li>
                    </ul>
                </td>
      </tr>
    </table>
  </div>

  <!-- Error code -->
  <span v-if="errorDriver" style="color:red">Error: {{errorDriver}} </span>

</div>

</template>

<script src="./DriversLogic.js">

</script>

<style scoped>

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

/* Drivers Table */
.driverTable h1 {
  padding-top: 1em;
  font-family: Helvetica, Arial;
  font-size: 2em;
  text-transform: uppercase;
}
.driverTable table {
  margin-top: 0.2em;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}
.driverTable th,td {
  font-family: Helvetica, Arial;
  font-size: 1em;
  padding: 0.5em;
  border: 1px solid black;
}
.driverTable th{
    cursor:pointer;
}
.driverTable th:hover{
    color: blue;
}
.routeList li:hover{
  color: blue;
}
</style>