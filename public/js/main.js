var app = angular.module('monujo', ['ngRoute','ngResource']);

app.config(function($routeProvider){
    $routeProvider.when('/', {
      templateUrl: 'partials/index.html',
      controller: 'IndexController'
    });

    $routeProvider.when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'DashboardController'
    });

    $routeProvider.when('/goals', {
      templateUrl: 'partials/goals.html',
      controller: 'GoalsController'
    });

    $routeProvider.when('/payments', {
      templateUrl: 'partials/payments.html',
      controller: 'PaymentsController'
    });

    $routeProvider.when('/categories', {
      templateUrl: 'partials/categories.html',
      controller: 'CategoriesController'
    });

    $routeProvider.when('/rules', {
      templateUrl: 'partials/rules.html',
      controller: 'RulesController'
    });

    $routeProvider.when('/reports', {
      templateUrl: 'partials/reports.html',
      controller: 'ReportsController'
    });

    $routeProvider.otherwise({redirectTo: '/dashboard'});
    
});
