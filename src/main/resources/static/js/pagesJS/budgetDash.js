new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
        labels: ["Obligated", "Remaining"],
        datasets: [{
                label: "Current Status",
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [194498, 65267]
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
                backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
                data: [94498, 15267]
            }]
    },
    options: {
        title: {
            display: true,
            text: 'Program Budget Status YTD'
        }
    }
});