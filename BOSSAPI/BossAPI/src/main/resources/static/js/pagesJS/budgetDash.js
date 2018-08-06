
var values = [194498, 65267]
var values2 = [94498,15267]

new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Obligated", "Remaining"],
      datasets: [{
        label: "Current Status",
        backgroundColor: ["rgba(0, 102, 51, 0.74)", "rgba(255, 98, 0, 0.74)"],
        data: [194498,65267]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Lab Budget Status YTD'
      }
    }
});

new Chart(document.getElementById("pie-chart2"), {
    type: 'pie',
    data: {
      labels: ["Obligated", "Remaining"],
      datasets: [{
        label: "Current Status",
        backgroundColor: ["rgba(0, 102, 51, 0.74)", "rgba(255, 98, 0, 0.74)"],
        data: [94498,15267]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Program Budget Status YTD'
      }
    }
});