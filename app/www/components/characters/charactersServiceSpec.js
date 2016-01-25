
(function () {
    'use strict';

    describe('CharactersService', function () {

        var charactersService;

        var testBuffs = [
            {
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
                name: 'Inspire Courage',
                attack: 3,
                damage: 3,
                type: 'competence'
            },
            {
                name: 'Haste',
                attack: 1,
                saves: {
                    refl: 2,
                },
                extraHit: true
            },
            {
                name: 'Flanking',
                attack: 2
            }
        ];

        var testCharacter = {
            name: 'Test Character',
            campaignName: 'Underhill Adventures',
            activeBuffs: [ true, true, false, false]
        };

        var otherTestCharacter = {
            name: 'Ron Weasley',
            campaignName: 'The Catacombs of Daigonelley'
        };

        beforeEach(function() {
            module('starter.services');
            inject(
                function (Characters) {
                    charactersService = Characters;
                }
            );
        });

        it('should exist', function () {
            expect(charactersService).not.toBeNull();
            expect(charactersService).toBeDefined();
        });

        it('should have an "all" method', function() {
            expect(angular.isFunction(charactersService.all)).toBe(true);
        });

        it('should be able to get just the characters for a campaign', function() {
            charactersService.add(otherTestCharacter);
            var smallerList = charactersService.all(otherTestCharacter.campaignName);
            var all = charactersService.all();
            expect(all.length).toBeGreaterThan(smallerList.length);
            expect(smallerList[0]).toBeDefined();
            expect(smallerList[0].name).toBe(otherTestCharacter.name);
        });

        it('should have a "remove" method', function() {
            expect(angular.isFunction(charactersService.remove)).toBe(true);
        });

        it('should have a "get" method', function() {
            expect(angular.isFunction(charactersService.get)).toBe(true);
        });

        it('should have an "add" method', function() {
            expect(angular.isFunction(charactersService.add)).toBe(true);
        });

        it('should be able to add a character', function() {
            var howMany = charactersService.all().length;
            charactersService.add(testCharacter);
            expect(charactersService.all().length).toBe(howMany + 1);
        });

        it('should be able to get a character', function() {
            var test = charactersService.get(testCharacter.name);
            expect(test).toBe(testCharacter);
        });

        it('should not let you add a duplicate', function(done) {
            charactersService.add(testCharacter, function(err) {
                expect(err).toBeDefined();
                expect(err).not.toBeNull();
                done();
            });
        });

        it('should be able to remove a character', function() {
            var howMany = charactersService.all().length;
            charactersService.remove(testCharacter);
            expect(charactersService.all().length).toBe(howMany - 1);
        });

        it('should be able to compile active buffs', function() {
            expect(charactersService.compileActiveBuffs).toBeDefined();
            expect(typeof charactersService.compileActiveBuffs).toBe('function');

            var active = charactersService.compileActiveBuffs(testCharacter, testBuffs);
            expect(active).toBeDefined();
            expect(Array.isArray(active)).toBeTruthy();
            expect(active.length).toBe(2);
        });


    });
})();
