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
import { ArrowDown, ArrowUp } from "@phosphor-icons/react"



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





const Dashboard = ({isSidebar}) => {
    console.log(isSidebar)
    return(
        <div className="w-full font-['Poppins'] flex flex-row items-center h-[98vh] justify-center">
            <div className="w-full h-full flex flex-col">
            <div className="w-[98%] flex flex-row justify-between items-center m-auto text-[--primary-color] relative">
                <h1 className="text-4xl font-semibold">Dashboard</h1>
            </div>
            {/* Container */}
            <div className="w-[98%] flex flex-col justify-between h-full m-auto">

                {/* Container - Total pengumpulan tugas mahasiswa */}
             <div className="flex flex-row items-center justify-between w-full mt-4">
                {form.map((items) => {
                    return(
                        <div className={`${isSidebar ? 'w-64' : 'w-[280px]'} justify-between  transition-all duration-300 h-[100px] bg-[--primary-color] shadow-[0px_0px_5px_-1px_black]   flex flex-col rounded-lg`}>
                            <div className="flex flex-row w-[90%] h-34 m-auto items-center">
                                <img
                                src={items.image}
                                width={35}
                                height={35}
                                />
                                <h2 className="ml-4 text-white text-md">{items.title}</h2>
                            </div>
                            <div className="flex flex-row w-[90%] m-auto text-white items-baseline">
                                <RandomizeCount target={items.total} duration={1000} className={'font-semibold text-4xl'}/>
                            <p className="italic text-md ml-1">Mahasiswa</p>
                            </div>
                        </div>
                    )
                })}
             </div>
             <div className="w-full h-full flex flex-row justify-between mt-4">
                {/* Chart Data per periode */}
                <div className={` ${isSidebar ? "w-[70%]" : "w-[73%]"} transition-all duration-300 h-full rounded-md bg-white shadow-[0px_0px_5px_-1px_black] p-4 items-center flex justify-center`}>
                    <ChartByYear/>
                </div>
                {/* Container - Diagram */}
                <div className="flex-col flex justify-between">
                <div className="w-[300px] h-[300px] py-4 flex flex-col items-center justify-center shadow-[0px_0px_5px_-1px_black] bg-white rounded-lg">
                    <PieChart/>
                </div>

                {/* Plannya lebih enak dibikin mapping */}
                <div className="font-['Lexend'] p-2 text-[--primary-color] w-[300px] grid grid-cols-2 h-[140px] rounded-md bg-white shadow-[0px_0px_5px_-1px_black]">
                    <div className=" w-full flex flex-col p-1 border-r border-b">
                        <p className="text-sm">Riset</p>
                        <div className="flex flex-row w-full justify-between items-center">
                        <h2 className="text-[--primary-color]"><RandomizeCount target={200} duration={1000} className={'text-2xl font-regular'}/></h2>
                        <div className="w-10 h-6 rounded-lg bg-white text-lime-400 items-center flex justify-center mx-2 flex-row shadow-[0px_0px_5px_-1px_black]">
                            <ArrowUp size={10} weight="bold"/>
                            <p className="text-[13px]">2%</p>
                        </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col p-1 border-r border-b">
                        <p className="text-sm">Aplikatif</p>
                        <div className="flex flex-row w-full justify-between items-center">
                        <h2 className="text-[--primary-color]"><RandomizeCount target={74} duration={1000} className={'text-2xl font-regular'}/></h2>
                        <div className="w-10 h-6 rounded-lg bg-white text-lime-400 items-center flex justify-center mx-2 flex-row shadow-[0px_0px_5px_-1px_black]">
                            <ArrowUp size={10} weight="bold"/>
                            <p className="text-[13px]">5%</p>
                        </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col p-1 border-r">
                        <p className="text-sm">Publikasi Ilmiah</p>
                        <div className="flex flex-row w-full justify-between items-center">
                        <h2 className="text-[--primary-color]"><RandomizeCount target={120} duration={1000} className={'text-2xl font-regular'}/></h2>
                        <div className="w-10 h-6 rounded-lg bg-white text-red-400 items-center flex justify-center mx-2 flex-row shadow-[0px_0px_5px_-1px_black]">
                            <ArrowDown size={10} weight="bold"/>
                            <p className="text-[13px]">12%</p>
                        </div>
                        </div>
                    </div>
                    <div className=" w-full flex flex-col p-1">
                        <p className="text-sm">Media Ilmiah</p>
                        <div className="flex flex-row w-full justify-between items-center">
                        <h2 className="text-[--primary-color]"><RandomizeCount target={90} duration={1000} className={'text-2xl font-regular'}/></h2>
                        <div className="w-10 h-6 rounded-lg bg-white text-lime-400 items-center flex justify-center mx-2 flex-row shadow-[0px_0px_5px_-1px_black]">
                            <ArrowUp size={10} weight="bold"/>
                            <p className="text-[13px]">2%</p>
                        </div>
                        </div>
                    </div>
                </div>
                </div>
            </div> 

            </div>
            </div>
        </div>
    )
}

export default Dashboard