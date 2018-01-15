(function () {
    /******* Get movies using a service ******/
    function MovieService($http, $q) {

        var moviesPromise = $q.resolve(
            $http.get("/movies.json")
                .then(function(response) {
                    return response.data;
                })
        );

        this.getMovies = function() {
            return moviesPromise;
        };

        this.getMovie = function(id) {
            return moviesPromise.then(function(movies) {
                for (var i = 0; i < movies.length; i++) {
                    if (movies[i].id === id) return movies[i];
                }
            });
        };
    }

    var module = angular.module("tsMovies")

    module.service('movieService', MovieService)

    var controllerDetail = function(movieService) {
        var model = this;

        model.$routerOnActivate = function(next, previous) {
            model.id = next.params.id;
            movieService.getMovie(model.id).then(function(movie) {

                model.movie = movie;
            });
        };
    };

    module.component("movieDetails", {
        templateUrl: "/ts-movies/movie-details.component.html",
        controllerAs: "model",
        controller: controllerDetail,
        bindings: {
            $router : "<"
        },
        $routeConfig: [
            { path: "/overview", component:"movieOverview", name:"Overview"},
            { path: "/cast", component:"movieCast", name:"Cast"},
            { path: "/director", component:"movieDirector", name:"Director"}
        ]
    });

    /**** More links   ****/
    module.component("movieOverview", {
        template: "Overview"
    });

    module.component("movieCast", {
        template: "The cast ..."
    });

    module.component("movieDirector", {
        template: "The director is ..."
    });

} ());