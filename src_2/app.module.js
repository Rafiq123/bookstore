'use strict';

import angular from 'angular';
import vendorModule from './app.vendor';
import routesModule from './app.route';
import componentsModule from './app/components/app.component.module';
import config from './app.config';
import serviceModule from './app/services/app.service.module';


import './style.scss';
require('./app.resource');

export default angular.module('bookstore',[
    vendorModule,
    componentsModule,
    serviceModule
])
.config(routesModule)
.config(config);

