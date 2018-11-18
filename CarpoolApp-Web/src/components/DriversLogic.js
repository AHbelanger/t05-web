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
var totalKmSorted = 0
var priceSorted = 0

function Driver(id) {
    this.id = id
    this.name = undefined
    this.totalKM = undefined
    this.averagePrice = undefined
    this.routes = []
    this.vehicles = []
}

export default {
    name: 'drivers',
    data() {
        return {
            drivers: [],
            errorDriver: '',
            response: []
        }
    },
    created: function () {
        // Initializing participants from backend
        // AXIOS.get(`/drivers`)
        //     .then(response => {
        //         // JSON responses are automatically parsed.
        //         this.drivers = response.data
        //     })
        //     .catch(e => {
        //         this.errorDriver = e;
        //     });

            const p1 = new Driver("1")
            p1.name = "An Khang"
            p1.averagePrice = 342
            p1.totalKM = 134
           
            const p2 = new Driver("2")
            p2.name = "Antoine"
            p2.averagePrice = 541
            p2.totalKM = 980

            const p3 = new Driver("3")
            p3.name = "Roger"
            p3.averagePrice = 512
            p3.totalKM = 18

            const p4 = new Driver("4")
            p4.name = "Alexa"
            p4.averagePrice = 454
            p4.totalKM = 902


            const p5 = new Driver("5")
            p5.name = "Mike"
            p5.averagePrice = 246
            p5.totalKM = 107

            this.drivers = [p1,p2,p3,p4,p5]
    },
    methods: {
        sortName: function () {
            idSorted = 0
            priceSorted = 0
            totalKmSorted = 0


            if(nameSorted == 0){
                this.drivers.sort(function(a, b){
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                nameSorted = 1;
            } else {
                this.drivers.reverse(function(a, b){
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
                this.drivers.sort(function(a, b){
                    return a.id - b.id
                });
                idSorted = 1
            } else {
                this.drivers.sort(function(a, b){
                    return b.id - a.id
                });
                idSorted = 0
                
            }
        },
        //Sort passenger by total km
        sortTotalKM: function(){
            nameSorted = 0
            idSorted = 0
            priceSorted = 0

            if(totalKmSorted == 0){
                this.drivers.sort(function(a, b){
                    return a.totalKM - b.totalKM
                });
                totalKmSorted = 1
            } else {
                this.drivers.sort(function(a, b){
                    return b.totalKM - a.totalKM
                });
                totalKmSorted = 0
            }
        },
        //Sort passenger by price
        sortPrice: function(){
            nameSorted = 0
            idSorted = 0
            totalKmSorted = 0

            if(priceSorted == 0){
                this.drivers.sort(function(a, b){
                    return a.averagePrice - b.averagePrice
                });
                priceSorted = 1
            } else {
                this.drivers.sort(function(a, b){
                    return b.averagePrice - a.averagePrice
                });
                priceSorted = 0
            }
        }
    }  
}