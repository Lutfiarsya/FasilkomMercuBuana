import { Pie } from "react-chartjs-2"
import ChartDataLabels from 'chartjs-plugin-datalabels'
import 
{ Chart, ArcElement,
    Tooltip,
    Legend
}from "chart.js"

Chart.register(ArcElement,Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
    const selesai = [10, 30, 40, 20]
    const total = [300, 200, 100, 120]
    let result = []
    for(let i = 0; i <= selesai.length; i++){
        result.push(Math.round((selesai[i] / total[i]) * 100))
    }

    // mapping dan filter dengan tujuan memvalidasi hanya memberikan output yang ada nilainya, maka nilai seperti null,undfined dll tidak akan teroutput

    //Fungsi isNaN() digunakan untuk memeriksa apakah suatu nilai adalah NaN (Not a Number) atau bukan. Namun, ada beberapa hal penting yang perlu dipahami saat menggunakan fungsi ini, terutama karena perilakunya bisa sedikit membingungkan.
    result = result.map((value) => {
        return isNaN(Number(value)) || value === null || typeof value === 'undefined' ? null : Number(value)
    }).filter((value) => value !== null)

    return(
        <Pie
        data={{
          labels: ['MBKM', 'Tugas Akhir', 'Kerja Praktik', 'MPTI'],
          datasets: [
            {
              data: result,
              backgroundColor : ['#ff6b6b', '#6a4c93' , '#4ecdc4' , '#ffe66d'],
              borderWidth: 0
            },
          ],
        }}
        options={{
            plugins:{
                legend:{
                    display: true,
                    position: 'bottom',
                    labels:{
                        usePointStyle: true, //ini ngubah jadi titik
                        color: 'white',
                        boxHeight: 15,
                        boxWidth: 15,
                        padding: 25,
                        font:{
                            size: 10,
                        },
                    },    
                },
                tooltip:{
                    callbacks:{
                        label: function(content){
                            const value = content.raw  // mengambil value dari data
                            return ` ${value}%` //supaya dapat mengkombinasi antar int dan string
                        }
                    }
                },
                datalabels:{
                    color: 'white',
                    font:{
                        size: 14,
                        weight: 'bold'
                    },
                    formatter: (value) => `${value}%` //data labels untuk memunculkan value dari result pada chart
                }
            },
        }}
        width={200}
        height={200}
      />    
    )
}

export default PieChart;