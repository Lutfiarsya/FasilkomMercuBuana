import { Line } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler)
const ChartByYear = () => {
    return(
        <Line
            data={{
                labels:[2024, 2025, 2026, 2027],
                datasets:[{
                    label: 'Student Independent',
                    data:[51, 24, 74, 42],
                    fill: true,
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.1)',
                    tension: 0.5,
                    pointStyle: false,
                },
                {
                    label: 'Magang Mandiri',
                    data:[14, 24, 65, 22],
                    fill: true,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    tension: 0.5,
                    pointStyle: false
                },
                {
                    label: 'KKN',
                    data:[19, 14, 6, 12],
                    fill: true,
                    borderColor: '#b7ff00',
                    backgroundColor: 'rgba(183, 255, 0, 0.2)',
                    tension: 0.5,
                    pointStyle: false
                }]
            }}
            options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins:{
                    legend: {
                        position: 'bottom',
                        labels:{
                            color: '#003E7B',
                            font: {size: 12},
                            boxWidth: 10,
                            boxHeight: 10
                        }
                    },
                    title: {
                        text: 'Data Mahasiswa Teknik Informatika Program MBKM',
                        font: {size: 18},
                        color: '#003E7B'
                    },
                    datalabels:{
                        display: false
                    }
                },
            }}
        />
    )
}

export default ChartByYear