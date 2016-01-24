
(function() {
    'use strict';

    describe('BuffDetailCtrl', function() {
        beforeEach(module('starter.services'));
        beforeEach(module('starter.controllers'));

        var controller, scope;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('BuffDetailCtrl', {
                $scope: scope
            });
        }));

        it('should exist', function () {
            expect(controller).toBeDefined();
        });

        it('should have a buff', function() {
            expect(scope.buff).toBeDefined();
        });
    });

})();
