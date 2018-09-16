'use strict';

import localstoreService from './app.localstore.srv';

export default angular.module('bookstore.localstore.service',[])
.service('LocalStore',localstoreService).name;