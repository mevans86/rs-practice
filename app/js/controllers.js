function startCtrl($scope, problemCollection, responsesVector, userInfo) {
	$scope.problemCount = problemCollection.getProblemCount();
	responsesVector.deleteResponses();
	$(".gender").click(function() {
	    $("#gender-i").val($(this).text().toLowerCase());
	});
	$(".last-course").click(function() {
	    $("#last-course-i").val($(this).attr('id'));
	});
	$(".experience").click(function() {
	    $("#experience-i").val($(this).attr('id'));
	});
	$scope.setDemographicData = function() {
		userInfo.setGender($("#gender-i").val());
		userInfo.setAge(parseInt($("#age").val()));
		userInfo.setLastCourse($("#last-course-i").val());
		userInfo.setExperience($("#experience-i").val());
	};
}

function trainerCtrl($scope, responsesVector, problemCollection) {	
	/* $('body').ajaxStart(function() {
		$('.loading-header').html('<img src="img/loader.gif">');
	});
	$('body').ajaxStop(function() {
		$('.loading-header').empty();
	}); */
	
	$scope.problems = problemCollection.getProblems();
	$scope.problemCount = problemCollection.getCountOfProblemsRemaining();
	$scope.currentProblem = Math.floor(Math.random() * $scope.problemCount);
	$scope.startTime = new Date().getTime();
	$scope.responses = responsesVector.getResponses();
	$scope.advance = function(currentProblemID, selectedDescriptor) {
		var responseTime = ((new Date().getTime()) - this.startTime) / 1000;
		problemCollection.removeProblem(currentProblemID);
		responsesVector.addResponse(currentProblemID, responseTime, selectedDescriptor);
		this.responses = responsesVector.getResponses();
		
		if(problemCollection.getCountOfProblemsRemaining() == 0) {
			// all problems attempted
			location.href = '#/stats';
			return;
		} else {
			$scope.problemCount = problemCollection.getCountOfProblemsRemaining();
			var nextIndex = Math.floor(Math.random() * $scope.problemCount);
			this.currentProblem = problemCollection.getProblemsRemaining()[nextIndex];
		}
	};
}

function statisticsCtrl($scope, responsesVector, problemCollection, userInfo) {
	$scope.reverseSort = true;
	$scope.responses = responsesVector.getResponses();
	$scope.problems = problemCollection.getProblems();
	$scope.processedResponses = [];
	$scope.correctCount = 0;
	$scope.winningPercentage = 0.0;
	$scope.txtString = 'Problem\tID\tScore\tTime\tURL\n';
	for(var i = 0; i < $scope.responses.length; i++) {
		var j = $scope.responses[i].id - 1;
		var score = ($scope.problems[j].desc == $scope.responses[i].desc) + 0;
		$scope.correctCount += score;
		if(score) var scoreClass = 'success'; else var scoreClass = 'important';
		var t = $scope.responses[i].t;
		if(i > 0) t = t - $scope.responses[i-1].t;
		$scope.processedResponses.push({
			'id': $scope.responses[i].id,
			'score': score,
			'scoreClass': scoreClass,
			't': (Math.round(t * Math.pow(10,3)) / Math.pow(10,3))
		});
		$scope.txtString += ((i + 1) + '\t' + $scope.responses[i].id + '\t' + score + '\t' + $scope.processedResponses[i].t + '\t' + 'http://www.metallacycle.com/play/rs-practice/app/img/' + $scope.responses[i].id + '.png\n');
	}
	$scope.winningPercentage = $scope.correctCount / (Math.max(1, $scope.responses.length));
	$scope.winningPercentage = Math.round($scope.winningPercentage * 10000) / 100;
	$scope.userInfo = userInfo.getUserInfo();
	responsesVector.deleteResponses();
	var sequence = JSON.stringify($scope.processedResponses);
	if(sequence != '[]') {
		$.post('lib/ajax/tracking.php', {
			'username': $scope.userInfo.username,
			'sequence': sequence,
			'gender': $scope.userInfo.gender,
			'experience': $scope.userInfo.experience,
			'lastCourse': $scope.userInfo.lastCourse,
			'age': $scope.userInfo.age,
			'userAgent': navigator.userAgent
		});
	}
}