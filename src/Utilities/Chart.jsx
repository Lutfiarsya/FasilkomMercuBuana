import { Pie } from "react-chartjs-2"
import 
{ Chart, ArcElement,
    Tooltip,
    Legend
}from "chart.js"

Chart.register(ArcElement,Tooltip, Legend);

const PieChart = () => {
    const selesai = [10,30,40,20]
    const total = [300, 200, 100, 120]
    let result = []
    for(let i = 0; i <= selesai.length; i++){
        result.push(Math.round((selesai[i] / total[i]) * 100))
    }

    return(
        <Pie
        data={{
          labels: ['MBKM', 'Tugas Akhir', 'Tugas Penelitian', 'MPTI'],
          datasets: [
            {
              data: result,
              backgroundColor : ['#ff6b6b', '#6a4c93' , '#4ecdc4' , '#ffe66d'],
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
                        font:{
                            size: 10,
                        },
                    },    
                }
            }
        }}
        width={200}
        height={200}
        
      />    
    )
}

export default PieChart;