<?php
$pageTitle = 'Contact Me';
$contact = 'active';
$dropdown = 'active';
require "header.php";
echo <<<_END
	<div class="well">
		<p>
			<span class="glyphicon glyphicon-envelope">
			</span>
			<a href="mailto:berkowitz.jon@gmail.com" target="_blank">
				berkowitz.jon@gmail.com
			</a>
		</p>
		<p>
			<span class="glyphicon glyphicon-phone">
			</span>
			<a href="tel:412-254-6364">
				412-254-6364
			</a>
		</p>
		<p>
			<span class="glyphicon glyphicon-phone-alt">
			</span>
			<a href="tel:412-251-0505">
				412-251-0505
			</a>
		</p>
	</div>

</div> <!-- /container -->
_END;
require "footer.php";
?>
