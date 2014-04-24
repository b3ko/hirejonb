<?php
$pageTitle = 'Hire Jon B';
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
		<p>some stuff about me</p>
		<p>and more stuff</p>
		<p>so much stuff</p>
	</div>
</div> <!-- /container -->
_END;
require "footer.php";
?>