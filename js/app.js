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
                '': { templateUrl: '../views/home.html' },
            }
        })

        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: '../views/about.html' },
            }
        })

        /*
        Organic Reaction Pages
        */
        .state('acylation', {
            url: '/acylation',
            views: {
                '': { templateUrl: '../views/acylation.html' },
            }
        })

        .state('addition', {
            url: '/addition',
            views: {
                '': { templateUrl: '../views/addition.html' },
            }
        })

        .state('cracking', {
            url: '/cracking',
            views: {
                '': { templateUrl: '../views/cracking.html' },
            }
        })

        .state('elimination', {
            url: '/elimination',
            views: {
                '': { templateUrl: '../views/elimination.html' },
            }
        })

        .state('esterification', {
            url: '/esterification',
            views: {
                '': { templateUrl: '../views/esterification.html' },
            }
        })

        .state('hydrolysis', {
            url: '/hydrolysis',
            views: {
                '': { templateUrl: '../views/hydrolysis.html' },
            }
        })

        .state('oxidation', {
            url: '/oxidation',
            views: {
                '': { templateUrl: '../views/oxidation.html' },
            }
        })

        .state('polymerisation', {
            url: '/polymerisation',
            views: {
                '': { templateUrl: '../views/polymerisation.html' },
            }
        })

        .state('reduction', {
            url: '/reduction',
            views: {
                '': { templateUrl: '../views/reduction.html' },
            }
        })

        .state('substitution', {
            url: '/substitution',
            views: {
                '': { templateUrl: '../views/substitution.html' },
            }
        })

        /*
        Functional Groups Pages
        */
        .state('acidAnhydride', {
            url: '/acidAnhydride',
            views: {
                '': { templateUrl: '../views/acidAnhydride.html' },
            }
        })

        .state('acylChloride', {
            url: '/acylChloride',
            views: {
                '': { templateUrl: '../views/acylChloride.html' },
            }
        })

        .state('alcohol', {
            url: '/alcohol',
            views: {
                '': { templateUrl: '../views/alcohol.html' },
            }
        })

        .state('aldehyde', {
            url: '/aldehyde',
            views: {
                '': { templateUrl: '../views/aldehyde.html' },
            }
        })

        .state('alkane', {
            url: '/alkane',
            views: {
                '': { templateUrl: '../views/alkane.html' },
            }
        })

        .state('alkene', {
            url: '/alkene',
            views: {
                '': { templateUrl: '../views/alkene.html' },
            }
        })

        .state('amine', {
            url: '/amine',
            views: {
                '': { templateUrl: '../views/amine.html' },
            }
        })

        .state('amide', {
            url: '/amide',
            views: {
                '': { templateUrl: '../views/amide.html' },
            }
        })

        .state('carboxylicAcid', {
            url: '/carboxylicAcid',
            views: {
                '': { templateUrl: '../views/carboxylicAcid.html' },
            }
        })

        .state('epoxide', {
            url: '/epoxide',
            views: {
                '': { templateUrl: '../views/epoxide.html' },
            }
        })

        .state('ester', {
            url: '/ester',
            views: {
                '': { templateUrl: '../views/ester.html' },
            }
        })

        .state('ether', {
            url: '/ether',
            views: {
                '': { templateUrl: '../views/ether.html' },
            }
        })

        .state('haloalkane', {
            url: '/haloalkane',
            views: {
                '': { templateUrl: '../views/haloalkane.html' },
            }
        })

        .state('ketone', {
            url: '/ketone',
            views: {
                '': { templateUrl: '../views/ketone.html' },
            }
        })

        .state('nitrile', {
            url: '/nitrile',
            views: {
                '': { templateUrl: '../views/nitrile.html' },
            }
        })

















});
