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
     
    <script type='text/javascript'>
     google.load('visualization', '1', {'packages': ['geochart']});
     google.setOnLoadCallback(drawRegionsMap);
     var chart, data;
      function drawRegionsMap() {




        var options = {
        region: 'US-CA',
        resolution:'provinces',
        displayMode: 'text',
        colorAxis: {colors: ['green', 'blue']},
        magnifyingGlass: { enable:true , zoomFactor:1000}
      };


       var serverData = $.ajax({
          url: '/routes/scatter.php',
          dataType: 'json',
          context: document.getElementById('chart_div'),
          success: function(serverData) {
            data = new google.visualization.DataTable(serverData);
            chart = new google.visualization.GeoChart(document.getElementById('chart_div'));
            chart.draw(data, options);

          }
        });






    };

    
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


      <h1 style="color:blue">Harvested acres for various county</h1>
    <h3>Here is summary of harvested acres for various county, color and size of text represents Harvested acres </h3>
    <br>
    <br>
  
    <div id="chart_div" style="width: 900px; height: 500px;"></div>
    
  <!-- +++++ Information Section +++++ -->
  
  
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
