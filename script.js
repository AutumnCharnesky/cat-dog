(function() {
var app=angular.module("catDog", ["ngRoute"])

app.controller("animalController", function($scope) {
});

  app.config(function($routeProvider) {
    $routeProvider.when("/cat", {
      templateUrl: "cat.html"
    })
    .when("/dog", {
      templateUrl: "dog.html"
    })
    .when("/walrus", {
      templateUrl: "walrus.html"
    })
    .when("/ferret", {
      templateUrl: "ferret.html"
    })
    .otherwise( {
      tempolate:"Please choose one of the above options."
    })
  })


})();
