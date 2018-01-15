(function() {
    "use strict";
    
    var module = angular.module("tsMovies");
    
    module.component("movieApp", {
        templateUrl: "/ts-movies/movie-app.component.html",
        $routeConfig: [
            { path: "/list", component:"movieList", name: "List" },
            { path: "/about", component: "about", name: "About" },
            { path: "/details/:id/...", component: "movieDetails", name:"Details"},
            { path: "/**", redirectTo: ["List", ""] }
        ]                   
    });
    
    module.component("about", {
       template: "About us ..." 
    });
     
}());