﻿angular.module("libraryApp").config(
    ["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "app/Home.html"
            })

            .when("/addBook", {
                templateUrl: "app/Book/addBook.html",
                controller: "bookController"
            })

            .when("/modifyBook", {
                templateUrl: "app/Book/modifyBook.html",
                controller: "bookController"
            })

            .when("/deleteBook", {
                templateUrl: "app/Book/deleteBook.html",
                controller: "bookController"
            })

            .otherwise({
                redirectTo: "/home"
            });
    }]);