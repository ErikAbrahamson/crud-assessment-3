var crudApp = angular.module('crudApp', ['ui.bootstrap.modal']);

crudApp.controller('mainController', function($scope, $http) {

  $scope.formData = {};
  $scope.modalData = {};

  $http.get('/api/v1/projects')
    .success(function(data) {
      $scope.projects = data;
      console.log(data);
    })
    .error(function(error) {
      console.log('Error: ' + error);
    });

  $scope.createProject = function() {
    $http.post('/api/v1/projects/', $scope.formData)
      .success(function(data) {
        $scope.formData = {}; // clears the form every entry
        $scope.projects.push(data);
        console.log(data);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };

  $scope.deleteProject = function(id) {
    $http.delete('/api/v1/projects/' + id)
      .success(function(data) {
        $scope.projects.splice(data, 1);
        console.log(data);
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };

    $scope.editProject = function(id) {
      var update = {
        name: $scope.modalData.name,
        description: $scope.modalData.description,
        tags: $scope.modalData.tags,
        group: $scope.modalData.group,
        group_members: $scope.modalData.group_members
      };
    $http.put('/api/v1/projects/' + id, update)
      .success(function(data) {
        data = update;
      })
      .error(function(error) {
        console.log('Error: ' + error);
      });
  };
});
