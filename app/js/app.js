var rsPracticeModule = angular.module('rsPractice', []).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/trainer', { templateUrl: 'partials/problem.html', controller: trainerCtrl })
		.when('/home', { templateUrl: 'partials/get-started.html', controller: startCtrl })
		.when('/stats', { templateUrl: 'partials/statistics.html', controller: statisticsCtrl })
		.otherwise({ redirectTo: '/home' });
}]).service('userInfo', function() {
	var gender = '';
	var age = -1;
	var lastCourse = '';
	var experience = '';
	var username = Math.random().toString(36).substring(4);
	return {
		setGender: function(g) {
			gender = g;
		},
		setAge: function(a) {
			age = a;
		},
		setLastCourse: function(l) {
			lastCourse = l;
		},
		setExperience: function(e) {
			experience = e;
		},
		getUserInfo: function() {
			return {
				'username': username,
				'gender': gender,
				'age': age,
				'lastCourse': lastCourse,
				'experience': experience
			};
		}
	};
}).service('responsesVector', function() {
	var responses = [];
	return {
		getResponses: function() {
			return responses;
		},
		addResponse: function(id, time, desc) {
			responses.push({
				'id': id,
				'desc': desc,
				't': time
			});
		},
		deleteResponses: function() {
			responses = [];
		}
	};
}).service('problemCollection', function() {
	var problems = [
		{
			'id': 1, 'desc': 0 // R = 0, S = 1
		},
		{
			'id': 2, 'desc': 0
		},
		{
			'id': 3, 'desc': 0
		},
		{
			'id': 4, 'desc': 0
		},
		{
			'id': 5, 'desc': 0
		},
		{
			'id': 6, 'desc': 0
		},
		{
			'id': 7, 'desc': 1
		},
		{
			'id': 8, 'desc': 1
		},
		{
			'id': 9, 'desc': 1
		},
		{
			'id': 10, 'desc': 1
		},
		{
			'id': 11, 'desc': 1
		},
		{
			'id': 12, 'desc': 1
		},
		{
			'id': 13, 'desc': 1
		},
		{
			'id': 14, 'desc': 1
		},
		{
			'id': 15, 'desc': 1
		},
		{
			'id': 16, 'desc': 1
		},
		{
			'id': 17, 'desc': 0
		},
		{
			'id': 18, 'desc': 0
		},
		{
			'id': 19, 'desc': 0
		},
		{
			'id': 20, 'desc': 0
		},
		{
			'id': 21, 'desc': 1
		},
		{
			'id': 22, 'desc': 1
		},
		{
			'id': 23, 'desc': 1
		},
		{
			'id': 24, 'desc': 1
		},
		{
			'id': 25, 'desc': 0
		},
		{
			'id': 26, 'desc': 0
		},
		{
			'id': 27, 'desc': 0
		},
		{
			'id': 28, 'desc': 0
		},
		{
			'id': 29, 'desc': 0
		},
		{
			'id': 30, 'desc': 0
		},
		{
			'id': 31, 'desc': 0
		},
		{
			'id': 32, 'desc': 0
		},
		{
			'id': 33, 'desc': 0
		},
		{
			'id': 34, 'desc': 1
		},
		{
			'id': 35, 'desc': 1
		},
		{
			'id': 36, 'desc': 1
		},
		{
			'id': 37, 'desc': 1
		},
		{
			'id': 38, 'desc': 1
		}
	];
	return {
		getProblems: function() {
			return problems;
		},
		getProblemCount: function() {
			return problems.length;
		}
	};
});