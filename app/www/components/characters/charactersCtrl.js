

(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('CharactersCtrl', charactersCtrlFunc);

    function charactersCtrlFunc($scope, $stateParams, Characters, $ionicPopup) {
        $scope.campaignName = $stateParams.campaignName;
        $scope.characters = Characters.all($scope.campaignName);
        $scope.remove = function(character) {
            Characters.remove(character);
            $scope.characters = Characters.all($scope.campaignName);
        };

        // $scope.showNewForm = showNewForm.bind(null, $scope, $ionicPopup, Characters);
    }

    function showNewForm($scope, $ionicPopup, Characters) {
        $ionicPopup.prompt(
        {
            title: 'New Character',
            inputType: 'text',
            inputPlaceholder: 'Character Name'
        })
        .then(function(res) {
            if (res !== undefined) {
                var obj = {
                    name: res,
                    campaignName: $scope.campaignName
                };

                Characters.add(obj, function(err) {
                    if (err) {
                        $ionicPopup.alert({
                            title: 'Oops!',
                            template: '"' + res + '" is already taken!',
                        });
                    }
                    else {
                        $scope.characters = Characters.all($scope.campaignName);
                    }
                });
            }
        });
    }

})();
