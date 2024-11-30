import Navbar from "../Component/Navbar"
import MPTI from '../Assets/completed-task 3.png'
import MBKM from '../Assets/completed-task 1.png'
import TA from '../Assets/completed-task 2.png'
import TP from '../Assets/resume_8468345.png'

const MahasiswaPage = () => {

const form = [
    {
        id: 1,
        image : MBKM,
        title : "Merdeka Belajar Kampus Merdeka - MBKM"

    },
    {
        id: 2,
        image: TA,
        title: "Tugas Akhir"
    },
    {
        id: 3,
        image: MPTI,
        title: "Manajemen Proyek Teknologi Informasi - MPTI"
    },
    {
        id: 4,
        image: TP,
        title: "Tugas Penelitian"
    }
]

    return(
        <div className="w-full flex flex-col font-['Poppins']">
            <Navbar/>
            <div className="flex flex-col">
                {/* Nama dan identitas mahasiswa */}
                <div className="relative mt-10 flex flex-col m-auto w-[97%] h-40 bg-[--primary-color] rounded-md text-white">
                    <h1 className="text-5xl font-bold ml-4 mt-4">Luthfie Arsya Darmaputra</h1>
                    <h3 className="text-md italic ml-4">2023-2024</h3>
                    <button className="absolute right-4 bottom-2">Check Details</button>
                </div>
                <h1 className="ml-4 font-bold text-3xl mt-4 text-[--primary-color]">Form Pengajuan</h1>
                <div className="flex flex-row mx-4 w-[97%] mt-2 h-72 items-center justify-between">
                    {form.map((items) => {
                        return(
                                <div key={items.id} className="w-[280px] bg-white flex flex-col justify-evenly items-center h-[280px] rounded-md shadow-[4px_4px_10px_-3px_black] hover:scale-110 hover:cursor-pointer transition-all transform hover:shadow-[6px_6px_12px_-10px_black] ">
                                    <img
                                    src={items.image}
                                    width={120}
                                    height={120}
                                    />
                                    <h2 className="text-center mx-4 text-md font-semibold text-[--primary-color]">{items.title}</h2>
                                </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MahasiswaPage