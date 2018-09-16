function navBarCtrl($scope,localStore){
    $scope.updateActiveIndex = function(index){
        localStore.setData('tabId',index);
        $scope.init();
    }

    //get current index
    $scope.init = function(){
        if(localStore.getData('tabId')){
            $scope.activeIdex = localStore.getData('tabId');
        }
        else{
            $scope.activeIdex = 0;
            localStore.setData('tabId',0);
        }
    }
    
    $scope.init();
    console.log($scope.activeIdex)
}

navBarCtrl.$inject = ['$scope','localStore'];
module.exports = navBarCtrl;