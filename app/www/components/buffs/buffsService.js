
(function() {
    'use strict';

    angular
        .module('starter.services')
        .factory('Buffs', buffsServiceFunc);

    function buffsServiceFunc() {
        return {
            all: buffAll,
            add: buffAdd,
            remove: buffRemove,
            get: buffGet
        };
    }

    function buffGet(buffId) {
        for (var i = 0; i < buffs.length; i++) {
            if (buffs[i].id === parseInt(buffId)) {
                return buffs[i];
            }
        }
        return null;
    }

    function buffRemove(buff) {
        buffs.splice(buffs.indexOf(buff), 1);
    }

    function buffAdd(buff) {
        return buffs.push(buff);
    }

    function buffAll() {
        return buffs;
    }

    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var buffs = [
        {
            id: 0,
            name: 'Good Hope',
            saves: {
                fort: 2,
                refl: 2,
                will: 2
            },
            attack: 2,
            damage: 2,
            skills: 2,
            type: 'morale'
        },
        {
            id: 1,
            name: 'Inspire Courage',
            attack: 3,
            damage: 3,
            type: 'competence'
        },
        {
            id: 2,
            name: 'Haste',
            attack: 1,
            saves: {
                refl: 2,
            },
            extraHit: true
        },
        {
            id: 3,
            name: 'Flanking',
            attack: 2
        }
    ];

})();
