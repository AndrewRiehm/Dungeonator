
(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('SettingsCtrl', settingsCtrlFunc);

    function settingsCtrlFunc($scope) {
        $scope.settings = {
            enableFriends: true
        };
    }

})();
