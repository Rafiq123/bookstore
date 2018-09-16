'use strict';

import managebooksComponent from './app.managebooks.component';
import managebooksRoute from './app.managebooks.route';

export default angular.module('bookstore.managebooks',[])
.component('manageBooks',managebooksComponent)
.config(managebooksRoute)
.name;