
(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('SettingsCtrl', settingsCtrlFunc);

    var $webStorage, _ionicPopup;
    var CHARACTERS_KEY = 'characters';
    var CAMPAIGNS_KEY = 'campaigns';
    var BUFFS_KEY = 'buffs';

    function settingsCtrlFunc($scope, webStorage, $ionicPopup) {
        $webStorage = webStorage;
        _ionicPopup = $ionicPopup;
        $scope.webStorage = webStorage;
        $scope.CHARACTERS_KEY = CHARACTERS_KEY;
        $scope.characters = characters;
        $scope.insertTestData = insertTestData;
        $scope.flushLocalData = flushLocalData;
    }

    function insertTestData() {
        $webStorage.local.set(CHARACTERS_KEY, characters);
        $webStorage.local.set(CAMPAIGNS_KEY, campaigns);
        $webStorage.local.set(BUFFS_KEY, buffs);
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

    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var campaigns = [
        {
            name: 'Wrath of the Righteous',
        },
        {
            name: 'Underhill Adventures',
        }
    ];

    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var buffs = [
        {
            name: 'Good Hope',
            saves: {
                fort: 2,
                refl: 2,
                will: 2
            },
            toHit: 2,
            damage: 2,
            skills: 2,
            type: 'morale'
        },
        {
            name: 'Inspire Courage',
            toHit: 3,
            damage: 3,
            type: 'competence'
        },
        {
            name: 'Haste',
            toHit: 1,
            saves: {
                refl: 2,
            },
            extraHit: true
        },
        {
            name: 'Flanking',
            toHit: 2
        }
    ];

})();
