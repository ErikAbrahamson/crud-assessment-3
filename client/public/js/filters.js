crudApp.filter('splitter', function() {
  return function(input) {
    if (isNaN(input)) {
      return input ? input.toString().split(',') : null;
    }
  };
});
