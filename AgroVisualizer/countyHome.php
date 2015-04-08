<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="shortcut icon" href="../../docs-assets/ico/favicon.png">

    <title>Agro-Visualizer </title>

    <!-- Bootstrap core CSS -->
    <link href="styles/bootstrap.css" rel="stylesheet">


    <!-- Custom styles for this template -->
    <link href="styles/main.css" rel="stylesheet">

    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>

   <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>
      Google Visualization API Sample
    </title>
    <script type="text/javascript" src="//www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load('visualization', '1', {packages: ['corechart']});
    </script>
    <script type="text/javascript">
      function drawVisualization() {
        // Create and populate the data table.
       

        var options={title:"County and revenue generated over past 7 years",
                  isStacked:"true",
                  width:1350, height:900,
                  vAxis: {title: "Value in million of dollars"},
                  hAxis: {title: "County of California"}};

      var serverData = $.ajax({
          url: '/routes/countyHomeRouter.php',
          dataType: 'json',
          context: document.getElementById('visualization'),
          success: function(serverData) {
            data = new google.visualization.DataTable(serverData);
            chart = new google.visualization.BarChart(this);
            chart.draw(data, options);
          }
        });


        // Create and draw the visualization.
        
      }
      

      google.setOnLoadCallback(drawVisualization);
    </script>


  </head>
  <body>

  <!--body background="images/background/background_county.jpg"-->


    <!-- Static navbar -->
    <div class="navbar navbar-inverse navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="about.php">Agro Visualizer</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav navbar-right">
            <li><a href="yearVsProd2.php">Yearly Analysis</a></li>
            <li><a href="predictProduction.php">Production Prediction</a></li>
            <li><a href="predictValue.php">Revenue Prediction</a></li>
            <li><a href="contact.php">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>


	  	<h1 style="color:blue">Countywise Analysis for California</h1>
  	<h3>List of top 10 county on basis of Values  </h3>
  	<br>
  	<br>
	
<div id="visualization" style="width: 900px; height: 600px;"></div>
    
	<!-- +++++ Information Section +++++ -->
	
	
    <br>
    <br><br>
    <br><br>
    <br><br>
    <br><br>
    <br>
<br>
    <br><br>
    <br><br>
    <br>
    
	<div class="row mt centered">

    <h2 style="color:purple">For detailed analysis on county click here</h2>
      <br>
    

      <div class="col-lg-4">
        <a class="zoom green" href="countyBubble.php"><img class="img-responsive" src="images/cal_county.jpg" alt="" height="320" width="320" /></a>
        <p>Click for detailed countywise anaysis over past years</p>
      </div>
      <div class="col-lg-4">
        <a class="zoom green" href="countyMap.php"><img class="img-responsive" src="images/maps_cal.png" alt="" height="320" width="320" /></a>
        <p>Click to see county details on map</p>

      </div>
     
      <!-- /row -->
	<br>
  <br>
	<br>
    <br>
  <br>
  <br>
    <br>
  <br>
  <br>
    <br>
  <br>
  <br>
    <br>
  <br>
  <br>
  <br>
  <br>
    <br>
  <br>
  <br>
	<!-- +++++ Footer Section +++++ -->
	
	<div id="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4">
					<h4>Copright</h4>
					<p>
						CMPE-272, SJSU
					</p>
				</div><!-- /col-lg-4 -->
				
				<div class="col-lg-4">
					<h4>My Links</h4>
					<p>
						
						<a href="http://twitter.com">Follow us on Twitter</a><br/>
						<a href="http://facebook.com">Like us on Facebook</a>
					</p>
				</div><!-- /col-lg-4 -->
				
				<div class="col-lg-4">
					<h4>About AgroVisualizer</h4>
          <p>AgroVisualizer shows the  agricultural data of California and its comparison in terms of various attributes which is useful to 
different domain of people who can make use of these representations for analysis and to foresee future trends of production and 
revenue from various crops in various county's</p>
				</div><!-- /col-lg-4 -->
			
			</div>
		
		</div>
	</div>
	

    <!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->
    <script src="bootstrap.min.js"></script>
  </body>
</html>
