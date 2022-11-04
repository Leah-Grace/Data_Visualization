      google.charts.load('current', {'packages':['sankey']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addRows([
         [ "8", "Extremely satisfied", 3 ], [ "9", "Somewhat dissatisfied", 3 ], [ "10", "Extremely satisfied", 13 ], [ "7", "Somewhat dissatisfied", 3 ], [ "9", "Somewhat satisfied", 7 ], [ "9", "Extremely satisfied", 20 ], [ "9", "Extremely dissatisfied", 1 ], [ "10", "Extremely dissatisfied", 4 ], [ "10", "Extremely satisfied", 12 ], [ "9", "Somewhat satisfied", 6 ], [ "9", "Extremely satisfied", 19 ], [ "2", "N/A", 4 ], [ "3", "Extremely dissatisfied", 4 ], [ "0", "N/A", 8 ], [ "10", "Extremely dissatisfied", 3 ], [ "9", "Extremely satisfied", 18 ], [ "5", "N/A", 7 ], [ "3", "N/A", 7 ], [ "9", "Extremely satisfied", 17 ], [ "8", "Extremely satisfied", 2 ], [ "9", "Somewhat dissatisfied", 2 ], [ "10", "Extremely satisfied", 11 ], [ "7", "Somewhat dissatisfied", 2 ], [ "9", "Somewhat satisfied", 5 ], [ "9", "Extremely satisfied", 16 ], [ "9", "Extremely satisfied", 15 ], [ "10", "Extremely satisfied", 10 ], [ "10", "Somewhat dissatisfied", 4 ], [ "9", "Somewhat satisfied", 4 ], [ "9", "Somewhat dissatisfied", 1 ], [ "2", "N/A", 3 ], [ "3", "Extremely dissatisfied", 3 ], [ "0", "N/A", 7 ], [ "10", "Extremely satisfied", 9 ], [ "9", "Extremely satisfied", 14 ], [ "5", "N/A", 6 ], [ "3", "N/A", 6 ], [ "9", "Somewhat satisfied", 3 ], [ "8", "Extremely satisfied", 1 ], [ "10", "Somewhat dissatisfied", 3 ], [ "10", "Extremely satisfied", 8 ], [ "7", "Somewhat dissatisfied", 1 ], [ "9", "Extremely satisfied", 13 ], [ "9", "Extremely satisfied", 12 ], [ "10", "Extremely satisfied", 7 ], [ "10", "Extremely dissatisfied", 2 ], [ "10", "Somewhat dissatisfied", 2 ], [ "9", "Somewhat satisfied", 2 ], [ "9", "Extremely satisfied", 11 ], [ "2", "N/A", 2 ], [ "3", "Extremely dissatisfied", 2 ], [ "0", "N/A", 6 ], [ "10", "Extremely satisfied", 6 ], [ "9", "Extremely satisfied", 10 ], [ "5", "Somewhat dissatisfied", 1 ], [ "3", "N/A", 5 ], [ "9", "Extremely satisfied", 9 ], [ "0", "N/A", 5 ], [ "10", "Extremely satisfied", 5 ], [ "9", "Neutral", 1 ], [ "5", "N/A", 5 ], [ "3", "Somewhat dissatisfied", 1 ], [ "0", "N/A", 4 ], [ "10", "Extremely satisfied", 4 ], [ "9", "Extremely satisfied", 8 ], [ "5", "N/A", 4 ], [ "3", "N/A", 4 ], [ "9", "Extremely satisfied", 7 ], [ "2", "N/A", 1 ], [ "3", "Extremely dissatisfied", 1 ], [ "0", "N/A", 3 ], [ "10", "Extremely satisfied", 3 ], [ "9", "Extremely satisfied", 6 ], [ "5", "N/A", 3 ], [ "3", "N/A", 3 ], [ "9", "Extremely satisfied", 5 ], [ "9", "Extremely satisfied", 4 ], [ "9", "Extremely satisfied", 3 ], [ "10", "Extremely satisfied", 2 ], [ "10", "Extremely dissatisfied", 1 ], [ "10", "Somewhat dissatisfied", 1 ], [ "9", "Somewhat satisfied", 1 ], [ "0", "N/A", 2 ], [ "10", "Extremely satisfied", 1 ], [ "9", "Extremely satisfied", 2 ], [ "5", "N/A", 2 ], [ "3", "N/A", 2 ], [ "9", "Extremely satisfied", 1 ], [ "1", "N/A", 1 ], [ "7", "Somewhat satisfied", 1 ], [ "0", "N/A", 1 ], [ "2", "Extremely dissatisfied", 1 ], [ "3", "N/A", 1 ], [ "1", "Extremely dissatisfied", 1 ], [ "5", "N/A", 1 ], [ "8", "Somewhat satisfied", 1 ], [ "7", "Extremely satisfied", 1 ] 
        ]);

        // Sets chart options.
        var options = {
          width: 600,
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      }