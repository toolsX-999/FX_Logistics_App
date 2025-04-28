// Define your data object
const dataRightPie = {
  // labels: [
  //   'Damaged',
  //   'Siezed    ',
  //   'Stopped  '
  // ],
  datasets: [{
    label: 'Shipments',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};

// Create the config for your pie chart
const configRightPie = {
  type: 'pie',
  data: dataRightPie,
};

// Render the chart in the canvas
const myPieChartRight = new Chart(
  document.getElementById('myPieChartRight'),
  configRightPie
);
