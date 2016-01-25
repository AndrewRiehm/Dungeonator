
(function () {
    'use strict';

    describe('AttackCtrl', function () {
        beforeEach(module('starter.services'));
        beforeEach(module('starter.controllers'));

        var controller, scope;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('AttackCtrl', {
                $scope: scope,
                $stateParams: {
                    characterName: 'Bilbo Baggins',
                    weaponName: 'Sting',
                    attackName: 'Main'
                },
            });
        }));

        it('should exist', function () {
            expect(controller).not.toBeNull();
            expect(controller).toBeDefined();
        });

        it('should have a weapon', function() {
            expect(scope.weapon).not.toBeNull();
            expect(scope.weapon).toBeDefined();
        });

        it('should have an attack', function() {
            expect(scope.attack).not.toBeNull();
            expect(scope.attack).toBeDefined();
        });
    });
})();
