<?
	// Database info and authentication
	define("DB_SERVERNAME", "mysql.metallacycle.com");
	define("DB_DATABASENAME", "rs_practice"); // Change if you alter the database name.
	define("DB_USERNAME", "metallacyclecom");
	define("DB_PASSWORD", "6312nz");
	
	// Cookies and session information. Change if you'd like, but it's not necessary.
	define("USER_COOKIE", "rs_practice_user");
	define("SESSION_USER_OBJECT", "rs_practice_userobject");
	
	// Database table names. Don't change unless you play with the database names;
	// the included SQL file uses these names.
	define("USERS_TABLE", "RSUser");
	
	// Project location and developer info. Change this to fit your server
	define("PROJECT_ROOT", "http://www.metallacycle.com/play/rs-practice");
	define("DEV_EMAIL", "mevans@metallacycle.com");
	define("PROJECT_VERSION", "1.0.0");
	
	// For sending email notifications. Used to plug into a PEAR Mail::factory
	// for email notifications. Authentication must be used.
	define("NOTIFIER_USERNAME", "mevans@metallacycle.com");
	define("NOTIFIER_PASSWORD", "B1ackdogpeachsauce");
	define("NOTIFIER_HOST", "ssl://mail.metallacycle.com");
	define("NOTIFIER_PORT", "465");
?>