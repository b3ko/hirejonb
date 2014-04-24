<?php
$pageTitle = 'Contact Me';
$contact = 'active';
require "header.php";
echo <<<_END
<div class="container">

    <div class="container">

      <!-- Main component for a primary marketing message or call to action -->
      <div class="jumbotron">
		<div class="pull-right">
			<img src="img/jon.jpg" alt="photo of one good looking dude" class="img-circle">
        </div>
        <h1>Jon Berkowitz</h1>
			<p>
				<span class="glyphicon glyphicon-envelope">
				</span>
				<a href="mailto:berkowitz.jon@gmail.com" target="_blank">
					berkowitz.jon@gmail.com
				</a>
			</p>
			<p>
				<span class="glyphicon glyphicon-phone-alt">
				</span>
				<a href="tel:412-254-6364">
					412-254-6364
				</a>
			</p>
			
      </div>

    </div> <!-- /container -->
_END;
require "footer.php";
?>
