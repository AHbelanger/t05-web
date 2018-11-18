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
var startPointSorted = 0
var destinationSorted = 0

function routeDto (id){
    this.driverName = undefined
    this.id = id
    this.startPoint = undefined
    this.destination = undefined
}

export default {
    name: 'routes',
    data() {
        return {
            routes: [],
            newRoutes: '',
            errorRoute: '',
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

        //Test routes

        const r1 = new routeDto(5)
        const r2 = new routeDto(2)
        const r3 = new routeDto(13)
        const r4 = new routeDto(4)

        r1.driverName = 'Alex'
        r2.driverName = 'An'
        r3.driverName = 'Antoine'
        r4.driverName = 'Roger'

        r1.startPoint = 'Montreal'
        r2.startPoint = 'Quebec'
        r3.startPoint = 'Montreal'
        r4.startPoint = 'Quebec'

        r1.destination = 'trottier'
        r2.destination = 'schulich'
        r3.destination = 'mcconnel'
        r4.destination = 'redpath'

        this.routes = [r1, r2, r3, r4]
    },
    methods: {

        sortName: function () {
            idSorted = 0
            startPointSorted = 0
            destinationSorted = 0

            if(nameSorted == 0){
                this.routes.sort(function(a, b){
                    var x = a.driverName.toLowerCase();
                    var y = b.driverName.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                nameSorted = 1;
            } else {
                this.routes.reverse(function(a, b){
                    var x = a.driverName.toLowerCase();
                    var y = b.driverName.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                nameSorted = 0;
            }
        },
        // Sort routes by id
        sortID: function(){
            nameSorted = 0
            startPointSorted = 0
            destinationSorted = 0

            if(idSorted == 0){
                this.routes.sort(function(a, b){
                    return a.id - b.id
                });
                idSorted = 1
            } else {
                this.routes.sort(function(a, b){
                    return b.id - a.id
                });
                idSorted = 0
                
            }
        },
        sortstartPoint: function () {
            idSorted = 0
            nameSorted = 0
            destinationSorted = 0

            if(startPointSorted == 0){
                this.routes.sort(function(a, b){
                    var x = a.startPoint.toLowerCase();
                    var y = b.startPoint.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                startPointSorted = 1;
            } else {
                this.routes.reverse(function(a, b){
                    var x = a.startPoint.toLowerCase();
                    var y = b.startPoint.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                startPointSorted = 0;
            }
        },
        sortDestination: function () {
            idSorted = 0
            nameSorted = 0
            destinationSorted = 0

            if(destinationSorted == 0){
                this.routes.sort(function(a, b){
                    var x = a.destination.toLowerCase();
                    var y = b.destination.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                destinationSorted = 1;
            } else {
                this.routes.reverse(function(a, b){
                    var x = a.destination.toLowerCase();
                    var y = b.destination.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                destinationSorted = 0;
            }
        }


    
    }


}