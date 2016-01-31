
(function() {
    'use strict';

    var _clipboardData;
    describe('SettingsCtrl', function() {
        beforeEach(module('starter.services'));
        beforeEach(
            module('starter.controllers',
                function($provide) {
                    var clipboardMock = {
                        copyText: function(text) { _clipboardData = text; }
                    };
                    $provide.value('clipboard', clipboardMock);
                }
            )
        );

        var controller, scope;
        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller('SettingsCtrl', {
                $scope: scope
            });
        }));

        it('should exist', function () {
            expect(controller).toBeDefined();
        });

        it('should have a method for inserting test data', function() {
            expect(scope.insertTestData).toBeDefined();
            expect(typeof scope.insertTestData).toBe('function');
        });

        it('should have a method for flushing local data', function() {
            expect(scope.flushLocalData).toBeDefined();
            expect(scope.flushLocalData).not.toBeNull();
        });

        it('should have a scope reference to webStorage', function() {
            expect(scope.webStorage).toBeDefined();
            expect(scope.webStorage).not.toBeNull();
        });

        it('should have a characters key', function() {
            expect(scope.CHARACTERS_KEY).toBeDefined();
            expect(scope.CHARACTERS_KEY).not.toBeNull();
        });

        it('should be able to add test data', function() {
            scope.insertTestData();
            var characters = scope.webStorage.local.get(scope.CHARACTERS_KEY);
            expect(characters.length).toBe(scope.characters.length);
        });

        it('should be able to flush local data', function() {
            scope.webStorage.local.set('foo', 'bar');
            scope.flushLocalData();
            var foo = scope.webStorage.local.get('foo');
            expect(foo).toBeNull();
        });

        it('should have an exportToClipboard method', function() {
            expect(scope.exportToClipboard).not.toBeNull();
            expect(scope.exportToClipboard).toBeDefined();
        });

        it('should be able to export saved data to clipboard', function() {
            scope.exportToClipboard();
            expect(_clipboardData).not.toBeNull();
            expect(_clipboardData).toBeDefined();
        });
    });
})();
