<?php
$pageTitle = 'Site Info';
$dropdown = 'active';
$site = 'active';
require "header.php";
echo <<<_END
	<div class="well">
		<p>
			I felt it was important to have my resume online.
			<a href="https://www.linkedin.com/pub/jon-berkowitz/94/a52/627" target="_blank">Linkedin</a> would have been fine,
			but I felt that a website would be even better. I am not a designer, but I realize that design is important.
			I decided to use <a href="http://getbootstrap.com/" target="_blank">bootstrap</a> as a base for my website 
			fully realizing that my site would not be the most unique. The benefits of using bootstrap (mobile friendly, 
			works across many platforms, looks pretty good) outweigh the cons (having a website that looks like a lot of 
			other websites, having designers point and laugh at me, etc.)
			Using bootstrap also let me focus on the content of the site rather than on building the site.
		</p>
	</div>			
</div> <!-- /container -->
_END;
require "footer.php";
?>


