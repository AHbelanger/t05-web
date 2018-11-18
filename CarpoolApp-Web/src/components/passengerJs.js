import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

var nameSorted = 0
var idSorted = 0
var priceSorted = 0
var totalKmSorted = 0

function PassengerDto(name) {
    this.name = name
    this.id = undefined
    this.totalKM = undefined
    this.averagePrice = undefined
    this.routes = []
    this.stops = []
}

function RoutesDto(id) {
    this.id = id
    this.price = undefined
    this.isActive = undefined
    this.isCompleted = undefined
    this.stops = []
    this.driver = undefined
    this.passenger = []
    this.vehicle = undefined
}

export default {
    name: 'passengers',
    data() {
        return {
            passengers: [],
            searchPassengers: [],
            newPassengers: '',
            errorPassenger: '',
            response: []
        }
    },
    // Getting passengers from backend
    created: function () {
        // // Initializing passengers from backend
        //   AXIOS.get(`/passengers`)
        //   .then(response => {
        //     // JSON responses are automatically parsed.
        //     this.passengers = response.data
        //   })
        //   .catch(e => {
        //     this.errorPassenger = e;
        //   });

        // Test participants
        const p1 = new PassengerDto('Zohn')
        const p2 = new PassengerDto('Jill')
        const p3 = new PassengerDto('An')
        const p4 = new PassengerDto('Aidi')
        const p5 = new PassengerDto('Bob')

        p1.id = 20
        p2.id = 3
        p3.id = 7
        p4.id = 13
        p5.id = 45

        p1.averagePrice = 3
        p2.averagePrice = 7
        p3.averagePrice = 1
        p4.averagePrice = 11
        p5.averagePrice = 0.5

        p1.totalKM = 100
        p2.totalKM = 250
        p3.totalKM = 14
        p4.totalKM = 57
        p5.totalKM = 115

        p1.routes=[{"id":"4"}, {"id":"99"}, {"id":"17"}, {"id":"3"}]

        // Sample initial content
        this.passengers = [p1, p2, p3, p4, p5]
        this.searchPassengers = this.passengers
    },
    methods: {
        //Sort passengers name
        sortName: function () {
            idSorted = 0
            priceSorted = 0
            totalKmSorted = 0

            if(nameSorted == 0){
                this.passengers.sort(function(a, b){
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                nameSorted = 1;
            } else {
                this.passengers.reverse(function(a, b){
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                nameSorted = 0;
            }
          },

        // Sort passengers by id
        sortID: function(){
            nameSorted = 0
            priceSorted = 0
            totalKmSorted = 0

            if(idSorted == 0){
                this.passengers.sort(function(a, b){
                    return a.id - b.id
                });
                idSorted = 1
            } else {
                this.passengers.sort(function(a, b){
                    return b.id - a.id
                });
                idSorted = 0
                
            }
        },
        //Sort passenger by price
        sortPrice: function(){
            nameSorted = 0
            idSorted = 0
            totalKmSorted = 0

            if(priceSorted == 0){
                this.passengers.sort(function(a, b){
                    return a.averagePrice - b.averagePrice
                });
                priceSorted = 1
            } else {
                this.passengers.sort(function(a, b){
                    return b.averagePrice - a.averagePrice
                });
                priceSorted = 0
                
            }
        },
        //Sort passenger by total km
        sortTotalKM: function(){
            nameSorted = 0
            idSorted = 0
            priceSorted = 0

            if(totalKmSorted == 0){
                this.passengers.sort(function(a, b){
                    return a.totalKM - b.totalKM
                });
                totalKmSorted = 1
            } else {
                this.passengers.sort(function(a, b){
                    return b.totalKM - a.totalKM
                });
                totalKmSorted = 0
                
            }
        },
        search: function(){
            var substring = document.getElementById("searchBox").value.toLowerCase();

            var newPassengers = []

            for(var i = 0; i < this.passengers.length; i++)
            {
                var curName = this.passengers[i].name.toLowerCase()
                if(curName.includes(substring))
                {
                    newPassengers.push(this.passengers[i])
                }
                
            }
            this.searchPassengers = newPassengers;
        }
    }
}