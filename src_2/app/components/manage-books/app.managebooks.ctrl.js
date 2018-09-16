'use strict';

import dialogCtrl from './dialog/app.dailog.ctrl';
import template from './dialog/app.dialog.html';

class ManageBooksCtrl {
    constructor(LocalStore,$mdDialog,$mdToast){
        //console.log(LocalStore);
        this.LocalStore = LocalStore;
        this.$mdDialog = $mdDialog;
        this.$mdToast = $mdToast;
        this.msg = "Hello";
        this.msg2="Welcome";
    }

    $onInit(){
        this.items = [];
        this.status = '';
        this.getBookDetails();
    }
    
    getBookDetails(){
        if(this.LocalStore.getData('bookInfo')){
            this.items = this.LocalStore.getData('bookInfo').reverse();
        }        
    }

    showDialog(ev){
        let self = this;
        this.$mdDialog.show({
            controller: dialogCtrl,
            template : template,
            controllerAs:'dialogCtrl',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen:true
        })
        .then(function(answer) {
           // this.status = 'You said the information was "' + answer + '".';
            self.getBookDetails();
            self.$mdToast.show(
              self.$mdToast.simple()
                .textContent('Book details added successfully!')
                .hideDelay(3000)
            );
        }, function() {
           //  self.status = 'You cancelled the dialog.';
        });
    }

   
}

ManageBooksCtrl.$inject = ['LocalStore','$mdDialog','$mdToast'];

export default ManageBooksCtrl;