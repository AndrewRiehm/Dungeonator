
(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('CharacterCtrl', ctrlFunc);

    function ctrlFunc($scope, NewWidget, $stateParams, Characters, $ionicPopup) {
        $scope.campaignName = $stateParams.campaignName;
        $scope.characterName = $stateParams.characterName;
        $scope.character = Characters.get($scope.characterName);

        $scope.removeWeapon = removeWeapon;

        $scope.addWeapon = addWeapon;

        $scope.showNewForm = function () {
            NewWidget.show('New Weapon', function(name) {
                var obj = {
                    name: name,
                    attacks: []
                };
                var res = $scope.addWeapon(obj);
                if (res !== null) {
                    $ionicPopup.alert({
                        title: 'Oops!',
                        template: res.message
                    });
                }
            });
        };
    }

    function removeWeapon(character, weapon) {
        var weapons = character.weapons;
        weapons.splice(weapons.indexOf(weapon), 1);
    }

    function addWeapon(character, weapon) {
        var weapons = character.weapons;
        for (var i in weapons) {
            if (weapons[i].name === weapon.name) {
                return { message: weapon.name + ' is already taken' };
            }
        }
        weapons.push(weapon);
        return null;
    }
})();
