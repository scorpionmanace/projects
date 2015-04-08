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

         var serverData = $.ajax({
          type: "POST",
          url: '/routes/cropHomeRouter.php',
          dataType: 'json',
          context: document.getElementById('dashboard'),
          success: function(serverData) {
            data = new google.visualization.DataTable(serverData);
            // Create a dashboard
           var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard')).
          // Configure the slider to affect the bar chart
          bind(slider, barChart).
          // Draw the dashboard
          draw(data);
                //chartx = new google.visualization.LineChart(document.getElementById('chart22'));
            //chartx.draw(data, options2);

            console.log(data);
            //console.log(data);
          }
        });
      
        // Define a NumberRangeFilter slider control for the 'Age' column.
        var slider = new google.visualization.ControlWrapper({
          'controlType': 'NumberRangeFilter',
          'containerId': 'control1',
          'options': {
            'filterColumnLabel': 'Value_in_millions_of_dollars',
            'minValue': 0,
            'maxValue': 20000
          }
        });
      
        // Define a bar chart
        var barChart = new google.visualization.ChartWrapper({
          'chartType': 'BarChart',
          'containerId': 'chart1',
          'options': {
            'width': 1000,
            'height': 1000,
            'hAxis': {'minValue': 0, 'maxValue': 20000},
            'chartArea': {top: 0, right: 0, bottom: 0}
          }
        });
      
        // Create the dashboard.
        var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard')).
          // Configure the slider to affect the bar chart
          bind(slider, barChart).
          // Draw the dashboard
          draw(data);
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
            <li><a href="yearVsProd2.php">Yearly Analysis</a></li>
            <li><a href="predictProduction.php">Production Prediction</a></li>
            <li><a href="predictValue.php">Revenue Prediction</a></li>
            <li><a href="contact.php">Contact</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>


      <h1 style="color:blue">Analysis of top 20 crops on basis  of Value(in million dollars)</h1>
    <h3>Here is summary of total value of crops over past years  </h3>
    <br>
    <br>
  
    <div id="dashboard">
      <table>
        <tr style='vertical-align: top'>
          <td style='width: 600px; font-size: 0.9em;'>
            <div id="control1"></div>
            <div id="control2"></div>
            <div id="control3"></div>
          </td>
          <td style='width: 600px'>
            <div style="float: left;" id="chart1"></div>
            
          </td>
        </tr>
      </table>
    </div>
    
  <!-- +++++ Information Section +++++ -->
  
  
   
  <div class="row mt centered">

    <h2 style="color:purple">Please select for detailed analysis</h2>
      <br>
      <br>

      <!--div class="col-lg-4">
        <a class="zoom green" href="cropBubble.php"><img class="img-responsive" height="320" width="320" src="images/chartBubble.jpg" alt="" /></a>
        <p>Select to Visualize top 20 crops in detail </p>
      </div-->
     
      <div class="col-lg-4">
        <a class="zoom green" href="mapText.php"><img class="img-responsive" height="320" width="320" src="images/CA_map.png" alt="" /></a>
        <p>Select to check harvested acres for various county for Crop Production</p>
      </div>
    </div><!-- /row -->
  
  
  <!-- +++++ Footer Section +++++ -->
  
  <div id="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <h4>Copyright</h4>
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
