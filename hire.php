<?php
echo <<<_END
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="img/favicon.jpg">

    <title>Hire Jon Berkowitz</title>

    <!-- Bootstrap core CSS -->
    <link href="dist/css/bootstrap.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="dist/css/navbar-fixed-top.css" rel="stylesheet">
	<!--<link rel="stylesheet" href="dist/tablesorter/css/theme.bootstrap.css">-->
	
	
    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script type="text/javascript" src="/dist/tablesorter/js/jquery.tablesorter.js"></script>
  </head>

  <body>

    <!-- Fixed navbar -->
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="hire.php">Hire Jon B</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li><a href="resume.php">Resum&eacute;</a></li>
			<li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">About me<b class="caret"></b></a>
			  <ul class="dropdown-menu">
				<li><a href="skills.php">Skills</a></li>
				<li><a href="quotes.php">Quotes</a></li>
				<li><a href="contact.php">Contact</a></li>
				<li class="divider"></li>
				<li><a href="credits.php">Album Credits</a></li>
				<li><a href="siteinfo.php">About this site</a></li>
				<li><a href="#">FAQ...coming soon</a></li>
			  </ul>
			</li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Links<b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="http://twitter.com/b3ko" target="_blank">Twitter</a></li>
				<li><a href="https://www.linkedin.com/pub/jon-berkowitz/94/a52/627" target="_blank">Linkedin</a></li>
				<li><a href="https://github.com/b3ko" target="_blank">Github</a></li>
              </ul>
            </li>
          </ul>
		  <ul class="nav navbar-nav navbar-right">
            <li><a href="tel:412-254-6364">412-254-6364</a></li>
            <li><a href="mailto:berkowitz.jon@gmail.com" target="_blank">berkowitz.jon@gmail.com</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
	
	
	<div class="container">
		<div class="jumbotron">
			<div class="pull-right  hidden-print">
				<img src="img/jon.jpg" alt="photo of one good looking dude" class="img-circle">
			</div>
			<h1>Jon Berkowitz</h1>
			<br />
			<p>
				<a class="btn btn-lg btn-primary" href="resume.php" role="button">Resum&eacute; &raquo;</a>
			</p>
			<br />
			<p>I strive to find the simplest possible solutions.</p>
			<p>I want to do things the right way, the first time.</p>
			<p>I enjoy the challenge of fixing bugs that nobody else wants to fix.</p>
			<p>I have both a passion for learning from colleagues and a drive to teach others what I know.</p>
		</div>
	</div> <!-- /container -->
_END;
require "footer.php";
?>