<?php
$pageTitle = 'Quotes';
$quotes = 'active';
require "header.php";
require "photo.php";
echo <<<_END
	<h1>Jon Berkowitz</h1>
	</br>
	
	<div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
	<!-- Indicators -->
	<ol class="carousel-indicators">
		<li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		<li data-target="#carousel-example-generic" data-slide-to="1"></li>
		<li data-target="#carousel-example-generic" data-slide-to="2"></li>
		<li data-target="#carousel-example-generic" data-slide-to="3"></li>
		<li data-target="#carousel-example-generic" data-slide-to="4"></li>
		<li data-target="#carousel-example-generic" data-slide-to="5"></li>
		<li data-target="#carousel-example-generic" data-slide-to="6"></li>
	</ol>

				  <!-- Wrapper for slides -->
				  <div class="carousel-inner">
					<div class="item active">
						 <p style="height: 500px;">
						 </p>
					  <div class="carousel-caption">
						<blockquote>
							<p>
								"Jon has been invaluable to staff members that have questions, to me when we design new systems and make sure we 
							learn from our past mistakes as well as to all of our developers and support team in India who often rely heavily on 
							him to help, clarify and come up with the best way of implementing something whether that be a bug fix or a complex 
							report."
							</p>
						
						<footer>
							Ines Cortes, Business Analyst, Cultural Care Au Pair
						</footer>
					</blockquote>
							
						
					  </div>
					</div>
					<div class="item">
					  <p style="height: 500px;">
					   </P>
					  <div class="carousel-caption">
						<blockquote>
							<p>
								"I can't count the number of times that a request or problem has surfaced and not only has Jon fixed that one issue, 
								but always follows through to think if there are after-effects or related issues that need investigation too. Taking 
								this extra step (sometimes multiple steps) has been instrumental in making our users happy and appreciative of Jon's 
								hard work and dedication."
							</p>
							<footer>
								Sean McGonagle, Vice President Information Technologies, Cultural Care Au Pair
							</footer>
						</blockquote>
			
					  </div>
					</div>
					<div class="item">
					  <p style="height: 500px;">
						 </p>
					  <div class="carousel-caption">
						<blockquote>
							<p>
								"Jon Berkowitz has been a colleague of mine for the past 7 years; not only have we worked on several projects over the 
								years together, but Jon has always been my go-to guy for just about everything, whether it related to his work or not. 
								Jon has an innate ability to proactively contemplate all scenarios that might effect a given project and not just consider 
								the "happy-path". This without doubt has saved many people many hours of future troubleshooting. Jon's dedication and 
								desire to help someone understand the "why" behind things also make him not just an invaluable resource but a teacher. 
								He will truly be missed."
							</p>
							<footer>
								Ann Wagner, Senior Director of Account Services, Cultural Care Au Pair
							</footer>
						</blockquote>
					  </div>
					</div>
				  
				  <div class="item">
					 <p style="height: 500px;">
						 </p>
					  <div class="carousel-caption">
						<blockquote>
							<p>
								"Jon is a true believer in nothing is impossible. Some people, faced with an uphill challenge, might stop and move 
								onto something else. But Jon always digs in and no matter how difficult the business rule or technical details, he is 
								excited and genuinely invested in solving the issue."
							</p>
							<footer>
								Sean McGonagle, Vice President Information Technologies, Cultural Care Au Pair
							</footer>
						</blockquote>
					  </div>
					</div>
				 
				  <div class="item">
					 <p style="height: 500px;">
						 </p>
					  <div class="carousel-caption">
						<blockquote>
							<p>
								"Who wouldn't want to hire you!?!?!?!"
							</p>
							<footer>	
								Jon's mom
							</footer>
						</blockquote>
					  </div>
					</div>
				  
				  <div class="item">
					  <p style="height: 500px;">
						 </p>
					  <div class="carousel-caption">
						<blockquote>
							<p>
								"Jon is my favorite team member, but not just on a personal level but because he never shies away from diving into a 
								big mess, learning by himself and fixing the issue - the right way. We need focus on quality and clean and simple solutions 
								and he is certainly one of the biggest and loudest advocate for that on our team."
							</p>
							<footer>
								Ines Cortes, Business Analyst, Cultural Care Au Pair
							</footer>
						</blockquote>
					  </div>
					</div>
				  
				  <div class="item">
					  <p style="height: 500px;">
						 </p>
					  <div class="carousel-caption">
						<blockquote>
							<p>
								"Eat. Then work. I.....LIKE IT!!!"
							</p>
							<footer>
								William Schatner, Minutes before eating my lunch
							</footer>
						</blockquote>
					  </div>
					</div>
				  
				  </div>
				
				  <!-- Controls -->
				  <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
					<span class="glyphicon glyphicon-chevron-left"></span>
				  </a>
				  <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
					<span class="glyphicon glyphicon-chevron-right"></span>
				  </a>
				</div>

     </div> <!-- /container -->
_END;
require "footer.php";
?>

