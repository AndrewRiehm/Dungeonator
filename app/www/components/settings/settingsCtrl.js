
(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('SettingsCtrl', settingsCtrlFunc);

    var $webStorage, _ionicPopup;
    var CHARACTERS_KEY = 'characters';

    function settingsCtrlFunc($scope, webStorage, $ionicPopup) {
        $webStorage = webStorage;
        _ionicPopup = $ionicPopup;
        $scope.webStorage = webStorage;
        $scope.CHARACTERS_KEY = CHARACTERS_KEY;
        $scope.characters = characters;
        $scope.settings = {
            enableFriends: true
        };
        $scope.insertTestData = insertTestData;
        $scope.flushLocalData = flushLocalData;
    }

    function insertTestData() {
        $webStorage.local.set(CHARACTERS_KEY, characters);
        _ionicPopup.alert({ title: 'Done!' });
    }

    function flushLocalData() {
        $webStorage.local.clear();
        _ionicPopup.alert({ title: 'Done!' });
    }

    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var characters = [
        {
            name: 'Billy Connoly',
            campaignName: 'Wrath of the Righteous',
            weapons: []
        },
        {
            name: 'Bilbo Baggins',
            campaignName: 'Underhill Adventures',
            weapons: [
                {
                    name: 'Sting',
                    attacks: [
                        {
                            name: 'Main',
                            toHit: 6,
                            damage: 6,
                            crit: 19,
                            critMult: 2
                        },
                        {
                            name: 'Second',
                            toHit: 1,
                            damage: 6,
                            crit: 19,
                            critMult: 2
                        }
                    ]
                }
            ]
        }
    ];


})();
