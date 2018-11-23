<template>

<div id="passengerPage">

<!-- Navigation bar  -->
  <div class="topnav" id="main_nav"> 
    <router-link to="home">Home</router-link>
	  <a href="https://github.com/ECSE321-Fall2018/t05/wiki"  target="_blank">About</a>
	  <a href="">Our Application</a>
      <router-link to="Passengers">Passengers</router-link>
	  <router-link to="Drivers">Drivers</router-link>
	  <router-link to="Routes">Routes</router-link>
    </div>
   
    <h1>List of Active Passengers</h1>

    <div class="barContainer">
        <!-- Select menu bar -->
        <div class="selectMenu">    
            <select id="selectActive" v-on:change="select">
                <option value="All">All</option>
                <option value="Active">Active</option>
            </select>
        </div>

        <!-- Search bar -->
        <div class="searchBar">
            <input type="text" name="name" placeholder="Search..." id="searchBox" v-on:change="search"><br>
        </div>
    
        <div class="clearfix"></div>
    </div>

   <!-- Active participants table -->
   <div class="passengerTable" id="passengerTableId">
        
        <table id="myTable">
            <tr>
                <th v-on:click="sortName">Name</th>
                <th v-on:click="sortID">ID</th>
                <th v-on:click="sortPrice">Average Price Paid Per Km</th>
                <th v-on:click="sortTotalKM">Total Distance Traveled</th>
                <th>Routes</th>
            </tr>
            <tr v-for="passenger in searchPassengers">
                <td>{{ passenger.name }}</td>
                <td>{{ passenger.id }}</td>
                <td>{{ passenger.averagePrice }}</td>
                <td>{{ passenger.totalKM }}</td>
                <td class="routeList" id="routes">
                    <ul>
                        <li v-for="route in passenger.routes" v-on:click="routeInfo(route)">
                            {{route.id}}
                        </li>
                    </ul>
                </td>
            </tr>
        </table>

</div>

    <!-- Error -->
    <span v-if="errorPassenger" style="color:red">Error: {{errorPassenger}} </span>


</div>

</template>

<script src="./passengerJs.js">
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

/* Table title */
h1 {
  padding-top: 1em;
  font-family: Helvetica, Arial;
  font-size: 2em;
  text-transform: uppercase;
}

/* Bar container */
.barContainer{
    padding-top:1em;
}

/* Select menu */
.selectMenu{
    float: right;
    padding-right: 30.6%;
    padding-top: 0.5%;
}

/* Search bar */
.searchBar{
    float: left;
    padding-left: 30.5%;
}

/* Participants Table */
.passengerTable table {
  margin-top: 0.2%;
  margin-left: 30.5%;
  border: 1px solid black;
}

.passengerTable tr:hover {
    background-color: #f5f5f5;
}

.passengerTable th,
td {
  font-family: Helvetica, Arial;
  font-size: 1em;
  padding: 0.5em;
  border: 1px solid black;
}

.passengerTable th{
    cursor:pointer;
}

.passengerTable th:hover{
    color: blue;
}

.routes {
    text-align: left;
}

.clearfix{
    clear:both
}

.routeList li:hover{
  color: blue;
}
</style>


