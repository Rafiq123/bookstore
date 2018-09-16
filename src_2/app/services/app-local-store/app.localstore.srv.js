'use strict';

class LocalStore{
    constructor(){

    }

    $onInit(){
        
    }

    getData(key){
        return JSON.parse(localStorage.getItem(key));
    }

    setData(key,value){
        localStorage.setItem(key,value)
    }
}

LocalStore.$inject = [];

export default LocalStore;