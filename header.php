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

    <title>$pageTitle</title>

    <!-- Bootstrap core CSS -->
    <link href="dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="dist/css/navbar-fixed-top.css" rel="stylesheet">
	<link rel="stylesheet" href="dist/tablesorter/css/theme.bootstrap.css">

    <!-- Just for debugging purposes. Don't actually copy this line! -->
    <!--[if lt IE 9]><script src="../../assets/js/ie8-responsive-file-warning.js"></script><![endif]-->

    <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
	<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
	<script type="text/javascript" src="/dist/tablesorter/js/jquery.tablesorter.js"></script>
	
	<script>
		(function($) {
			$(document).ready(function(){
			$(function(){
				$("#credits").tablesorter({
					headerTemplate : '{icon}{content}'
				});
			});
			});
		}(jQuery));
	</script>
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
            <li class=$resume><a href="resume.php">Resum&eacute;</a></li>
            <li class=$skills><a href="skills.php">Skills</a></li>
            <li class=$quotes><a href="quotes.php">Quotes</a></li>
			<li class=$contact><a href="contact.php">Contact</a></li>
            <li class="dropdown $dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">More.... <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="http://twitter.com/b3ko" target="_blank">Twitter</a></li>
				<li><a href="https://www.linkedin.com/pub/jon-berkowitz/94/a52/627" target="_blank">Linkedin</a></li>
				<li><a href="credits.php">Album Credits</a></li>
				<li class="divider"></li>
				<li><a href="siteinfo.php">About this site</a></li>
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
_END;
?>