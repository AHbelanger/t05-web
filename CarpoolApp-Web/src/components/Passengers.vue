<template>

<div id="passengerPage">

<!-- Navigation bar  -->
    <div class="topnav" id="main_nav">
	  
      <router-link to="home">Home</router-link>
	  <a href="https://github.com/ECSE321-Fall2018/t05/wiki"  target="_blank">About</a>
	  <a href="">Our Application</a>

      <router-link to="Passengers">Passengers</router-link>
	  <router-link to="">Drivers</router-link>
	  <router-link to="">Routes</router-link>

	</div>
   
   <!-- Active participants table -->
   <div class="passengerTable" id="passengerTableId">
        <h1>List of Active Passengers</h1>
        <table id="myTable">
            <tr>
                <th v-on:click="sortName">Name</th>
                <th>ID</th>
                <th>Averaige Price Paid Per Km</th>
                <th>Total Distance Traveled</th>
            </tr>
            <tr class="item">
                <td>Roger Zhang</td>
                <td>5</td>
                <td>2</td>
                <td>50000</td>
            </tr>
            <tr v-for="passenger in passengers">
                <td>{{ passenger.name }}</td>
                <td>{{ passenger.id }}</td>
                <td>{{ passenger.averagePaidPerKm }}</td>
                <td>{{ passenger.totalKm }}</td>
            </tr>
        </table>

    </div>

    <div>
        <!-- `greet` is the name of a method defined below -->
        <button v-on:click="sortName">Sort</button>
    </div>

    <!-- Error -->
    <span v-if="errorPassenger" style="color:red">Error: {{errorPassenger}} </span>



</div>

</template>

<script src="./passengerJs.js">
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

/* Participants Table */
.passengerTable h1 {
  padding-top: 1em;
  font-family: Helvetica, Arial;
  font-size: 2em;
  text-transform: uppercase;
}

.passengerTable table {
  margin-top: 3em;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}

.passengerTable th,
td {
  font-family: Helvetica, Arial;
  font-size: 1em;
  padding: 0.5em;
  border: 1px solid black;
}

.passengerTable th{
    cursor:grab;
}
</style>