
(function () {
    'use strict';

    describe('BuffsService', function () {

        var buffService;
        beforeEach(function() {
            module('starter.services');
            inject(
                function (Buffs) {
                    buffService = Buffs;
                }
            );
        });

        it('should exist', function () {
            expect(buffService).not.toBeNull();
            expect(buffService).toBeDefined();
        });

        it('should have an "all" method', function() {
            expect(angular.isFunction(buffService.all)).toBe(true);
        });

        it('should have a "remove" method', function() {
            expect(angular.isFunction(buffService.remove)).toBe(true);
        });

        it('should have a "get" method', function() {
            expect(angular.isFunction(buffService.get)).toBe(true);
        });
    });
})();
