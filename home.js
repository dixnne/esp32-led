new Chart(
    document.getElementById("power-month"),
    {
        type : 'line',
        data : {
            labels : [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
                    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ],
            datasets : [
                    {
                        data : [ 50, 88, 50, 45, 97,
                                80, 34, 56, 78, 80, 87, 93 ],
                        label : "2023",
                        borderColor : "#FF2E63",
                        fill : true
                    },
                    {
                        data : [ 23, 44, 22, 33, 45,
                                65, 65, 78, 54, 79, 82, 89 ],
                        label : "2022",
                        borderColor : "#08D9D6",
                        fill : true
                        } ]
        },
        options : {
            title : {
                display : true,
                text : 'Power Usage Percentage by Month'
            },
            scales : {
                x : {
                    grid : {
                        display : true,
                        color: "#252A3450",
                        lineWidth: 2
                    }
                },
                y : {
                    grid : {
                        display : true,
                        color: "#252A3450"
                    }
                }
            }
        }
});

var myChart = new Chart(document.getElementById("power-usage"), {
  type: 'pie',
  data: {
    labels: ['Energy Used', 'Energy Left'],
    datasets: [{
      label: 'Percentage',
      data: [79, 21],
      backgroundColor: [
        '#08D9D6',
        '#252A34'
      ],
      borderColor: [
        '#08D9D6',
        '#252A34'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,

  }
});