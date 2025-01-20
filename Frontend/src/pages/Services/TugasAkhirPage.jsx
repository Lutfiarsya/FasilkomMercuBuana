import { useState } from "react"
import { House } from "@phosphor-icons/react"
import { PrimaryButton } from "../../Component/ButtonGroup"
import Navbar from "../../Component/Navbar"
import Panduan from "../../Component/Panduan"
import { useNavigate } from "react-router-dom"

const PageTugasAkhir = () => {
const [open, setOpen] = useState(false)
const [services, setServices] = useState('Klik Tugas Akhir')
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
                <div className="flex w-[38%] text-[16px] flex-row justify-between text-white font-regular">
                    <PrimaryButton text={'Panduan Pengisian Form'} functionButton={handleClick} width={'320px'} height={'10'}/>
                    <PrimaryButton text={'Detail Dosen'} functionButton={handleDataDosen} width={'145px'} height={'10'}/>
                </div>
            }
            </div>  
            <div className="w-[80%] mt-10 flex justify-evenly border-b-2 border-gray-500 h-11 flex-row items-center text-gray-500  font-regular border-gray-500">
                            {['Klik Tugas Akhir' , 'Pendaftaran Sidang Tugas Akhir'].map((items) => {
                                return(
                                    <div className="flex flex-row text-center">
                                        <button onClick={() => setServices(items)} type="button"
                                        className={` p-4 pb-1 relative  flex text-center items-center ${services === items ? `text-[--primary-color] border-b-2 border-[--primary-color]` : `border-gray-500`}`}    
                                        >{items}</button>
                                    </div>
                                    
                                )
                            })}
            </div>
            </div>
        </div>
    )
}

export default PageTugasAkhir