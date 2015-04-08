

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title>
      Agro Visualizer
    </title>
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
  <body style="font-family: Arial;border: 0 none;">
    
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
          <a href="/YearVsProd.php">Year Vs Prod</a>

  </body>
</html>
​