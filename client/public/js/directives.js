crudApp.directive('myTitle', function() {
  return {
    restrict: 'AE',
    replace: 'true',
    template:
      '<h1>CRUD 3 :: MEAN stack and custom directives</h1>'
  };
});
