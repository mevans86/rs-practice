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
	$scope.problems = problemCollection.getProblems();
	$scope.problemCount = problemCollection.getProblemCount();
	$scope.currentProblem = Math.floor(Math.random() * ($scope.problemCount - 1)) + 1;
	$scope.startTime = new Date().getTime();
	$scope.responses = responsesVector.getResponses();
	$scope.advance = function(currentProblemID, selectedDescriptor) {
		var responseTime = ((new Date().getTime()) - this.startTime) / 1000;
		var next = currentProblemID;
		while(next == currentProblemID) {
			next = Math.floor(Math.random() * ($scope.problemCount - 1)) + 1;
		}
		this.currentProblem = next;
		responsesVector.addResponse(currentProblemID, responseTime, selectedDescriptor);
		this.responses = responsesVector.getResponses();
	};
}

function statisticsCtrl($scope, responsesVector, problemCollection, userInfo) {
	$scope.responses = responsesVector.getResponses();
	$scope.problems = problemCollection.getProblems();
	$scope.processedResponses = [];
	$scope.correctCount = 0;
	$scope.winningPercentage = 0.0;
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
			't': (Math.round(t * Math.pow(10,4)) / Math.pow(10,4))
		});
	}
	$scope.winningPercentage = $scope.correctCount / (Math.max(1, $scope.responses.length));
	$scope.winningPercentage = Math.round($scope.winningPercentage * 10000) / 100;
	$scope.userInfo = userInfo.getUserInfo();
	// alert(JSON.stringify($scope.userInfo));
	responsesVector.deleteResponses();
}