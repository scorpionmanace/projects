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



    <script type="text/javascript" src="//www.google.com/jsapi"></script>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript">
      google.load('visualization', '1.1', {packages: ['controls']});
    </script>
    




   <script type="text/javascript">

      function drawChart() {

         var chart, data;

        var options2 = {
          backgroundColor: {stroke: '#000', strokeWidth: 4, fill: '#bbb'},
          curveType: 'function',
          hAxis: {title: 'Year', titleTextStyle: {fontSize: 16}},
          isStacked: true,
          series: {1: {targetAxisIndex: 1, type: 'line'}},
          seriesType: 'bars',
          title: 'Year Vs Production vs Land harvested',
          titleTextStyle: {fontSize: 18},
          tooltip: {showColorCode: true},
          vAxes: [
            {title: 'Land harvested (in thousands of Hectares)', titleTextStyle: {fontSize: 16}},
            {title: 'Total value of Produce (in Millions of dollars)', titleTextStyle: {fontSize: 16}}
          ]
        };

        var serverData2 = $.ajax({
          url: '/routes/Y1Router.php',
          dataType: 'json',
          context: document.getElementById('chart22'),
          success: function(serverData) {
            data2 = new google.visualization.DataTable(serverData);
            chart22 = new google.visualization.ComboChart(this);
            chart22.draw(data2, options2);

            console.log(data2);
          }
        });

        

        
        

      }

      google.load('visualization', '1.0', {
        'packages': ['corechart'], 
        'callback': drawChart
      });

    </script>



  </head>

  <body>


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


	  	<h1 style="color:blue">Yearly Analysis</h1>
  	<h3>Here is summary of total production of crops over these past years  </h3>
  	<br>
  	<br>
	

	<div id="chart22" style="width: 900px; height: 500px;"></div>  
	<!-- +++++ Information Section +++++ -->
	
	
    <br>
	<div class="row mt centered">

    <h2 style="color:purple">Please select for detailed analysis</h2>
      <br>
      <br>

      <div class="col-lg-4">
        <a class="zoom green" href="farmerCropBubble.php"><img class="img-responsive" height="320" width="320" src="images/portfolio/port01.jpg" alt="" /></a>
        <p>Select for analysis on top 20 crops</p>
      </div>
     
      <div class="col-lg-4">
        <a class="zoom green" href="mapText.php"><img class="img-responsive" height="320" width="320" src="images/portfolio/port03.jpg" alt="" /></a>
        <p>Click to check details on map</p>
      </div>
    </div><!-- /row -->
	
	
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
