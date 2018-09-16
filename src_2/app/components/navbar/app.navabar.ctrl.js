'use strict';

class NavBarCtrl {
    
    constructor ($scope,$state){
        this.$scope = $scope;
        this.$state = $state;
    }

    $onInit(){
        //highlight home tab
        this.currentNavItem = 'home';
    }

    goto(param){
        //$state.go('home')
        console.log(param);
        this.$state.go(param);
    }
}

NavBarCtrl.$inject = ['$scope','$state'];

export default NavBarCtrl;
