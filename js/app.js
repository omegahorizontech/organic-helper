var ohApp = angular.module('ohApp', ['ui.router']);

ohApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        /*
        General Pages
        */
        .state('home', {
            url: '/home',
            views: {
                '': { templateUrl: root + '/views/home.html' },
            }
        })

        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: root + '/views/about.html' },
            }
        })

        .state('search', {
            url: '/search',
            views: {
                '': { templateUrl: root + '/views/search.html' },
            }
        })

        /*
        Organic Reaction Pages
        */
        .state('acylation', {
            url: '/acylation',
            views: {
                '': { templateUrl: root + '/views/acylation.html' },
            }
        })

        .state('addition', {
            url: '/addition',
            views: {
                '': { templateUrl: root + '/views/addition.html' },
            }
        })

        .state('cracking', {
            url: '/cracking',
            views: {
                '': { templateUrl: root + '/views/cracking.html' },
            }
        })

        .state('elimination', {
            url: '/elimination',
            views: {
                '': { templateUrl: root + '/views/elimination.html' },
            }
        })

        .state('esterification', {
            url: '/esterification',
            views: {
                '': { templateUrl: root + '/views/esterification.html' },
            }
        })

        .state('hydrolysis', {
            url: '/hydrolysis',
            views: {
                '': { templateUrl: root + '/views/hydrolysis.html' },
            }
        })

        .state('oxidation', {
            url: '/oxidation',
            views: {
                '': { templateUrl: root + '/views/oxidation.html' },
            }
        })

        .state('polymerisation', {
            url: '/polymerisation',
            views: {
                '': { templateUrl: root + '/views/polymerisation.html' },
            }
        })

        .state('reduction', {
            url: '/reduction',
            views: {
                '': { templateUrl: root + '/views/reduction.html' },
            }
        })

        .state('substitution', {
            url: '/substitution',
            views: {
                '': { templateUrl: root + '/views/substitution.html' },
            }
        })

        /*
        Simple Functional Groups Pages
        */

        .state('aldehyde', {
            url: '/aldehyde',
            views: {
                '': { templateUrl: root + '/views/aldehyde.html' },
            }
        })

        .state('alkane', {
            url: '/alkane',
            views: {
                '': { templateUrl: root + '/views/alkane.html' },
            }
        })

        .state('alkene', {
            url: '/alkene',
            views: {
                '': { templateUrl: root + '/views/alkene.html' },
            }
        })

        .state('amine', {
            url: '/amine',
            views: {
                '': { templateUrl: root + '/views/amine.html' },
            }
        })

        .state('carboxylicAcid', {
            url: '/carboxylicAcid',
            views: {
                '': { templateUrl: root + '/views/carboxylicAcid.html' },
            }
        })

        .state('ester', {
            url: '/ester',
            views: {
                '': { templateUrl: root + '/views/ester.html' },
            }
        })

        .state('ether', {
            url: '/ether',
            views: {
                '': { templateUrl: root + '/views/ether.html' },
            }
        })

        .state('haloalkane', {
            url: '/haloalkane',
            views: {
                '': { templateUrl: root + '/views/haloalkane.html' },
            }
        })

        .state('ketone', {
            url: '/ketone',
            views: {
                '': { templateUrl: root + '/views/ketone.html' },
            }
        })

        .state('nitrile', {
            url: '/nitrile',
            views: {
                '': { templateUrl: root + '/views/nitrile.html' },
            }
        })

        /*
        Complex Functional Groups Pages
        */
        .state('alcohol', {
            url: '/alcohol',
            views: {
                '': { templateUrl: root + '/views/alcohol.html' },
            }
        })

        .state('acidAnhydride', {
            url: '/acidAnhydride',
            views: {
                '': { templateUrl: root + '/views/acidAnhydride.html' },
            }
        })

        .state('acylChloride', {
            url: '/acylChloride',
            views: {
                '': { templateUrl: root + '/views/acylChloride.html' },
            }
        })

        .state('amide', {
            url: '/amide',
            views: {
                '': { templateUrl: root + '/views/amide.html' },
            }
        })

        .state('epoxide', {
            url: '/epoxide',
            views: {
                '': { templateUrl: root + '/views/epoxide.html' },
            }
        })

        .state('phenol', {
            url: '/phenol',
            views: {
                '': { templateUrl: root + '/views/phenol.html' },
            }
        })
















});
