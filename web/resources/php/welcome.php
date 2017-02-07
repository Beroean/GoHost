<?php
	include('session.php');
?>
<html>

	<head>
		<title>Welcome </title>
		<link href="../css/bootstrap.css" rel="stylesheet" type="text/css">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
        <script src="js/bootstrap.js"></script>
        <style>
        	body { padding-top: 70px; }
        </style>
	</head>

	<body>
		<div class="navbar navbar-default navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" class="blogTitle" href="#">GoHost</a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="logout.php" data-toggle="modal">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container">
        	<h1>Welcome to GoHost, <?php echo $login_session; ?>!</h1>
        </div>
	</body>
</html>