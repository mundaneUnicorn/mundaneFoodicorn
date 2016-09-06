var app = angular.module('foodfood', ['ui.router', 'ngSanitize']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/main');

  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: './views/main.html',
    controller: 'inputsController'
  })
  .state('main.map', {
    url: '/map',
    views: {
      'restaurantList': {
        templateUrl: './views/places.html',
        controller: function($scope, RestaurantAndRoute) {
          // restaurants from the server
          $scope.restaurants = RestaurantAndRoute.getRestaurants();
        }
      },
      'map': {
        templateUrl: './views/map.html',
        controller: function($scope, RestaurantAndRoute) {
          var map;
          function initMap(coord) { // creates a map
            map = new google.maps.Map(document.getElementById('map'), {
              center: coord,
              zoom: 14
            })
          }

          /*
          coord should depend on user start & end inputs
          temporarily choose HR coordinates for map initialization
          ...remove later
          */
          var coord = new google.maps.LatLng(37.8, -122.4);

          // initialize the map to map.html
          initMap(coord);
          console.log('map initiated');
        }
      }
    }
  })
}])
