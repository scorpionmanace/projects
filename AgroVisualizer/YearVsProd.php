<html>
  <head>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>
    <script type="text/javascript" src="https://www.google.com/jsapi"></script>

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
          url: '/routes/yrvsprodRouter.php',
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
    <div id="chart22" style="width: 900px; height: 500px;"></div>
  </body>
</html>