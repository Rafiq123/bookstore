function dialogCtrl($scope,localStore,$mdDialog){
    $scope.book = {};
    var bookData = [];
    $scope.submitForm = function(){
        if(localStore.getData('bookInfo')){
            bookData = localStore.getData('bookInfo');
        }
        bookData.push($scope.book);
        localStore.setData('bookInfo',JSON.stringify(bookData));
        $mdDialog.hide(1);
    }
    $scope.closeForm = function(){
        $mdDialog.cancel();
    }
}

dialogCtrl.$inject = ['$scope','localStore','$mdDialog'];

module.exports = dialogCtrl;