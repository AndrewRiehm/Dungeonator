
angular.module('starter.controllers', [])

.controller('BuffDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
