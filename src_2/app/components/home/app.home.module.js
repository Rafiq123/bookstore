'use strict';

import homeComponent from "./app.home.component";
import homeRoute from './app.home.route';

export default angular.module('bookstore.home',[])
.component('homeComponent',homeComponent)
.config(homeRoute)
.name;