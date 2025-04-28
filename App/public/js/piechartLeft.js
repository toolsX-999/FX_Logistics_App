// Define your data object
const dataLeftPie = {
  labels: [
    'Collected',
    'In Transit',
    'Delivered'
  ],
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
const configLeftPie = {
  type: 'doughnut',
  data: dataLeftPie,
};

// Render the chart in the canvas
const myPieChartLeft = new Chart(
  document.getElementById('myPieChartLeft'),
  configLeftPie
);
