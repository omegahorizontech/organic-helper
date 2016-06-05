// NOTE: ohApp is defined in app.js
ohApp.directive("searchGroupDirective", function() {
    return {
        restrict : 'E',
        scope: {
          item: "="
        },
        link: function(scope){
          var groupName = (scope.$parent.item.name);
          var templateToUse = 'js/templates/prerendered/error.html';
          if (groupName) {
            templateToUse = 'js/templates/prerendered/pr-' + groupName + '.html';
          }
          scope.searchTemplate = templateToUse;
        },
        template:"<div ng-include='searchTemplate'></div>"
    };
});
