
(function() {
    'use strict';

    angular
        .module('starter.services')
        .factory('Characters', charactersServiceFunc);

    function charactersServiceFunc() {
        return {
            all: characterAll,
            add: characterAdd,
            remove: characterRemove,
            get: characterGet,
            compileActiveBuffs: compileActiveBuffs,
            getWeapon: getWeapon
        };
    }

    function getWeapon(character, weaponName) {
        for(var i in character.weapons) {
            if (character.weapons[i].name === weaponName) {
                return character.weapons[i];
            }
        }
        return null;
    }


    function compileActiveBuffs(character, buffs) {
        var activeBuffs = [], msg;

        // If the size of list of active != size of list of buffs, THAT's
        // a problem.  They have to match for this to work.
        if (character.activeBuffs.length !== buffs.length) {
            msg = 'ERROR: active buffs length does not match length of buffs array!';
            console.error(msg);
            throw msg;
        }

        // Compile the list of active buffs
        for(var i in character.activeBuffs) {
            if (character.activeBuffs[i]) {
                activeBuffs.push(buffs[i]);
            }
        }
        return activeBuffs;
    }

    function characterGet(characterName) {
        for (var i = 0; i < characters.length; i++) {
            if (characters[i].name === characterName) {
                return characters[i];
            }
        }
        return null;
    }

    function characterRemove(character) {
        characters.splice(characters.indexOf(character), 1);
    }

    function characterAdd(character, cb) {
        for(var index in characters) {
            var b = characters[index];
            if (b.name === character.name) {
                if (cb) {
                    cb({ message: 'Error: ' + character.name + ' already exists!' }, null);
                }
                return;
            }
        }
        characters.push(character);

        if (cb) {
            cb(null, character);
        }
    }

    function characterAll(campaignName) {
        if (campaignName) {
            var filterFunc = function(arg) {
                return (arg.campaignName === campaignName);
            };
            return characters.filter(filterFunc);
        }
        return characters;
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
