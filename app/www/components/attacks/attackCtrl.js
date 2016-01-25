
(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('AttackCtrl', ctrlFunc);

    function ctrlFunc($scope,$stateParams, Characters, $ionicPopup) {
        $scope.characterName = $stateParams.characterName;
        $scope.character = Characters.get($scope.characterName);
        $scope.weaponName = $stateParams.weaponName;
        $scope.weapon = Characters.getWeapon($scope.character, $scope.weaponName);
        $scope.attackName = $stateParams.attackName;
        $scope.attack = getAttack($scope.weapon, $scope.attackName);
        if ($scope.weapon === null) {
            var msg = 'ERROR: could not get weapon with name "' + $scope.weaponName + '"';
            console.error(msg);
            throw(msg);
        }
        if ($scope.attack === null) {
            var msg = 'ERROR: could not get attack with name "' + $scope.attackName + '"';
            console.error(msg);
            throw(msg);
        }
    }

    function getAttack(weapon, attackName) {
        for (var i in weapon.attacks) {
            if (weapon.attacks[i].name === attackName) {
                return weapon.attacks[i];
            }
        }
        return null;
    }
})();
