import Navbar from "../Component/Navbar"
import KP from '../Assets/Icons Services/KPIcon.png'
import MBKM from '../Assets/Icons Services/project-management.png'
import TA from '../Assets/Icons Services/start-up.png'
import CP from '../Assets/Icons Services/file-managament.png'
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Button from "../Component/Button"
import { ThirdButton } from "../Component/ButtonGroup"
import BimbinganPage from "../Component/Bimbingan"

const MahasiswaPage = ({profile, home}) => {
const navigate = useNavigate()
const [services, setServices] = useState('MBKM')
const [bimbingan,setBimbingan] = useState(false)

const handleClick = (item) => {
    setServices(item)
}

const form = [
    {
        id: 1,
        image : KP,
        title : "Kerja Praktik",
        path : '/mahasiswa/form-kerja-praktik'

    },
    {
        id: 2,
        image: MBKM,
        title: "Merdeka Belajar Kampus Merdeka - MBKM",
        path : '/mahasiswa/form-mbkm'
    },
    {
        id: 3,
        image: TA,
        title: "Tugas Akhir",
        path : '/mahasiswa/form-tugas-akhir'
    },
    {
        id: 4,
        image: CP,
        title: "Caption Project",
        path : '/mahasiswa/form-caption-project'
    },
]


const data = [
{
    id: 1,
    program: 'Merdeka Belajar kampus Merdeka',
    Dosen: "Dr.Atma Kusuma M.KOM",
    status: "Berhasil",
    bimbingan: true
},
{
    id: 2,
    program: 'Caption Project',
    Dosen: "Dr.Atma Kusuma M.KOM",
    status: "Berhasil",
    bimbingan: true
},
{
    id: 3,
    program: 'Tugas Akhir',
    Dosen: "Dr.Atma Kusuma M.KOM",
    status: "Berhasil",
    bimbingan: true
},
{
    id: 4,
    program: 'Kerja Praktik',
    Dosen: "Dr.Atma Kusuma M.KOM",
    status: "Berhasil",
    bimbingan: true
},

]





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
                                <Link key={items.id} to={items.path}>
                                    <div className="w-full flex items-center justify-center m-auto flex-col">
                                    <div className="w-[290px]  bg-white flex flex-col justify-center items-center h-[200px] rounded-md shadow-[4px_4px_10px_-3px_black] hover:scale-110 hover:cursor-pointer transition-all transform hover:shadow-[6px_6px_12px_-10px_black]">
                                            <img
                                            src={items.image}
                                            width={120}
                                            height={120}
                                            />
                                        <div className="w-[250px] mt-2 h-[50px] flex items-center justify-center">
                                            <h2 className="text-center text-md font-semibold text-[--primary-color]">{items.title}</h2>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                    </div>
                        )
                    })}
                </div>
                </div> 
                    <h1 className="ml-4 font-semibold text-3xl mt-10 text-[--primary-color]">Status Pengajuan</h1>
                <div className="flex items-center justify-center flex-col">
                    <div className="relative w-[97%] items-center flex justify-center bg-green-400 max-h-[280px] mt-6 overflow-y-auto border border-gray-300">
                        <table className="w-full table-auto border-collapse  text-white text-center font-['Poppins'] shadow-[4px_4px_5px_-4px_black]">
                            <thead>
                                <tr className="bg-[--primary-color] h-12 sticky top-0 z-10 text-white">
                                    <th className="border-x-1 border-white">Jenis Program</th>
                                    <th>Dosen Pembimbing</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                    </thead>
                    <tbody className="text-center">
                    {data?.map((items) => {
                        return(
                        <tr key={items.id} className="bg-white text-black h-12 border-t">
                            <td>{items.program}</td>
                            <td>{items.Dosen}</td>
                            <td>{items.status}</td>
                            <td><ThirdButton text={'Bimbingan'} functionButton={(e) => setBimbingan(true)}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
                    {bimbingan ? <BimbinganPage setClose={(e) => setBimbingan(false)}/> : null}
                </div>
                </div>
            </div>
        </div>
    )
}

export default MahasiswaPage