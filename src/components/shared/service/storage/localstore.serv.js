function localStore(){
    var factory = {};
    factory.getData = function(key){
        return JSON.parse(localStorage.getItem(key));
    }

    factory.setData =function(key,value){
        localStorage.setItem(key,value)
    };
    return factory;
}
localStore.$inject = [];

module.exports = localStore;