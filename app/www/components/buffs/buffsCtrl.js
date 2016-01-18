
(function() {
    'use strict';

    angular
        .module('starter.controllers', ['ionic'])
        .controller('BuffsCtrl', buffsCtrlFunc);

    function buffsCtrlFunc($scope, Buffs, $ionicPopup) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

        $scope.buffs = Buffs.all();
        $scope.remove = function(buff) {
            Buffs.remove(buff);
        };

        $scope.showNewBuffForm = showNewBuffForm.bind(this, $scope, $ionicPopup, Buffs);
    }

    function showNewBuffForm($scope, $ionicPopup, Buffs) {
        $ionicPopup.prompt(
        {
            title: 'New Buff',
            template: 'Enter the Buff Name: ',
            inputType: 'text',
            inputPlaceholder: 'Buff Name'
        })
        .then(function(res) {
            if (res !== undefined) {
                addNewBuff(Buffs, res);
            }
        });
    }

    function addNewBuff(Buffs, buffName) {
        var obj = {
            name: buffName,
            attack: 0,
            damage: 0,
            extraHit: false
        };
        Buffs.add(obj);
    }
})();
