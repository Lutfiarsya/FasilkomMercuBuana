import { useState } from "react"
import { House } from "@phosphor-icons/react"
import FormMahasiwa from "../../Component/form"
import Navbar from "../../Component/Navbar"
import Panduan from "../../Component/Panduan"
import { useNavigate } from "react-router-dom"

const PageMBKM = () => {
const [open, setOpen] = useState(false)
const navigate = useNavigate()
const handleClick = () => {
    setOpen(true)
}


const handleNavigate = () => {
    navigate('/mahasiswa')
}

const handleDataDosen = () => {
    navigate('/data-dosen')
}

    return(
        <div className="w-full flex flex-col justify-center font-['Poppins']">
            <Navbar/>
            <div className="flex flex-col justify-center w-full items-center mt-6">
            <House size={42} weight="fill" onClick={handleNavigate} color='var(--primary-color)'className=" hover:scale-110 hover:cursor-pointer transition-all transform absolute left-[130px] top-[90px] hover:cursor-pointer"/>
            <div className="flex flex-row w-[80%] justify-end">
                {open ? 
                <div className="relative w-full h-full">
                    <Panduan setClose={setOpen}/> 
                </div>
                :  
                <div className="flex w-[50%] text-[14px]  flex-row justify-between text-white font-regular">
                    <button className="hover:scale-110 hover:cursor-pointer transition-all transform w-60 h-12 px-4 rounded-md bg-[--primary-color]" onClick={handleClick}>Baca Panduan pengisian Formulir</button> 
                    <button className="hover:scale-110 hover:cursor-pointer transition-all transform w-60 h-12 px-4 rounded-md bg-[--primary-color]" onClick={handleDataDosen}>Data Dosen</button> 
                </div>
            }
            </div>    
            <FormMahasiwa Judul={'MBKM'} Singkatan={'Merdeka Belajar Kampus Merdeka'} Program={'Pilih Program MBKM'} dosenPembimbing={'Dosen Pembimbing'} Periode={'Tahun Periode'}/>
            </div>
        </div>
    )
}

export default PageMBKM