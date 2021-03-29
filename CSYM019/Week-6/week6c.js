function myClickEvent() { 




var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ['Jayanthi', 'subramaniam', 'kousik', 'Jayasri', 'Dhakshan', 'krishnan', 'Dhanushan'],
        datasets: [{
            label: 'My Family',  

            //backgroundColor: 'rgb(255, 99, 132)',
            //borderColor: 'rgb(255, 99, 132)',
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(233, 123, 56, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(233, 123, 56, 0.2)'
            ],

            data: [51,56,39,29,1.10,12,3]
        }]
    },
    
    // Configuration options go here
    options: {layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        }
        } 
        
        
});
}
function myLoadFunction() 
{
var element = document.getElementById('circle');
element.addEventListener('click', myClickEvent); 
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
