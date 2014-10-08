"use strict";var myApp=angular.module("jeehyunWebApp",["ngRoute","ngAnimate","snap","sticky"]);myApp.config(["$routeProvider","$locationProvider",function(a,b){a.when("/",{templateUrl:"views/main.html",controller:"mainController"}).when("/about",{templateUrl:"views/about.html",controller:"aboutController"}).when("/project",{templateUrl:"views/project.html",controller:"projectController"}).when("/contact",{templateUrl:"views/contact.html",controller:"contactController"}).otherwise({redirectTo:"/"}),window.history&&window.history.pushState&&b.html5Mode(!1)}]),myApp.controller("mainController",["$scope",function(a){a.pageClass="page-home"}]),myApp.controller("aboutController",["$scope",function(a){a.pageClass="page-about",a.profile=[{title:"Fashion Designer Jeehyun Lee",image:"images/profile.jpg",alt:"Jeehyun Lee Profile Picture"}]}]),myApp.controller("projectController",["$scope",function(a){a.pageClass="page-project",a.collections=[{shot:"project-1",count:1},{shot:"project-2",count:2},{shot:"project-3",count:3},{shot:"project-4",count:4},{shot:"project-5",count:5},{shot:"project-6",count:6},{shot:"project-7",count:7},{shot:"project-8",count:8},{shot:"project-9",count:9},{shot:"project-10",count:10},{shot:"project-11",count:11},{shot:"project-12",count:12},{shot:"project-13",count:13},{shot:"project-14",count:14},{shot:"project-15",count:15},{shot:"project-16",count:16}]}]),myApp.controller("contactController",["$scope",function(a){a.pageClass="page-contact"}]);