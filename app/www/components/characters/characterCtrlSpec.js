
(function () {
    'use strict';

    describe('CharacterCtrl', function () {
        beforeEach(module('starter.services'));
        beforeEach(module('starter.controllers'));

        var controller, scope;
        var testWeapon = { name: 'test', attacks: [] };
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('CharacterCtrl', {
                $scope: scope,
                $stateParams: {
                    campaignName: 'Underhill Adventures',
                    characterName: 'Bilbo Baggins'
                },
            });
        }));

        it('should exist', function () {
            expect(controller).not.toBeNull();
            expect(controller).toBeDefined();
        });

        it('should have a character', function() {
            expect(scope.character).not.toBeNull();
            expect(scope.character).toBeDefined();
        });

        it('should have a list of weapons', function() {
            expect(scope.character.weapons).not.toBeNull();
            expect(scope.character.weapons).toBeDefined();
        });

        it('should have an addWeapon function', function() {
            expect(scope.addWeapon).not.toBeNull();
            expect(scope.addWeapon).toBeDefined();
            expect(typeof scope.addWeapon).toBe('function');
        });

        it('should have a removeWeapon function', function() {
            expect(scope.removeWeapon).not.toBeNull();
            expect(scope.removeWeapon).toBeDefined();
            expect(typeof scope.removeWeapon).toBe('function');
        });

        it('should be able to add a weapon', function() {
            var res = scope.addWeapon(scope.character, testWeapon);
            expect(res).toBeNull();
        });

        it('should not let you add a duplicate weapon', function() {
            var res = scope.addWeapon(scope.character, testWeapon);
            expect(res).not.toBeNull();
            expect(res.message).toBe('test is already taken');
        });

        it('should be able to remove a weapon', function() {
            var len = scope.character.weapons.length;
            scope.removeWeapon(scope.character, testWeapon);
            var newLen = scope.character.weapons.length;
            expect(newLen).toBe(len - 1);
        });

    });

})();
