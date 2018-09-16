'use strict';

import angular from 'angular';
import headerComponent from './app.header.component';

export default angular.module('bookstore.header',[])
.component('bookStoreHeader',headerComponent).name;