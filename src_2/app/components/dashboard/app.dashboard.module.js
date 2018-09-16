'use strict';

import dashboardComponent from './app.dashboard.component';
import dashboardRoute from './app.dashboard.route';

export default angular.module('bookstore.dashboard',[])
.component('dashboard',dashboardComponent)
.config(dashboardRoute)
.name;