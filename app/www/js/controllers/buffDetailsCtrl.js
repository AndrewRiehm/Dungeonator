
(function() {
    'use strict';

    angular
        .module('starter.controllers', [])
        .controller('BuffDetailCtrl', buffDetailCtrlFunc);

    function buffDetailCtrlFunc($scope, $stateParams, Chats) {
      $scope.chat = Chats.get($stateParams.chatId);
    }

})();
