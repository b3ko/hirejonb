<?php
$pageTitle = 'Skills';
$skills = 'active';
$dropdown = 'active';
require "header.php";
echo <<<_END
	<div>
		<div class="well">
			<h2>Skills</h2>
			<ul>
				<li>Forward thinking and ability to anticipate issues</li>
				<li>Logical and analytical approach to problem solving</li>
				<li>Ability to take the initiative to learn new skills</li>
				<li>Critical thinking</li>
				<li>Strong time management skills</li>
				<li>Good interpersonal skills</li>
				<li>Ability to work well both on a team and independently</li>
				<li>Attention to detail</li>
			</ul>	
			<h2>Strengths</h2>	
			<ul>
				<li>Knowing when to keep trying and when to ask for help</li>
				<li>Willingness to accept responsibility for mistakes</li>
				<li>Being thorough; always checking my work</li>
				<li>Willingness to go the extra mile to do things correctly the first time</li>
				<li>Flexibility; being able to roll with the punches</li>						
			</ul>
		</div>	
		<div class="well">
			<h2>Technical Skills</h2>
			<ul>
				<li>vb.net</li>
				<li>c#.net (mvc)</li>
				<li>t-sql</li>
				<li>ssrs</li>
			</ul>
		</div>
		<div class="well">
			<h2>Stackoverflow badges and reputation</h2>
			<a href="http://stackoverflow.com/users/3363384/b3ko" target="_blank">
			<img src="http://stackoverflow.com/users/flair/3363384.png" width="208" height="58" alt="profile for b3ko at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for b3ko at Stack Overflow, Q&amp;A for professional and enthusiast programmers">
			</a>	
		</div>
	</div>
</div> <!-- /container -->
_END;
require "footer.php";
?>