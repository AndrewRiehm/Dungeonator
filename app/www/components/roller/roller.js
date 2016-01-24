
(function() {
    'use strict';

    angular
        .module('starter.services')
        .factory('Roller', rollerServiceFunc);

    function rollerServiceFunc() {
        return {
            compileBuffs: compileBuffs,
            rollAttacks: rollAttacks,
            rollSingleAttack: rollSingleAttack,
            roll: roll
        };
    }

    function rollSingleAttack(attack, buffs) {
        var toHit, dmg, critConf, critDmg;

        // compile buffs
        var totalBuff = compileBuffs(buffs);

        // Roll to-hit
        toHit = roll(1, 20, attack.toHit);

        // TODO: roll for damage?
        dmg = attack.damage + totalBuff.damage;

        // Check for crit threat
        if (toHit - attack.toHit >= attack.crit) {
            // Need another toHit roll
            critConf = roll(1, 20, attack.toHit);
            critDmg = (attack.damage + totalBuff.damage) * attack.mult;
        }

        // TODO: buffs!
        return {
            toHit: toHit + totalBuff.toHit,
            damage: dmg,
            crit: critConf !== undefined,
            critConf: critConf + totalBuff.toHit,
            critDmg: critDmg
        };
    }

    function rollAttacks(attacks, buffs) {
        var rolls = [];
        for (var i in attacks) {
            rolls.push(rollSingleAttack(attacks[i], buffs));
        }

        // Buffs might add an extra attack
        // ... but extra attacks don't stack, so bail after the first one
        var buff;
        for (var i in buffs) {
            buff = buffs[i];
            if (buff.extraHit) {
                rolls.push(rollSingleAttack(attacks[0], buffs));
                break;
            }
        }
        return rolls;
    }

    // Rolls XdY + Z
    function roll(x, y, z) {
        var val = 0;
        for (var i = 0; i < x; ++i) {
            val += getRandomInt(1, y);
        }
        val += z;
        return val;
    }

    // Returns a random integer between min (included) and max (excluded)
    // Using Math.round() will give you a non-uniform distribution!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // Compiles all buffs into a single buff structure
    // TODO: Take into account buff types (morale, competence, etc)
    function compileBuffs(buffs) {
        var totalBuff = {
            toHit: 0,
            damage: 0,
            extraHit: false
        };
        var buff;
        for (var i in buffs) {
            buff = buffs[i];
            totalBuff.toHit += buff.toHit;
            totalBuff.damage += buff.damage;
            if (buff.extraHit) {
                totalBuff.extraHit = true;
            }
        }
        return totalBuff;
    }
})();
