// NOTE: ohApp is defined in app.js
ohApp.controller('searchController', ['$scope', '$http',
    function($scope, $http) {

      /*
       * Each array gets concated below, and has space seperated meta in some cases.
       */

      var bonds = [
        {
          "name": 'sBond', "displayname": 'σ Bond',
          "meta": 's s Bond sBond sigma',
        },
        {
          "name": 'pBond', "displayname": 'π Bond',
          "meta": 'p p Bond pBond pi',
        },
        {
          "name": 'dBond', "displayname": 'δ Bond',
          "meta": 'd d Bond dBond delta',
        }
      ];
      var orbitals = [
        {
          "name": 'sOrbital', "displayname": 'S - Orbital',
          "meta": 's s Orbital sOrbital sigma',
        },
        {
          "name": 'pOrbital', "displayname": 'P - Orbital',
          "meta": 'p p Orbital pOrbital pi',
        },
        {
          "name": 'dOrbital', "displayname": 'D - Orbital',
          "meta": 'd d Orbital dOrbital delta',
        }
      ];

      var functionalGroups = [
        {"name": 'acidAnhydride', "displayname": 'Acid Anhydride'},
        {"name": 'acylChloride', "displayname": 'Acyl Chloride'},
        {"name": 'alcohol', "displayname": 'Alcohol'},
        {"name": 'aldehyde', "displayname": 'Aldehyde'},
        {"name": 'alkane', "displayname": 'Alkane'},
        {"name": 'alkene', "displayname": 'Alkene'},
        {"name": 'amine', "displayname": 'Amine'},
        {"name": 'amide', "displayname": 'Amide'},
        {"name": 'carboxylicAcid', "displayname": 'Carboxylic Acid'},
        {"name": 'epoxide', "displayname": 'Epoxide'},
        {"name": 'ester', "displayname": 'Ester'},
        {"name": 'ether', "displayname": 'Ether'},
        {"name": 'haloalkane', "displayname": 'Haloalkane'},
        {"name": 'ketone', "displayname": 'Ketone'},
        // {"name": 'nitrile', "displayname": 'Nitrile'},
        {"name": 'phenol', "displayname": 'Phenol'}
      ];

      $scope.functionalGroups = functionalGroups;
      $scope.bonds = bonds;
      $scope.orbitals = orbitals;

      var allContent = [];
      allContent = allContent.concat(functionalGroups);
      allContent = allContent.concat(bonds);
      allContent = allContent.concat(orbitals);

      $scope.allContent = allContent;

    }]);
