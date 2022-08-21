const app = angular.module('myApp', []);
app.controller('AppController', function ($scope) {
    $scope.username = '';
    $scope.users = [];
    $scope.submit = function () {
        if ($scope.username)
            $scope.users.push({
                username: $scope.username,
                url: '//twitter.com/' + $scope.username
            });
        $scope.username = '';
    };
})