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

    <div>
        <b>Start X:</b>
        <input type="text" name="x" placeholder="Search..." id="searchBoxStartX" v-on:change="search">
        <b>Start Y:</b>
        <input type="text" name="y" placeholder="Search..." id="searchBoxStartY" v-on:change="search">
        <b>End X:</b>
        <input type="text" name="x" placeholder="Search..." id="searchBoxEndX" v-on:change="search">
        <b>End X:</b>
        <input type="text" name="y" placeholder="Search..." id="searchBoxEndY" v-on:change="search"><br>
    </div>
    <div>
        <b>Date 1:</b>
        <input type="text" name="date1" placeholder="YYYY-MM-DD HH:MM" id="date1">
        <b>Date 2:</b>
        <input type="text" name="date2" placeholder="YYYY-MM-DD HH:MM" id="date2">
        <button type="button" v-on:click="time">Time Frame!</button><br>
    </div>

<!-- Active Routes Table -->
    <div class="routeTable" id="routeTableId">
        <h1>List of Active Routes</h1>
        <table id="myTable">
            <tr>
                <th v-on:click="sortName">Driver Name</th>
                <th v-on:click="sortID">ID</th>
                <th v-on:click="sortstartPointX">Starting Point X</th>
                <th v-on:click="sortstartPointY">Starting Point Y</th>
                <th v-on:click="sortDestinationX">Destination X</th>
                <th v-on:click="sortDestinationY">Destination Y</th>
            </tr>
            <tr v-for="route in searchRoutes">
                <td>{{ route.driverName }}</td>
                <td>{{ route.id }}</td>
                <td>{{ route.startX }}</td>
                <td>{{ route.startY }}</td>
                <td>{{ route.endX }}</td>
                <td>{{ route.endY }}</td>
                <td>{{ route.date.toString() }}</td>
            </tr>
        </table>  
    
    </div>

    <!-- Error -->
    <span v-if="errorRoute" style="color:red">Error: {{errorRoute}} </span>


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

