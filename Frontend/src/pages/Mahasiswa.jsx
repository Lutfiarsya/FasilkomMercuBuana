import Navbar from "../Component/Navbar"
import KP from '../Assets/Icons Services/KPIcon.png'
import MBKM from '../Assets/Icons Services/project-management.png'
import TA from '../Assets/Icons Services/start-up.png'
import MPTI from '../Assets/Icons Services/file-managament.png'
import { Link, useNavigate } from "react-router-dom"
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
        image: MPTI,
        title: "Manajemen Project Teknologi Informasi - MPTI",
        path : '/mahasiswa/form-mpti'
    },
]


const data = {
    'MBKM' : [
        {
            keterangan : 'Pendataan MBKM',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        },
        {
            keterangan : 'Laporan Akhir MBKM',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        }
    ],
    'TA' : [
        {
            keterangan : 'Pendataan Tugas Akhir',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        },
        {
            keterangan : 'Pendaftaran Sidang Akhir',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        }
    ],
    'KP' : [
        {
            keterangan : 'Peminatan Kerja Praktik',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        },
        {
            keterangan : 'Pendaftaran Sidang Akhir',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        },        {
            keterangan : 'Pengumpulan Laporan Akhir',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        }
    ],
    'MPTI' : [
        {
            keterangan : 'Pendaftaran MPTI',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        },
        {
            keterangan : 'Peminatan MPTI',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        },
        {
            keterangan : 'Pendaftaran Sempro',
            nama: "Luthfie Arsya",
            Dosen: 'Dr Akmalll sanjaya Tr',
            Status: 'Berhasil'
        }
    ],
}


const selectedData = data[services]




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
                    <div className="relative w-full max-h-[280px] overflow-y-auto border border-gray-300">
                        <table className="w-full table-auto border-collapse  text-white text-center font-['Poppins'] shadow-[4px_4px_5px_-4px_black]">
                            <thead>
                                <tr className="bg-[--primary-color] h-12 sticky top-0 z-10 text-white">
                                    <th className="border-x-1 border-white">Keterangan Program</th>
                                    <th>Nama</th>
                                    <th>Dosen Pembimbing</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                    </thead>
                    <tbody className="text-center">
                    {selectedData?.map((items, index) => {
                        return(
                        <tr key={index} className="bg-white text-black h-12 border-t">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
                </div>
                </div>
            </div>
        </div>
    )
}

export default MahasiswaPage