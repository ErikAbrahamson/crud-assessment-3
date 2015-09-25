crudApp.directive('myTitle', function() {
  return {
    restrict: 'AE',
    replace: 'false',
    template:
      '<h1>CRUD 3 :: MEAN stack and custom directives</h1>'
  };
});

crudApp.directive('editModal', function() {
  return {
    restrict: 'AEC',
    replace: 'true',
    templateUrl: './partials/modal.html'
  };
});
