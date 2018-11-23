<template>
   
<div id="routesPage">

<!-- Navigation bar  -->
    <div class="topnav" id="main_nav">
	  
      <router-link to="/">Home</router-link>
	  <a href="https://github.com/ECSE321-Fall2018/t05-web/wiki"  target="_blank">About</a>

      <router-link to="Passengers">Passengers</router-link>
	  <router-link to="Drivers">Drivers</router-link>
	  <router-link to="Routes">Routes</router-link>

	</div>



<!-- Active Routes Table -->
    <div class="routeTable" id="routeTableId">
        <h1>List of Active Routes</h1>


        <div class="searchCoordinate">
            <div class="startingPoint">
                <p>Starting coordinate:</p>
                <input type="text" name="x" placeholder="x..." id="searchBoxStartX" v-on:change="search">
                <input type="text" name="y" placeholder="y..." id="searchBoxStartY" v-on:change="search">
            </div>
            <div class="endPoint">
                <p>Destination coordinate:</p>
                <input type="text" name="x" placeholder="x..." id="searchBoxEndX" v-on:change="search">
                <input type="text" name="y" placeholder="y..." id="searchBoxEndY" v-on:change="search">
            </div>
        </div>
        <div class="searchDates">
            <div class="startDate">
                <p>Date 1:</p>
                <input type="text" name="date1" placeholder="YYYY-MM-DD HH:MM" id="date1">
            </div>
            <div class="endDate">
                <p>Date 2:</p>
                <input type="text" name="date2" placeholder="YYYY-MM-DD HH:MM" id="date2">
                <button type="button" v-on:click="time">Time Frame!</button>
            </div>
        </div>

        <div class="clearfix"></div>


        <table id="myTable">
            <tr>
                <th v-on:click="sortName">Driver Name</th>
                <th v-on:click="sortID">ID</th>
                <th v-on:click="sortstartPointX">Starting Point (x, y)</th>
                <th v-on:click="sortDestinationX">Destination Point (x, y)</th>
                <th>Date and time</th>
            </tr>
            <tr v-for="route in searchRoutes">
                <td>{{ route.driverName }}</td>
                <td>{{ route.id }}</td>
                <td>{{ route.startX + "," + route.startY}}</td>
                <td>{{ route.endX + "," + route.endY}}</td>
                <td>{{ route.date.getFullYear() + "/" + route.date.getMonth() + "/" + route.date.getDate() + " " + route.date.getHours() + ":" + route.date.getMinutes() }}</td>
            </tr>
        </table>  
    
    </div>

    <!-- Error -->
    <span v-if="errorRoute" style="color:red">Error: {{errorRoute}} </span>


</div>

</template>

<script src="./routesJs.js">
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

.searchCoordinate input{
    width: 15%;
}

/* Corrdinate search bars */
.searchCoordinate{
    float: left;
    padding-left: 20.4%
}

.startingPoint p{
    padding-left: 3%;
    margin-bottom: -0.5%
}

.endPoint p{
    padding-left: 9%;
    margin-bottom: -0.5%
}

/* Date and time search bars */
.searchDates{
    float: right;
    padding-right: 29.4%; 
}

.startDate p{
    padding-right: 71%;
    margin-bottom: -1%;
}

.startDate {
    padding-right: 40%;
}

.endDate p{
    padding-right:83%;
    margin-bottom: -1%;
}

/*Routes table*/
.routeTable h1{
    padding-top: 1em;
  font-family: Helvetica, Arial;
  font-size: 2em;
  text-transform: uppercase;
}

.routeTable table{
  margin-top: 1%;
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

.clearfix{
    clear:both
}

</style>

