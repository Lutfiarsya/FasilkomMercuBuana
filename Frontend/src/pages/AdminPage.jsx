import { useNavigate } from "react-router-dom"
import PieChart from "../Utilities/Chart"
import MBKM from '../Assets/classroom.png'
import MPTI from '../Assets/presentation.png'
import TA from '../Assets/student.png'
import TP from '../Assets/learning.png'
import RandomizeCount from "../Utilities/randomizeNumber"
import Sidebar from "../Component/Sidebar"
import { PrimaryButton } from "../Component/ButtonGroup"
import ChartByYear from "../Utilities/ChartByYear"



const form = [
    {
        id: 1,
        image : MBKM,
        title : "MBKM",
        total : 100

    },
    {
        id: 2,
        image: TA,
        title: "Tugas Akhir",
        total: 120
    },
    {
        id: 3,
        image: MPTI,
        title: "Caption Project",
        total: 90
    },
    {
        id: 4,
        image: TP,
        title: "Kerja Praktik",
        total: 30
    }
]





const AdminPage = () => {
const navigate = useNavigate()

const handleClick = () => {
    navigate('/admin/details')
}
    return(
        <div className="w-full font-['Poppins'] flex flex-row items-center h-[100vh] justify-center bg-gray-100">
            <Sidebar/>
            <div className="w-full h-full flex flex-col">
            <div className="w-[98%] flex flex-row justify-between items-center m-auto text-[--primary-color] relative">
                <h1 className="text-4xl font-semibold">Dashboard</h1>
            </div>
            {/* Container */}
            <div className="w-[98%] flex flex-col justify-between h-[100vh] m-auto">

                {/* Container - Total pengumpulan tugas mahasiswa */}
             <div className="flex flex-row items-center justify-between w-full mt-4">
                {form.map((items) => {
                    return(
                        <div className="w-60 h-[100px] bg-[--primary-color] shadow-[0px_0px_5px_-1px_black]  justify-between flex flex-col rounded-lg">
                            <div className="flex flex-row w-[90%] h-34 m-auto items-center">
                                <img
                                src={items.image}
                                width={35}
                                height={35}
                                />
                                <h2 className="ml-4 text-white text-md">{items.title}</h2>
                            </div>
                            <div className="flex flex-row w-[90%] m-auto text-white items-baseline">
                                <RandomizeCount target={items.total} duration={1000}/>
                            <p className="italic text-md ml-1">Mahasiswa</p>
                            </div>
                        </div>
                    )
                })}
             </div>
             <div className="w-full h-[90%] flex flex-row justify-between my-4">
                {/* Chart Data per periode */}
                <div className="w-[58%] rounded-md bg-white shadow-[0px_0px_5px_-1px_black] p-4 items-center flex justify-center">
                    <ChartByYear/>
                </div>
                {/* Container - Diagram */}
                <div className="w-[40%] p-2 flex items-center justify-center shadow-[0px_0px_5px_-1px_black] bg-[--primary-color] rounded-lg">
                    <PieChart/>
                </div>
            </div> 

            </div>
            </div>
        </div>
    )
}

export default AdminPage