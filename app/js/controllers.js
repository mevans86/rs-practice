angular.module('rsPractice', []).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/trainer', { templateUrl: 'partials/problem.html', controller: rsPracticeCtrl })
		.when('/home', { templateUrl: 'partials/get-started.html', controller: startCtrl })
		.otherwise({ redirectTo: '/home' });
}]);

function startCtrl($scope) {

}

function rsPracticeCtrl($scope) {
	$scope.problems = [
		{
			'id': 1,
			'descriptor': 0 // R = 0, S = 1
		},
		{
			'id': 2,
			'descriptor': 0
		},
		{
			'id': 3,
			'descriptor': 0
		},
		{
			'id': 4,
			'descriptor': 0
		},
		{
			'id': 5,
			'descriptor': 0
		},
		{
			'id': 6,
			'descriptor': 0
		},
		{
			'id': 7,
			'descriptor': 1
		},
		{
			'id': 8,
			'descriptor': 1
		},
		{
			'id': 9,
			'descriptor': 1
		},
		{
			'id': 10,
			'descriptor': 1
		},
		{
			'id': 11,
			'descriptor': 1
		},
		{
			'id': 12,
			'descriptor': 1
		},
		{
			'id': 13,
			'descriptor': 1
		},
		{
			'id': 14,
			'descriptor': 1
		},
		{
			'id': 15,
			'descriptor': 1
		},
		{
			'id': 16,
			'descriptor': 1
		}
	];
	$scope.problemCount = $scope.problems.length;
	$scope.currentProblem = Math.floor(Math.random() * 15) + 1;
	$scope.responses = [];
	$scope.startTime = new Date().getTime();
	
	$scope.advance = function(currentProblemID, selectedDescriptor) {
		var responseTime = ((new Date().getTime()) - $scope.startTime) / 1000;
		
		var next = currentProblemID;
		while(next == currentProblemID) {
			next = Math.floor(Math.random() * 15) + 1;
		}
		$scope.currentProblem = next;
		$scope.responses.push({ 'id': currentProblemID, 'sel': selectedDescriptor, 't': responseTime });
	}
}