
(function() {
    'use strict';

    angular
        .module('starter.services')
        .factory('Campaigns', campaignsServiceFunc);

    function campaignsServiceFunc() {
        return {
            all: campaignAll,
            add: campaignAdd,
            remove: campaignRemove,
            get: campaignGet
        };
    }

    function campaignGet(campaignName) {
        for (var i = 0; i < campaigns.length; i++) {
            if (campaigns[i].name === campaignName) {
                return campaigns[i];
            }
        }
        return null;
    }

    function campaignRemove(campaign) {
        campaigns.splice(campaigns.indexOf(campaign), 1);
    }

    function campaignAdd(campaign, cb) {
        for(var index in campaigns) {
            var b = campaigns[index];
            if (b.name === campaign.name) {
                if (cb) {
                    cb({ message: 'Error: ' + campaign.name + ' already exists!' }, null);
                }
                return;
            }
        }
        campaigns.push(campaign);

        if (cb) {
            cb(null, campaign);
        }
    }

    function campaignAll() {
        return campaigns;
    }

    // Might use a resource here that returns a JSON array
    // Some fake testing data
    var campaigns = [
        {
            name: 'Wrath of the Righteous',
        },
        {
            name: 'Underhill Adventures',
        }
    ];

})();
