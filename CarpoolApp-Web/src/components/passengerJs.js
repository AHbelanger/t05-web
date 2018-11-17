import axios from 'axios'
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': frontendUrl }
})

var sorted = 0

function PassengerDto(name) {
    this.name = name
    this.id = undefined
    this.totalKM = undefined
    this.averagePrice = undefined
    this.routes = []
    this.stops = []
}

export default {
    name: 'passengers',
    data() {
        return {
            passengers: [],
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
        // Sample initial content
        this.passengers = [p1, p2, p3, p4, p5]
    },
    methods: {
        //Sort passengers name
        sortName: function () {
            if(sorted == 0){
                this.passengers.sort(function(a, b){
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                sorted = 1;
            } else {
                this.passengers.reverse(function(a, b){
                    var x = a.name.toLowerCase();
                    var y = b.name.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                sorted = 0;
            }
          }
    }
}