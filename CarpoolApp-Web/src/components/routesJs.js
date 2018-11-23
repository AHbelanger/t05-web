import axios from 'axios'
import { timingSafeEqual } from 'crypto';
var config = require('../../config')

var frontendUrl = 'http://' + config.dev.host + ':' + config.dev.port
var backendUrl = 'http://' + config.dev.backendHost + ':' + config.dev.backendPort

var AXIOS = axios.create({
    baseURL: backendUrl,
    headers: { 'Access-Control-Allow-Origin': '*' }
})

var nameSorted = 0
var idSorted = 0
var startXSorted = 0
var startYSorted = 0
var destinationXSorted = 0
var destinationYSorted = 0

function routeDto (id){
    this.driverName = undefined
    this.id = id
    this.startX = undefined
    this.startY = undefined
    this.endX = undefined
    this.endY = undefined
    this.date = undefined
}

export default {
    name: 'routes',
    data() {
        return {
            routes: [],
            searchRoutes: [],
            newRoutes: '',
            errorRoute: '',
            response: []
        }
    },
    // Getting passengers from backend
    created: function () {
        // // Initializing passengers from backend
        //   AXIOS.get(`/ads`)
        //   .then(response => {
        //     // JSON responses are automatically parsed.
        //     this.routes = response.data
        //   })
        //   .catch(e => {
        //     this.errorRoute = e;
        //   });

        //Test routes

        const r1 = new routeDto(5)
        const r2 = new routeDto(2)
        const r3 = new routeDto(13)
        const r4 = new routeDto(4)

        r1.driverName = "AnKhang"
        r1.startX = 5
        r1.startY = 33
        r1.endX = 7
        r1.endY = 34
        r1.date = new Date("2018-11-20 5:10")

        r2.driverName = "Antoine"
        r2.startX = 14
        r2.startY = 61
        r2.endX = 8
        r2.endY = 3
        r2.date = new Date("2018-11-20 6:10")
        
        r3.driverName = "Alexa"
        r3.startX = 4
        r3.startY = 6
        r3.endX = 10
        r3.endY = 12
        r3.date = new Date("2018-10-20 5:10")

        r4.driverName = "Roger"
        r4.startX = 53
        r4.startY = 3
        r4.endX = 32
        r4.endY = 43
        r4.date = new Date("2018-11-20 4:10")

        this.routes.push(r1)
        this.routes.push(r2)
        this.routes.push(r3)
        this.routes.push(r4)
        this.searchRoutes = this.routes
    },
    methods: {

        sortName: function () {
            idSorted = 0
            startXSorted = 0
            startYSorted = 0
            destinationXSorted = 0
            destinationYSorted = 0

            if(nameSorted == 0){
                this.searchRoutes.sort(function(a, b){
                    var x = a.driverName.toLowerCase();
                    var y = b.driverName.toLowerCase();
                    if (x < y) {return -1;}
                    if (x > y) {return 1;}
                    return 0;
                });
                nameSorted = 1;
            } else {
                this.searchRoutes.reverse(function(a, b){
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
            startXSorted = 0
            startYSorted = 0
            destinationXSorted = 0
            destinationYSorted = 0

            if(idSorted == 0){
                this.searchRoutes.sort(function(a, b){
                    return a.id - b.id
                });
                idSorted = 1
            } else {
                this.searchRoutes.sort(function(a, b){
                    return b.id - a.id
                });
                idSorted = 0
                
            }
        },
        sortstartPointX: function () {
            nameSorted = 0
            idSorted = 0
            startYSorted = 0
            destinationXSorted = 0
            destinationYSorted = 0

            if(startXSorted == 0){
                this.searchRoutes.sort(function(a, b){
                    return a.startX -b.startX
                });
                startXSorted = 1;
            } else {
                this.searchRoutes.sort(function(a, b){
                    return b.startX - a.startX
                });
                startXSorted = 0;
            }
        },
        sortstartPointY: function () {
            nameSorted = 0
            idSorted = 0
            startXSorted = 0
            destinationXSorted = 0
            destinationYSorted = 0

            if(startYSorted == 0){
                this.searchRoutes.sort(function(a, b){
                    return a.startY -b.startY
                });
                startYSorted = 1;
            } else {
                this.searchRoutes.sort(function(a, b){
                    return b.startY - a.startY
                });
                startYSorted = 0;
            }
        },
        sortDestinationX: function () {
            nameSorted = 0
            idSorted = 0
            startXSorted = 0
            startYSorted = 0
            destinationYSorted = 0

            if(destinationXSorted == 0){
                this.searchRoutes.sort(function(a, b){
                    return a.endX - b.endX
                });
                destinationXSorted = 1;
            } else {
                this.searchRoutes.sort(function(a, b){
                    return b.endX - a.endX
                });
                destinationXSorted = 0;
            }
        },
        sortDestinationY: function () {
            nameSorted = 0
            idSorted = 0
            startXSorted = 0
            startYSorted = 0
            destinationXSorted = 0

            if(destinationYSorted == 0){
                this.searchRoutes.sort(function(a, b){
                    return a.endY - b.endY
                });
                destinationYSorted = 1;
            } else {
                this.searchRoutes.sort(function(a, b){
                    return b.endY - a.endY
                });
                destinationYSorted = 0;
            }
        },
        search: function(){
            var substringStartX = document.getElementById("searchBoxStartX").value.toString()
            var substringStartY = document.getElementById("searchBoxStartY").value.toString()
            var substringEndX = document.getElementById("searchBoxEndX").value.toString()
            var substringEndY = document.getElementById("searchBoxEndY").value.toString()

            var newRoutes = []

            for(var i = 0; i < this.routes.length; i++)
            {
                var curStartX = this.routes[i].startX.toString()
                var curStartY = this.routes[i].startY.toString()
                var curEndX = this.routes[i].endX.toString()
                var curEndY = this.routes[i].endY.toString()

                if(curStartX.includes(substringStartX) && curStartY.includes(substringStartY) && curEndX.includes(substringEndX) && curEndY.includes(substringEndY))
                {
                    newRoutes.push(this.routes[i])
                }
                
            }
            this.searchRoutes = newRoutes;
        },
        time: function(){
            var date1 = new Date(document.getElementById("date1").value.toString())
            var date2 = new Date(document.getElementById("date2").value.toString())

            var newRoutes = []

            for(var i = 0; i < this.routes.length; i++)
            {
                var curDate = this.routes[i].date

                if(curDate>=date1 && curDate<=date2){
                    newRoutes.push(this.routes[i])
                }
                
            }
            this.searchRoutes = newRoutes;
        }
    }
}