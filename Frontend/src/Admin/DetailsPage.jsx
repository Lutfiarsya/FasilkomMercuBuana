import Navbar from "../Component/Navbar"
import RandomizeCount from "../Utilities/randomizeNumber"
import MBKM from '../Assets/classroom.png'
import MPTI from '../Assets/presentation.png'
import TA from '../Assets/student.png'
import TP from '../Assets/learning.png'
import { useState } from "react"
import Input from "../Utilities/input"
import Table from "../Component/TableMahasiswa/Table"


const form = [
    {
        id: 1,
        image : MBKM,
        title : "Merdeka Belajar Kampus Merdeka - MBKM",
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
        title: "Manajemen Proyek Teknologi Informasi - MPTI",
        total: 90
    },
    {
        id: 4,
        image: TP,
        title: "Tugas Penelitian",
        total: 30
    }
]


const DetailsPage = () => {
const [services, setServices] = useState('MBKM');



const handleClick = (item) => {
    setServices(item)
}



    return(
        <div className="font-['Poppins']">
            <Navbar/>
            <div className="w-full h-[200px] flex flex-col items-center justify-between mt-8">
                <div className="w-full flex flex-row justify-evenly items-center">
                    {form.map((items) => {
                            return(
                            <div className="w-[300px] h-[150px] bg-[--primary-color] shadow-[4px_4px_5px_-4px_black] justify-between flex flex-col rounded-lg">
                            <div className="flex mt-4 flex-row w-[97%] h-34 items-center">
                                <img
                                src={items.image}
                                width={50}
                                height={50}
                                className="ml-4"
                                />
                                <h2 className="ml-10 text-white text-sm">{items.title}</h2>
                            </div>
                            <div className="ml-4 mb-4 text-white ">
                                <div className="flex flex-row text-white font-semibold">
                                    <RandomizeCount target={items.total} duration={1000}/> 
                                </div>
                            <p className="italic text-sm">Mahasiswa</p>
                            </div>
                        </div>
                    )
                    })}
                </div>
                <div className="mt-6 w-full flex flex-col justify-center items-center">
                    <div className="w-[97%] h-10 flex flex-row justify-between items-center border-b-2 relative border-gray-500">
                        <div className="w-[40%]  h-10 flex justify-between  flex-row items-center text-gray-500 font-regular border-gray-500">
                            {['MBKM', 'MPTI', 'Tugas Akhir', 'Tugas Penelitian'].map((items) => {
                                return(
                                    <div className="flex flex-row text-center">
                                        <button onClick={() => handleClick(items)} type="button"
                                        className={`h-10 p-4 pb-1 relative  flex text-center items-center ${services === items ? `text-[--primary-color] border-b-2 border-[--primary-color]` : `border-gray-500`}`}    
                                        >{items}</button>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="w-[40%] justify-end flex">
                            <Input/>
                        </div>
                    </div>
                    <div className="w-[97%] bg-green-300 m-auto items-center font-regular flex justify-center mt-6">
                        <Table category={services}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailsPage