'use strict';

class DialogCtrl {
    constructor($scope,LocalStore,$mdDialog){
        this.$scope = $scope;
        this.LocalStore = LocalStore;
        this.$mdDialog = $mdDialog;
    }

    $onInit(){
        this.book = {}
    }

    submitForm(){
        var bookData = [];
        if(this.LocalStore.getData('bookInfo')){
            bookData = this.LocalStore.getData('bookInfo');
        }
        bookData.push(this.book);
        this.LocalStore.setData('bookInfo',JSON.stringify(bookData));
        this.$mdDialog.hide(1);
    }

    closeForm(){
        this.$mdDialog.cancel();
    }
}

DialogCtrl.$inject = ['$scope','LocalStore','$mdDialog'];

export default DialogCtrl;