// NOTE: ohApp is defined in app.js
ohApp.controller('searchController', ['$scope', '$http',
    function($scope, $http) {

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

console.log(functionalGroups);
      $scope.functionalGroups = functionalGroups;

    }]);
