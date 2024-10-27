// Datos de aprendizaje para cada lenguaje
const data = {
    Python: {
        aprendido: 80,
        noAprendido: 20 // 100 - 80
    },
    Java: {
        aprendido: 60,
        noAprendido: 40 // 100 - 60
    },
    JavaScript: {
        aprendido: 70,
        noAprendido: 30 // 100 - 70
    }
};

// Función para crear el gráfico de torta
function createPieChart(ctx, labels, dataValues) {
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: dataValues,
                backgroundColor: [
                    'rgba(52, 152, 219, 0.6)', // Color para Aprendido
                    'rgba(231, 76, 60, 0.6)'   // Color para No Aprendido
                ],
                borderColor: [
                    'rgba(52, 152, 219, 1)',
                    'rgba(231, 76, 60, 1)'
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
                    text: `Porcentaje de Aprendizaje`
                }
            }
        }
    });
}

// Crear los gráficos para cada lenguaje
createPieChart(document.getElementById('pythonChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.Python.aprendido, data.Python.noAprendido]);
createPieChart(document.getElementById('javaChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.Java.aprendido, data.Java.noAprendido]);
createPieChart(document.getElementById('jsChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('htmlChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('cssChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('phpChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('mongoChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('mysqlChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('psqlChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('godotChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('dockerChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);
createPieChart(document.getElementById('gitChart').getContext('2d'), ['Aprendido', 'No Aprendido'], [data.JavaScript.aprendido, data.JavaScript.noAprendido]);