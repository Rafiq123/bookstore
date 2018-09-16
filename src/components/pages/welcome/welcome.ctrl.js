'use strict';

function WelcomeController($scope){
    $scope.message = "Hello its working";
}

WelcomeController.$inject = ['$scope'];

module.exports = WelcomeController;