module.exports = function(){
    return {
        restrict:"E",
        template : require("./navbar.html"),
        controller:require('./navbar.ctrl'),
        controllerAs:'navBarCtrl'
    }
}
