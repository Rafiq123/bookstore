module.exports = function(){
    return{
        restrict : 'E',
        template:require('./manage-book-details.html'),
        controller:require('./manage-book-details.ctrl'),
        controllerAs:'bookDetailsCtrl'
    }
}