'use strict';

import localStoreservice from './app-local-store/app.localstore.module';

export default angular.module('bookstore.service',[
    localStoreservice
]).name;
