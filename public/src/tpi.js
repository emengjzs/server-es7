$.ajax({
    type: 'GET',
    url: 'api/tpi',
    data: {
        from: new Date("2016-08-01 00:00:00").getTime() / 1000,
        to: new Date("2016-08-08 00:00:00").getTime() /1000
    }
}).then(data => {
    const ctx = document.getElementById("chart");
    
    const scatterChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'TPI',
                data: data.map((item, i) => ({ x: i, y: item })),
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    type: 'linear',
                    position: 'bottom'
                }]
            }
        }
    });
});