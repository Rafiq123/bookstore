'use strict';

import aboutComponent from "./app.about.component";
import aboutRoute from './app.about.route';

export default angular.module('bookstore.about',[])
.component('aboutComponent',aboutComponent)
.config(aboutRoute)
.name;