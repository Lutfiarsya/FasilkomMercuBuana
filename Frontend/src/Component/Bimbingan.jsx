import { useState, useEffect } from "react"
import Icons from "./Icons"
import { PrimaryButton, SecondaryButton } from "./ButtonGroup"

const day = {
    'Minggu' : 0,
    'Senin' : 1,
    'Selasa' : 2,
    'Rabu' : 3,
    'Kamis' : 4,
    'Jumat' : 5,
    'Sabtu' : 6
}
const month = 
['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November',, 'Desember']


const BimbinganPage = ({setClose}) => {
const [firstDay, setFirstDay] = useState('Rabu')
const [SecondDay, setSecondDay] = useState('Kamis')
const [OptionDay, setOptionDay] = useState({
    firstDay: '',
    SecondDay: ''
})

useEffect(() => {
    const getDayConsult = () => {
        const today = new Date()
        const getToday = today.getDate()

        const getFirstDay = day[firstDay]
        const getSecondDay = day[SecondDay]
        
        const optionDay1 = new Date(today)
        optionDay1.setDate(getToday + ((getFirstDay - today.getDay() + 7) % 7))
        const day1 = optionDay1.getDate()
        const month1 = month[optionDay1.getMonth()]
        const year1 = optionDay1.getFullYear()
        
        const optionDay2 = new Date(today)
        optionDay2.setDate(getToday + ((getSecondDay - today.getDay() + 7) % 7))
        const day2 = optionDay2.getDate()
        const month2 = month[optionDay2.getMonth()]
        const year2 = optionDay2.getFullYear()


        return {
            firstDay: `${firstDay}, ${day1} ${month1} ${year1}`, 
            SecondDay:  `${SecondDay}, ${day2} ${month2} ${year2}`
        };    
    }
    setOptionDay(getDayConsult())

}, [])




const handleClick = () => {
    setClose(false)
    alert("Berhasil ajukan bimbingan")
}

    return(
        <div className="fixed top-0 left-0 font-['Poppins'] right-0 bottom-0 bg-black bg-opacity-70 z-20">
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-[--primary-color] flex flex-col font-['Poppins'] relative font-regular rounded-md w-[600px] h-[600px] z-30">
        <div className="w-full  flex justify-between h-24 items-center flex-row  rounded-tr-md rounded-bl-md">
            <div className="flex items-center pb-4 justify-center w-36 h-24">
                <Icons width={60} height={60}/>
            </div>
            <div className="w-[80%] justify-center items-center h-24 rounded-bl-3xl bg-[--primary-color] flex">
                <h1 className="text-3xl font-semibold m-auto text-white">Pengajuan Bimbingan</h1>
            </div>
        </div>
            <div className="w-full p-2 mt-8  flex flex-col justify-start items-start px-4">
                <label>Nama Lengkap</label>
                <input className="w-full h-8 rounded-md text-black text-md px-2 border border-gray-400"/>

                {/* penjadwalan akan di ambil dari database */}
                <label className="mt-4">Jadwal Untuk Bimbingan</label>
                <select className="w-full h-8 rounded-md text-black border border-gray-400 px-2">
                    <option selected disabled>Silahkan Pilih Jadwal Untuk Bimbingan</option>
                    <option>{OptionDay.firstDay}</option>
                    <option>{OptionDay.SecondDay}</option>
                    </select>


                {/* Tipe bimbingan */}
                <label className="mt-4">Metode Pelaksanaan Bimbingan</label>
                <select  className="w-full h-8 rounded-md text-black text-md px-2 border border-gray-400"> 
                    <option selected disabled>Silahkan pilih metode untuk bimbingan</option>
                    <option>Offline</option>
                    <option>Online</option>
                </select>

                <label className="mt-4">Keterangan Tambahan</label>
                <textarea className="w-full p-2 h-32 rounded-md text-black text-start text-sm px-2 border border-gray-400"/>
            </div>
            <div className="flex flex-row w-[60%] fixed bottom-4 right-0 justify-evenly">
                <SecondaryButton text={'Batal'} functionButton={setClose} width={'40%'} height={'10'}/>
                <PrimaryButton text={'Kirim'} type="submit" functionButton={handleClick} width={'40%'} height={'10'}/>
            </div>
        </div>
        </div>
    )
}

export default BimbinganPage