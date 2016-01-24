
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
            get: characterGet
        };
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
            campaignName: 'Wrath of the Righteous'
        },
        {
            name: 'Bilbo Baggins',
            campaignName: 'Underhill Adventures'
        }
    ];

})();
