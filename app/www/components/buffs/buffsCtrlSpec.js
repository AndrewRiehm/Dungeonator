
(function() {
    'use strict';

    describe('BuffsCtrl', function() {
        beforeEach(module('starter.services'));
        beforeEach(module('starter.controllers'));

        var controller, scope;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('BuffsCtrl', {
                $scope: scope
            });
        }));

        it('should exist', function () {
            expect(controller).toBeDefined();
        });

        it('should have buffs', function() {
            expect(scope.buffs).toBeDefined();
        });

        it('should have a remove method', function() {
            expect(scope.remove).toBeDefined();
        });

        it('should be able to remove a buff', function() {
            var buff = scope.buffs[0];
            var len = scope.buffs.length;
            expect(buff).toBeDefined();
            scope.remove(buff);
            expect(scope.buffs.length).toBeLessThan(len);
        });
    });

})();
