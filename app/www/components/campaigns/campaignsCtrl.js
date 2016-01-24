

(function() {
    'use strict';

    angular
        .module('starter.controllers')
        .controller('CampaignsCtrl', campaignsCtrlFunc);

    function campaignsCtrlFunc($scope, Campaigns, $ionicPopup) {
        $scope.campaigns = Campaigns.all();
        $scope.remove = function(campaign) {
            Campaigns.remove(campaign);
        };

        // $scope.showNewForm = showNewForm.bind(null, $scope, $ionicPopup, Campaigns);
    }

    function showNewForm($scope, $ionicPopup, Campaigns) {
        $ionicPopup.prompt(
        {
            title: 'New Campaign',
            inputType: 'text',
            inputPlaceholder: 'Campaign Name'
        })
        .then(function(res) {
            if (res !== undefined) {
                addNewCampaign(Campaigns, res, $ionicPopup);
            }
        });
    }

    function addNewCampaign(Campaigns, campaignName, $ionicPopup) {

        var obj = {
            name: campaignName
        };

        Campaigns.add(obj, function(err) {
            if (err) {
                $ionicPopup.alert({
                    title: 'Oops!',
                    template: '"' + campaignName + '" is already taken!',
                });
            }
        });
    }

})();
