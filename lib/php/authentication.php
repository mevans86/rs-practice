<?
	include_once("/home/mevans86/metallacycle.com/play/netmol/api/constants.php");
	
	if($_SESSION[SESSION_USER_OBJECT]) {
		$user = (array) $_SESSION[SESSION_USER_OBJECT];
		$headerMenu = '<ul class="nav nav-pills pull-right">
							<li class="dropdown">
								<a href="#" class="dropdown-toggle" data-toggle="dropdown">'.$user["username"].' <b class="caret"></b></a>
								<ul class="dropdown-menu">
									<li><a tabindex="-1" href="../settings/">Settings</a></li>
									<li><a tabindex="-1" href="../api/user/login/logout.php">Sign Out</a></li>
								</ul>
							</li>
						</ul>';
		$authenticated = 1;
	} else if($_COOKIE[USER_COOKIE]) {
		$_SESSION[SESSION_USER_OBJECT] = json_decode($_COOKIE[USER_COOKIE]);
		$user = (array) $_SESSION[SESSION_USER_OBJECT];
		$headerMenu = '<ul class="nav pull-right"><li><div class="btn-group"><a href="#" class="btn dropdown-toggle btn-inverse" data-toggle="dropdown">'.$user["username"].' <b class="caret"></b></a>
		<ul class="dropdown-menu pull-right">
			<li><a tabindex="-1" href="../settings/">Settings</a></li>
			<li><a tabindex="-1" href="../api/user/login/logout.php">Sign Out</a></li>
		</ul></div></li></ul>';
		$authenticated = 1;
	} else {
		$headerMenu = '<form action="../api/user/login/login.php" class="navbar-form pull-right">
						<input class="input-small" type="text" name="username" placeholder="Username">
						<input class="input-small" type="password" name="password" placeholder="Password">
						<input type="checkbox" name="remember-status" title="Remember me">
						<button class="btn" type="submit">Sign In</button>
					</form>';
	}
?>