'use strict';

angular.module('pspApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('psp2', {
        url: '/psp2',
        template: '<psp2></psp2>'
      });
  });
