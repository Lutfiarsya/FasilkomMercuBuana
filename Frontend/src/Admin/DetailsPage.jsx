import Navbar from "../Component/Navbar"
import RandomizeCount from "../Utilities/randomizeNumber"
import MBKM from '../Assets/classroom.png'
import MPTI from '../Assets/presentation.png'
import TA from '../Assets/student.png'
import TP from '../Assets/learning.png'
import { useState } from "react"
import Table from "../Component/TableMahasiswa/Table"
import { House, MagnifyingGlass } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"
import InputSearch from "../Utilities/inputSearch"


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
        title: "Kerja Praktik",
        total: 30
    }
]


const data = {
    "MBKM": [
      { 'NIM': '14145141', 'Nama': 'Nama 1', 'Angkatan': '2021', 'DosenPembimbing': 'Dosen 1', 'TanggalUpload': '2023-01-01' },
      { 'NIM': '14145142', 'Nama': 'Nama 2', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 2', 'TanggalUpload': '2023-01-02' },
      { 'NIM': '14145145', 'Nama': 'Nama 3', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
      { 'NIM': '14145159', 'Nama': 'Nama 4', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
      { 'NIM': '14145155', 'Nama': 'Nama 5', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
      { 'NIM': '14145156', 'Nama': 'Nama 6', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
      { 'NIM': '14145157', 'Nama': 'Nama 7', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
      { 'NIM': '14145157', 'Nama': 'Nama 7', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
      { 'NIM': '14145157', 'Nama': 'Nama 7', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
    ],
    "MPTI": [
      { "NIM": '14145146', "Nama": 'Nama 3', "Angkatan": '2021', "DosenPembimbing": 'Dosen 3', "TanggalUpload": '2023-01-03' },
    ],
    'Tugas Akhir': [
      { "NIM": '14145149', "Nama": 'Nama 4', "Angkatan": '2022', "DosenPembimbing": 'Dosen 4', "TanggalUpload": '2023-01-04' },
    ],
    'Kerja Praktik': [
      { "NIM": '14145192', "Nama": 'Nama 5', "Angkatan": '2023', "DosenPembimbing": 'Dosen 5', "TanggalUpload": '2023-01-05' },
    ],
  };


const DetailsPage = () => {
const [services, setServices] = useState('MBKM');
const [filter, setFilter] = useState('');
const navigate = useNavigate()




const handleClick = (item) => {
    setServices(item)
}

const ClickNavigate = () => {
    navigate('/admin')
}



    return(
        <div className="font-['Poppins']">
            <Navbar/>
            <div className="w-full h-[200px] flex flex-col items-center justify-between mt-8">
                <div className="flex flex-col w-full">
                    <House size={25} weight="fill" color='var(--primary-color)' onClick={ClickNavigate} className="absolute  right-6 top-[72px] hover:cursor-pointer"/>
                    <div className="w-full flex flex-row justify-evenly items-center mt-4">
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
                </div>
                <div className="mt-6 w-full flex flex-col justify-center items-center">
                    <div className="w-[97%] h-10 flex flex-row justify-between items-center border-b-2 relative border-gray-500">
                        <div className="w-[40%]  h-10 flex justify-between  flex-row items-center text-gray-500 font-regular border-gray-500">
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
                        <div className="w-[40%] justify-end flex relative">
                            <InputSearch setFilter={setFilter} filter={filter}/>
                            <MagnifyingGlass size={20}
                            className="absolute right-2 top-[6px]"
                            />
                        </div>
                    </div>
                    <div className="w-[97%] m-auto items-center font-regular flex justify-center mt-6">
                        <Table category={services} filter={filter} data={data} Judul1={"NIM"} Judul2={"Nama"} Judul3={"Angkatan"} Judul4={'Dosen Pembimbing'} Judul5={'Tanggal Upload'} Judul6={'Action'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default DetailsPage