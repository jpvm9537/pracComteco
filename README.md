# pracComteco
practica empresarial en comteco, desarrollo de una interfaz web para planilla inicial analista soporte, planilla de datos historicos


useEffect(() => {
        // Calcula la cantidad de datos por mes
        const dataPorMesCalculada = dataTecnico.reduce((acc, data) => {
            const mes = new Date(data.created_at).getMonth(); // Obtiene el mes (0-11)
            acc[mes] = (acc[mes] || 0) + 1; // Incrementa la cantidad de datos para el mes
            return acc;
        }, []);

        // Convierte el objeto a un array para Chart.js
        setDataPorMes(Object.values(dataPorMesCalculada));
    }, [dataTecnico]);

    const meses = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const midata = {
        labels: meses,
        datasets: [
            {
                label: 'Cantidad de Datos',
                data: dataPorMes,
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    }; 
