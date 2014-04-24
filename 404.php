<?php
$pageTitle = '404 Page Not Found';
require "header.php";
echo <<<_END
<div class="container">
	<!-- Main component for a primary marketing message or call to action -->
	<div class="jumbotron">
		<div class="pull-right">
			<img src="img/jon.jpg" alt="photo of one good looking dude" class="img-circle">
		</div>
		<h1>Jon Berkowitz</h1>
			<p>
				<a class="btn btn-lg btn-primary" href="resume.php" role="button">Resum&eacute; &raquo;</a>
			</p>
		<div class="well well-sm">
			<h3>whooops....something has gone bad!</h3>
			<dl>
				<dt>Try one of these pages:</dt>
				<ul>
					<li><a href="resume.php">Resum&eacute;</a></li>
					<li><a href="skills.php">Skills</a></li>
					<li><a href="quotes.php">Quotes</a></li>
					<li><a href="contact.php">Contact</a></li>
				</ul>
			</dl>
		</div>	
	</div>
</div> <!-- /container -->
_END;
require "footer.php";
?>