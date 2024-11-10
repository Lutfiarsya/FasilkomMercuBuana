import Navbar from "../Component/Navbar"
import PieChart from "../Utilities/Chart"
import MBKM from '../Assets/classroom.png'
import MPTI from '../Assets/presentation.png'
import TA from '../Assets/student.png'
import TP from '../Assets/learning.png'

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
const AdminPage = () => {
    return(
        <div className="w-full font-['Poppins']">
            <Navbar/>
            <div className="w-[97%] flex flex-row justify-between m-auto mt-10 text-[--primary-color] relative">
                <h1 className="text-4xl font-bold">Dashboard</h1>
                <p className="italic text-md absolute bottom-0 right-0">Check Details</p>
            </div>
            {/* Container */}
            <div className="w-[97%] flex flex-row justify-between m-auto mt-4">
                {/* Container - Total pengumpulan tugas mahasiswa */}
             <div className="grid grid-cols-2 gap-4 w-[60%] items-center px-2">
                {form.map((items) => {
                    return(
                        <div className="w-full h-56 bg-[--primary-color] justify-between flex flex-col rounded-lg">
                            <div className="flex mt-4 flex-row w-[97%] h-20 items-center">
                                <img
                                src={items.image}
                                width={70}
                                height={70}
                                className="ml-4"
                                />
                                <h2 className="ml-10 text-white text-lg">{items.title}</h2>
                            </div>
                            <div className="ml-4 mb-4 text-white ">
                            <h1 className="text-4xl font-bold">{items.total}</h1>
                            <p className="italic text-md">Mahasiswa</p>
                            </div>
                        </div>
                    )
                })}
             </div>   
                 {/* Container - Diagram */}
             <div className="w-[35%] p-4 flex items-center justify-center bg-[--primary-color] rounded-lg">
                <PieChart/>
              </div>
            </div>
        </div>
    )
}

export default AdminPage