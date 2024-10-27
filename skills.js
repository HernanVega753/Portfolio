const ctx = document.getElementById('myChart').getContext('2d');

// Datos del gráfico
const labels = [
    'Python',
    'Java',
    'JavaScript',
    'GdScript',
    'Git',
    'Docker',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'HTML',
    'CSS',
    'PHP'
];

// Aquí puedes definir el número de "porciones" para cada lenguaje. Por ejemplo, si consideras que todos tienen el mismo peso:
const data = Array(labels.length).fill(1); // Cada lenguaje tiene el mismo peso

const myChart = new Chart(ctx, {
    type: 'pie', // Tipo de gráfico
    data: {
        labels: labels,
        datasets: [{
            label: 'Habilidades',
            data: data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Gráfico de Habilidades'
            }
        }
    }
});
