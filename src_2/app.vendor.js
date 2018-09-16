'use strict';

import angular from 'angular';
import angularMaterial from 'angular-material';
import angularUIRouter from 'angular-ui-router';
import angularMaterialDataTable from 'angular-material-data-table';
import translator from 'angular-translate';
import translateLoaderPartial from 'angular-translate-loader-partial';
//console.log(translator);

export default angular.module('bookstore.vendor',[
    angularMaterial,
    angularUIRouter,
    angularMaterialDataTable,
    translator,
    translateLoaderPartial
]).name;
