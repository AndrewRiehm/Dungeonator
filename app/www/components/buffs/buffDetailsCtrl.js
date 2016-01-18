
(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('BuffDetailCtrl', buffDetailCtrlFunc);

    function buffDetailCtrlFunc($scope, $stateParams, Buffs) {
      $scope.buff = Buffs.get($stateParams.buffName);
    }

})();
