
(function() {
    'use strict';

    angular
        .module('starter.controllers', [])
        .controller('AccountCtrl', accountCtrlFunc);

    function accountCtrlFunc($scope) {
        $scope.settings = {
            enableFriends: true
        };
    }

})();
