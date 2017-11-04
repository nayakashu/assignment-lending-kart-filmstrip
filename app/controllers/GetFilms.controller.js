angular.module('FilmStripModule').controller('GetFilmsController', 
    function($scope, $http) {
        $scope.init = function() {
            $scope.responseFromServer = null;
            $scope.GetFilms();
        };

        $scope.GetFilms = function() {
            $http.get("https://ghibliapi.herokuapp.com/films/")
            .then(function(response) {
                $scope.data = response;
                console.log(JSON.stringify(data));
            });
        };
});