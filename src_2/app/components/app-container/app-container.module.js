'use strict';

import angular from 'angular';
import appContainerComponent from './app-container.component';

export default angular.module('bookstore.app',[])
.component('appContainer',appContainerComponent).name;