
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

        it('should be able to get a weapon by name', function() {
            var bilbo = charactersService.get('Bilbo Baggins');
            var weapon = charactersService.getWeapon(bilbo, 'Sting');
            expect(weapon).not.toBeNull();
            expect(weapon).toBeDefined();
        });

        it('should have a save method', function() {
            expect(charactersService.save).toBeDefined();
            expect(charactersService.save).not.toBeNull();
        });

        it('should have a load method', function() {
            expect(charactersService.load).toBeDefined();
            expect(charactersService.load).not.toBeNull();
        });

        it('should be able to save to persistent storage', function(done) {
            charactersService.save(testCharacter, function(res, err) {
                expect(err).toBeNull();
                expect(res).toBe(testCharacter);
                done();
            });
        });

        it('should be able to load a character from persistent storage', function(done) {
            charactersService.load(testCharacter.name, function(res, err) {
                expect(res).toBeDefined();
                expect(res.name).toBe(testCharacter.name);
                expect(res.activeBuffs.length).toBe(testCharacter.activeBuffs.length);
                expect(res.campaignName).toBe(testCharacter.campaignName);
                expect(err).toBeNull();
                done();
            });
        });

        it('should have a destroy (from storage) method', function() {
            expect(charactersService.destroy).toBeDefined();
            expect(charactersService.destroy).not.toBeNull();
        });

        it('should be able to destroy a char from storage', function(done) {
            charactersService.destroy(testCharacter.name, function(res, err) {

                // Shouldn't be any problems, because we should have deleted it
                expect(err).toBeNull();

                charactersService.load(testCharacter.name, function(res, err) {
                    // But now we *expect* problems, because we tried to load
                    // something that shouldn't exist
                    expect(err).toBeDefined();
                    expect(res).toBeNull();
                    done();
                });
            });
        });
    });
})();
