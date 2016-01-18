

(function() {
    'use strict';

    angular
        .module('starter.controllers', [])
        .controller('CampaignsCtrl', campaignsCtrlFunc);

    function campaignsCtrlFunc($scope) {
        $scope.foo = 'bar';
    }

})();
