<?php
$pageTitle = 'FAQ';
$dropdown = 'active';
$faq = 'active';
require "header.php";
echo <<<_END
	<div class="panel-group" id="accordion">
	  <div class="panel panel-default">
		<div class="panel-heading">
		  <h4 class="panel-title">
			<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">
			  What did I learn in the mailroom?
			</a>
		  </h4>
		</div>
		<div id="collapseOne" class="panel-collapse collapse in">
		  <div class="panel-body">
			Working in the mail room isn't about stuffing envelopes. It's more about doing everything you can so you don't spend all day stuffing envelopes.
			There was so much room from improvement when I started in the mailroom.....
			
		  </div>
		</div>
	  </div>
	  <div class="panel panel-default">
		<div class="panel-heading">
		  <h4 class="panel-title">
			<a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">
			  What is a 3rd Engineer, a runner, a pro-tools engineer, etc?
			</a>
		  </h4>
		</div>
		<div id="collapseTwo" class="panel-collapse collapse">
		  <div class="panel-body">
			Working in a big recording studio takes many people that wear many hats. At many times you are wearing more than one hat at a time....
			
		  </div>
		</div>
	  </div>
	  <div class="panel panel-default">
		<div class="panel-heading">
		  <h4 class="panel-title">
			<a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
			  What is "Sessions @ AOL"
			</a>
		  </h4>
		</div>
		<div id="collapseThree" class="panel-collapse collapse">
		  <div class="panel-body">
			"Sessions @AOL" was a live recording in the recording studio (most of the time), recorded in front of 4 cameras.
			Most of the time bands don't record all at once, and they definetly don't have a camera crew with 4 cameras in the room...
		  </div>
		</div>
	  </div>
	
	<div class="panel panel-default hidden-print">
		<div class="panel-heading">
		  <h4 class="panel-title">
			<a data-toggle="collapse" data-parent="#accordion" href="#collapseFour">
			  Ever Since Day One at Bill's Bar, 1998 <span class="glyphicon glyphicon-facetime-video"></span>
			</a>
		  </h4>
		</div>
		<div id="collapseFour" class="panel-collapse collapse">
		  <div class="panel-body">
			<iframe class="container-fluid img-responsive" src="//www.youtube.com/embed/MfKZgFyW4yk" frameborder="0" allowfullscreen></iframe>
		  </div>
		</div>
	</div>
  </div> <!--end panel group-->
</div> <!-- /container -->
_END;
require "footer.php";
?>