Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function range(i){ return i ? range(i-1).concat(i) : []; }

var rsPracticeModule = angular.module('rsPractice', []).config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/trainer', { templateUrl: 'partials/trainer.html', controller: trainerCtrl })
		.when('/home', { templateUrl: 'partials/get-started.html', controller: startCtrl })
		.when('/stats', { templateUrl: 'partials/statistics.html', controller: statisticsCtrl })
		.otherwise({ redirectTo: '/home' });
}]).service('userInfo', function() {
	var gender = 'missing';
	var age = -1;
	var lastCourse = 'missing';
	var experience = 'missing';
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
		},
		{
			'id': 39, 'desc': 0
		},
		{
			'id': 40, 'desc': 0
		},
		{
			'id': 41, 'desc': 0
		},
		{
			'id': 42, 'desc': 0
		},
		{
			'id': 43, 'desc': 0
		},
		{
			'id': 44, 'desc': 0
		},
		{
			'id': 45, 'desc': 0
		},
		{
			'id': 46, 'desc': 0
		},
		{
			'id': 47, 'desc': 1
		},
		{
			'id': 48, 'desc': 1
		},
		{
			'id': 49, 'desc': 1
		},
		{
			'id': 50, 'desc': 1
		},
		{
			'id': 51, 'desc': 0
		},
		{
			'id': 52, 'desc': 0
		},
		{
			'id': 53, 'desc': 0
		},
		{
			'id': 54, 'desc': 0
		},
		{
			'id': 55, 'desc': 1
		},
		{
			'id': 56, 'desc': 1
		},
		{
			'id': 57, 'desc': 1
		},
		{
			'id': 58, 'desc': 1
		},
		{
			'id': 59, 'desc': 1
		},
		{
			'id': 60, 'desc': 1
		},
		{
			'id': 61, 'desc': 1
		},
		{
			'id': 62, 'desc': 1
		},
		{
			'id': 63, 'desc': 0
		},
		{
			'id': 64, 'desc': 0
		},
		{
			'id': 65, 'desc': 0
		},
		{
			'id': 66, 'desc': 0
		},
		{
			'id': 67, 'desc': 1
		},
		{
			'id': 68, 'desc': 1
		},
		{
			'id': 69, 'desc': 1
		},
		{
			'id': 70, 'desc': 1
		},
		{
			'id': 71, 'desc': 0
		},
		{
			'id': 72, 'desc': 0
		},
		{
			'id': 73, 'desc': 1
		},
		{
			'id': 74, 'desc': 1
		},
		{
			'id': 75, 'desc': 1
		},
		{
			'id': 76, 'desc': 1
		},
		{
			'id': 77, 'desc': 0
		},
		{
			'id': 78, 'desc': 0
		},
		{
			'id': 79, 'desc': 1
		},
		{
			'id': 80, 'desc': 0
		},
		{
			'id': 81, 'desc': 1
		},
		{
			'id': 82, 'desc': 0
		},
		{
			'id': 83, 'desc': 0
		},
		{
			'id': 84, 'desc': 0
		},
		{
			'id': 85, 'desc': 1
		},
		{
			'id': 86, 'desc': 1
		},
		{
			'id': 87, 'desc': 1
		},
		{
			'id': 88, 'desc': 0
		},
		{
			'id': 89, 'desc': 0
		},
		{
			'id': 90, 'desc': 0
		},
		{
			'id': 91, 'desc': 1
		},
		{
			'id': 92, 'desc': 1
		},
		{
			'id': 93, 'desc': 1
		},
		{
			'id': 94, 'desc': 0
		},
		{
			'id': 95, 'desc': 0
		},
		{
			'id': 96, 'desc': 0
		},
		{
			'id': 97, 'desc': 1
		},
		{
			'id': 98, 'desc': 1
		},
		{
			'id': 99, 'desc': 0
		},
		{
			'id': 100, 'desc': 0
		},
	];
	var problemsRemaining = range(problems.length);
	return {
		removeProblem: function(p) {
			problemsRemaining.remove(p);
		},
		getCountOfProblemsRemaining: function() {
			return problemsRemaining.length;
		},
		getProblemsRemaining: function() {
			return problemsRemaining;
		},
		getProblems: function() {
			return problems;
		},
		getProblemCount: function() {
			return problems.length;
		}
	};
}).directive('problemTip', function() {
	return function(scope, element, attrs) {
		$(element).tooltip({
			html: true,
			container: 'body',
			title: '<img src="img/' + scope.response.id + '.png" width="140" />'
		});
	}
}).directive('correctMean', function() {
	return function(scope, element, attrs) {
		var arr = $(element).attr('id').split('-');
		var id = arr[0];
		$.get('lib/ajax/tracking.php', {
			'a': 'corrMean',
			'id': scope.response.id
		}, function(data) {
			$(element).html(parseFloat(data));
		});
	}
}).directive('incorrectMean', function() {
	return function(scope, element, attrs) {
		var arr = $(element).attr('id').split('-');
		var id = arr[0];
		$.get('lib/ajax/tracking.php', {
			'a': 'incorrMean',
			'id': scope.response.id
		}, function(data) {
			$(element).html(parseFloat(data));
		});
	}
});
