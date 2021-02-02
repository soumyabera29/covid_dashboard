function BuildChart(labels, values, values2, values3, chartTitle, chartTitle2, chartTitle3) {
  var data = {
    labels: labels,
    datasets: [{
      data: values,
      fill: false,
      label: chartTitle,
      lineTension: 0.1,
      backgroundColor: '#a41c1c',
      borderColor: "#a41c1cc9",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorder: 'none',
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHitRadius: 10,
      pointRadius: 0.2,
    },
    {
      data: values2,
      fill: false,
      lineTension: 0.1,
      label: chartTitle2,
      backgroundColor: "rgb(61, 60, 60)",
      borderColor: "rgb(61, 60, 60)",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorder: 'none',
      pointBackgroundColor: 'rgb(61, 60, 60)',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHitRadius: 10,
      pointRadius: 0.2,
    },
    {
      data: values3,
      fill: false,
      lineTension: 0.1,
      label: chartTitle3,
      backgroundColor: "#6d9a2d",
      borderColor: "#6d9a2dc9",
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorder: 'none',
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHitRadius: 10,
      pointRadius: 0.2,
    }]
  };
  var ctx = document.getElementById("myChart").getContext('2d');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: true, // Instruct chart JS to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behavior of full-width/height 
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Date'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Population'
          }
        }]
      },
    }
  });
  return myChart;
}
var labels = new Array();
var values = new Array();
var values2 = new Array();
var values3 = new Array();
fetch("https://corona-api.com/timeline")
  .then(response => response.json())
  .then(rsp => {
    rsp.data.forEach(element => {
      labels.push(element.date);
      values.push(element.deaths);
      values2.push(element.confirmed);
      values3.push(element.recovered);
    })
    labels.reverse();
    values.reverse();
    values2.reverse();    
    values3.reverse();
  })
BuildChart(labels, values, values2, values3, "Death", "Confirmed", "Recovered");
let interval2 = 7200000;
setInterval(BuildChart, interval2); 