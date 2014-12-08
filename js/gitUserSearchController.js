GithubUserSearch.controller('GitUserSearchController', function($scope, $resource){
  
var searchResource = $resource('https://api.github.com/search/users?access_token=');

$scope.doUsers = function(){
    $scope.searchResults = searchResource.get({
      q: $scope.searchTerm
    });
  };

var searchRepos = $resource('https://api.github.com/users/:q/repos?access_token=');
   
$scope.doRepos = function(){
    $scope.repoResults = searchRepos.query({
      q: $scope.searchTerm
    })   
};

$scope.doSearch = function(){
    $scope.doUsers()
    $scope.doRepos()
}


});

