'use strict';

import angular from 'angular';
import appContainerComponent from './app-container/app-container.module';
import headerComponent from './header/app.header.module';
import dashboardComponent from './dashboard/app.dashboard.module'; 
import navbarComponent from './navbar/app.navbar.module';
import homeComponent from './home/app.home.module';
import aboutComponent from './about/app.about.module';
import manageBooks from './manage-books/app.managebooks.module';

export default angular.module('bookstore.component',[
    appContainerComponent,
    headerComponent,
    dashboardComponent,
    navbarComponent,
    homeComponent,
    aboutComponent,
    manageBooks
]).name;