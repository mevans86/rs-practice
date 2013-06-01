<!DOCTYPE HTML>
<html lang="en-US" ng-app="rsPractice">
<head>
	<meta charset="UTF-8">
	<title>R/S Labeling Trainer</title>
	<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" href="css/app.css">
	<script type="text/javascript" src="lib/jquery.min.js"></script>
	<script type="text/javascript" src="lib/angular/angular.min.js"></script>
	<script type="text/javascript" src="js/app.js"></script>
	<script type="text/javascript" src="js/controllers.js"></script>
</head>
<body>
	<div class="navbar navbar-inverse navbar-fixed-top">
		<div class="navbar-inner">
			<div class="container">
				<a class="brand" href="../app"><em>R</em>/<em>S</em> Labeling Trainer</a>
			</div>
		</div>
	</div>
	
	<div class="container" id="main-container" ng-view>
	</div>
	
	<script type="text/javascript" src="lib/bootstrap/js/bootstrap.min.js"></script>
</body>
</html>