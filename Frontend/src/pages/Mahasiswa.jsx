import Navbar from "../Component/Navbar"
import KP from '../Assets/Icons Services/task-management (1).png'
import MBKM from '../Assets/Icons Services/project-management.png'
import TA from '../Assets/Icons Services/start-up.png'
import MPTI from '../Assets/Icons Services/file-managament.png'
import { Link, useNavigate } from "react-router-dom"
import Table from "../Component/TableMahasiswa/Table"
import { useState } from "react"

const MahasiswaPage = ({profile, home}) => {
const navigate = useNavigate()
const [services, setServices] = useState('MBKM')

const handleClick = (item) => {
    setServices(item)
}

const form = [
    {
        id: 1,
        image : KP,
        title : "Kerja Praktik",
        path : '/mahasiswa/form-MBKM'

    },
    {
        id: 2,
        image: MBKM,
        title: "Merdeka Belajar Kampus Merdeka - MBKM",
        path : '/mahasiswa/form-tugas-akhir'
    },
    {
        id: 3,
        image: TA,
        title: "Tugas Akhir",
        path : '/mahasiswa/form-MPTI'
    },
    {
        id: 4,
        image: MPTI,
        title: "Manajemen Project Teknologi Informasi - MPTI",
        path : '/mahasiswa/form-kerja-praktik'
    },
]



console.log(form.map(i => i.path))


const handleProfile = () => {
    navigate('/mahasiswa/profile')
}
    return(
        <div className="w-full flex flex-col font-['Poppins']">
            <Navbar username={profile} home={home}/>
            <div className="flex flex-col my-10">
                {/* Nama dan identitas mahasiswa */}
                <div className="relative flex flex-col m-auto w-[97%] h-40 bg-[--primary-color] rounded-md text-white">
                    <h1 className="text-5xl font-bold ml-4 mt-4">Luthfie Arsya Darmaputra</h1>
                    <h3 className="text-md italic ml-4">Teknik Informatika</h3>
                    <button className="absolute right-4 bottom-2" onClick={handleProfile}>Check Details</button>
                </div>
                <h1 className="ml-4 font-semibold text-3xl mt-10 text-[--primary-color]">Form Pengajuan</h1>
               <div className="flex items-center w-full justify-center">
                <div className="flex flex-row mt-2 w-[97%] h-56 items-center justify-center">
                    {form.map((items, index) => {
                        return(
                            <div className="w-[80%] h-[100px] items-center m-auto flex flex-col justify-center">
                            <div className="w-full flex items-center justify-center m-auto flex-col">
                             <div className="w-[290px]  bg-white flex flex-col justify-center items-center h-[200px] rounded-md shadow-[4px_4px_10px_-3px_black] hover:scale-110 hover:cursor-pointer transition-all transform hover:shadow-[6px_6px_12px_-10px_black]">
                                    <img
                                    src={items.image}
                                    width={120}
                                    height={120}
                                    />
                                <Link key={items.id} to={items.path} className="w-[250px] mt-2 h-[50px] flex items-center justify-center">
                                    <h2 className="text-center text-md font-semibold text-[--primary-color]">{items.title}</h2>
                                </Link>
                             </div>
                            </div>
                    </div>
                        )
                    })}
                </div>
                </div> 
                <div>
                    <h1 className="ml-4 font-semibold text-3xl mt-10 text-[--primary-color]">Status Pengajuan</h1>
                    <div className="w-[97%] m-auto border-b-2 border-gray-500 h-10">
                    <div className="w-[40%] mt-6 h-10 flex justify-between  flex-row items-center text-gray-500 font-regular border-gray-500">
                            {['MBKM', 'MPTI', 'Tugas Akhir', 'Kerja Praktik'].map((items) => {
                                return(
                                    <div className="flex flex-row text-center">
                                        <button onClick={() => handleClick(items)} type="button"
                                        className={`h-10 p-4 pb-1 relative  flex text-center items-center ${services === items ? `text-[--primary-color] border-b-2 border-[--primary-color]` : `border-gray-500`}`}    
                                        >{items}</button>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MahasiswaPage