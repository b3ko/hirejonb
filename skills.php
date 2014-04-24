<?php
$pageTitle = 'Skills';
$skills = 'active';
require "header.php";
echo <<<_END
    <div class="container">

      <!-- Main component for a primary marketing message or call to action -->
		<div class="jumbotron">
			<div class="pull-right">
				<img src="img/jon.jpg" alt="photo of one good looking dude" class="img-circle">
			</div>
			<h1>Jon Berkowitz</h1>
			</br>
			<div class="well">
				<h2>Soft Skills</h2>
				<ul>
					<li>skills</li>
					<li>skills</li>
					<li></li>
					<li></li>
					<li></li>
					<li>rolls with the punches / flexible</li>
				</ul>
			</div>	
			<div class="well">
				<h2>Technical Skills</h2>
				<ul>
					<li>vb.net</li>
					<li>c#.net (mvc)</li>
					<li>t-sql</li>
					<li>ssrs</li>
					<li>more skils...</li>
					<li></li>
				</ul>
			</div>			
		</div>
    </div> <!-- /container -->
_END;
require "footer.php";
?>



