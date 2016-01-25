
(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('WeaponCtrl', ctrlFunc);

    function ctrlFunc($scope,$stateParams, NewWidget, Characters, Roller, Buffs, $ionicPopup) {
        $scope.Roller = Roller;
        $scope.characterName = $stateParams.characterName;
        $scope.character = Characters.get($scope.characterName);
        $scope.weaponName = $stateParams.weaponName;
        $scope.weapon = Characters.getWeapon($scope.character, $scope.weaponName);
        if ($scope.weapon === null) {
            var msg = 'ERROR: could not get weapon with name "' + $scope.weaponName + '"';
            console.error(msg);
            throw(msg);
        }
        if (!$scope.weapon.attacks) {
            $scope.weapon.attacks = [];
        }

        $scope.activeBuffs = Characters.compileActiveBuffs($scope.character, Buffs.all());
        $scope.remove = remove;
        $scope.add = add;

        $scope.rollOne = rollOne;
        $scope.rollAll = rollAll;

        $scope.showNewForm = function () {
            NewWidget.show('New Attack', function(name) {
                var obj = {
                    name: name,
                    toHit: 0,
                    damage: 0,
                    crit: 20,
                    critMult: 2
                };
                var res = $scope.add($scope.weapon, obj);
                if (res !== null) {
                    $ionicPopup.alert({
                        title: 'Oops!',
                        template: res.message
                    });
                }
            });
        };
    }

    function rollOne(Roller, attack, buffs) {
        console.info('rolling one: ', JSON.stringify(attack));
        var roll = Roller.rollSingleAttack(attack, buffs);
        console.info('roll!: ', JSON.stringify(roll));
    }

    function rollAll(Roller, attacks, buffs) {
        console.info('rolling all: ', JSON.stringify(attacks));
        var rolls = Roller.rollAttacks(attacks, buffs);
        console.info('rolls: ', JSON.stringify(rolls));
    }

    function remove(weapon, attack) {
        var attacks = weapon.attacks;
        var indx = attacks.indexOf(attack);
        if (indx < 0) {
            var msg = 'ERROR: cannot remove, attack not found';
            console.error(msg);
            throw msg;
        }
        attacks.splice(indx, 1);
    }

    function add(weapon, attack) {
        var attacks = weapon.attacks;
        for (var i in attacks) {
            if (attacks[i].name === attack.name) {
                return { message: attack.name + ' is already taken' };
            }
        }
        weapon.attacks.push(attack);
        return null;
    }
})();
