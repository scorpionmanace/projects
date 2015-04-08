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
      function drawVisualization() {
        // Prepare the data
        var data; 
        
          var chart22, data2,chartx;

       var options2 = {
          
        };

        var serverData = $.ajax({
          type: "POST",
          url: '/routes/mainRouter.php',
          dataType: 'json',
          context: document.getElementById('dashboard'),
          success: function(serverData) {
            data = new google.visualization.DataTable(serverData);
            // Create a dashboard
            new google.visualization.Dashboard(document.getElementById('dashboard')).
                // Establish bindings, declaring the both the slider and the category
                // picker will drive both charts.
                bind([slider, categoryPicker], [pie, table]).
                // Draw the entire dashboard.
                draw(data);
                //chartx = new google.visualization.LineChart(document.getElementById('chart22'));
            //chartx.draw(data, options2);

            console.log(data);
            //console.log(data);
          }
        });

      
        // Define a slider control for the Age column.
        var slider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'control1',
          'options': {
            'filterColumnLabel': 'ValueInBillionDollars',
          'ui': {'labelStacking': 'vertical'}
          }
        });
      
        // Define a category picker control for the Gender column
        var categoryPicker = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'control2',
          'options': {
            'filterColumnLabel': 'Year',
            'ui': {
            'labelStacking': 'vertical',
              'allowTyping': false,
              'allowMultiple': false
            }
          }
        });
      
        // Define a Pie chart
        var pie = new google.visualization.ChartWrapper({
          'chartType': 'PieChart',
          'containerId': 'chart1',
          'options': {
            'width': 300,
            'height': 300,
            'legend': 'none',
            'title': 'Year vs Value in Billion dollars',
            'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
            'pieSliceText': 'label'
          },
          // Instruct the piechart to use colums 0 (Name) and 3 (Donuts Eaten)
          // from the 'data' DataTable.
          'view': {'columns': [0,2]}
        });

          var pie2 = new google.visualization.ChartWrapper({
          'chartType': 'PieChart',
          'containerId': 'chart4',
          'options': {
            'width': 300,
            'height': 300,
            'legend': 'none',
            'title': 'Year Vs Land Harvested',
            'chartArea': {'left': 15, 'top': 15, 'right': 0, 'bottom': 0},
            'pieSliceText': 'label'
          },
          // Instruct the piechart to use colums 0 (Name) and 3 (Donuts Eaten)
          // from the 'data' DataTable.
          'view': {'columns': [0,1]}
        });
          

      
        // Define a table
        var table = new google.visualization.ChartWrapper({
          'chartType': 'Table',
          'containerId': 'chart2',
          'options': {
            'width': '300px'
          }
        });
      
      }
      

      google.setOnLoadCallback(drawVisualization);
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
            <li><a href="work.html">Yearwise Analysis</a></li>
            <li><a href="about.html">Countywise Analysis</a></li>
            <li><a href="blog.html">Year Vs County</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>


	
	

	<div id="dashboard">
      

      <table>
        <tr style='vertical-align: top'>
          <td style='width: 600px; font-size: 0.9em;'>
            <div id="control1"></div>
            <div id="control2"></div>
            <div id="control3"></div>
             <div id="control4"></div>

          </td>
          <td style='width: 1000px'>
            <div style="float: left;" id="chart1"></div>
            <div style="float: left;" id="chart2"></div>
            <div style="float: left;" id="chart3"></div>
            <div style="float: left;" id="chart4"></div>
          </td>
        </tr>
      </table>

      
    </div>
    
	<!-- +++++ Information Section +++++ -->
	
	
		
	</div><!-- /container -->
	
	
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
					<h4>About Agro-Visualizer</h4>
					<p>AgroVisualizer is a data visualizer app to check California agriculture data and get statistical analysis for past 7 years.</p>
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
