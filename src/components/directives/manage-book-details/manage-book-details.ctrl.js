
function bookDetailsCtrl($scope,localStore,$mdDialog,$mdToast){
    let vm = this; 
    vm.items = []
    vm.showDialog =function(ev){
        $mdDialog.show({
            controller: require('./dialog/dialog.ctrl'),
            template:require('./dialog/dialog.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen:true
        })
        .then(function(answer) {
            vm.status = 'You said the information was "' + answer + '".';
            vm.getBookDetails();
            $mdToast.show(
              $mdToast.simple()
                .textContent('Book details added successfully!')
                .hideDelay(3000)
            );
        }, function() {
             vm.status = 'You cancelled the dialog.';
        });
    }

    vm.getBookDetails = function(){
        if(localStore.getData('bookInfo')){
            vm.items = localStore.getData('bookInfo').reverse();
        }
        
    }

    vm.getBookDetails();
}

bookDetailsCtrl.$inject = ['$scope','localStore','$mdDialog','$mdToast'];

module.exports = bookDetailsCtrl;