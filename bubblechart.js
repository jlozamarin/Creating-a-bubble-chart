const ctx = document.getElementById('bubbleChart').getContext('2d');

new Chart(ctx, {
  type: 'bubble',
  data: {
    datasets: [
      {
        label: 'Financial Metrics',
        data: [
          { x: 100, y: 200, r: 10 },
          { x: 150, y: 300, r: 15 },
          { x: 200, y: 250, r: 12 },
          { x: 300, y: 400, r: 18 },
          { x: 400, y: 350, r: 20 }
        ],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)'
      }
    ]
  },
  options: {
    scales: {
      x: { title: { display: true, text: 'Expenses ($)' } },
      y: { title: { display: true, text: 'Profits ($)' } }
    }
  }
});
