import { CaretDown, Upload } from "@phosphor-icons/react"
import { useState } from "react"

const FormMahasiwa = ({Judul, Singkatan, Program, dosenPembimbing, Periode}) => {
const [inputNIM, setInputNIM] = useState('')
const [number, setNumber] = useState('')


const changeNIM = (e) => {
    const NIM = e.target.value;
    if (/^\d*$/.test(NIM)) {
        setInputNIM(NIM);
    }
  };

  const changeNumber = (e) => {
    const numberMahasiswa = e.target.value;
    if (/^\d*$/.test(numberMahasiswa)) {
        setNumber(numberMahasiswa);
    }
  };  

    return(
        <div className="w-[80%] my-10 font-['Poppins'] text-[--primary-color] bg-gray-200 rounded-md shadow-[2px_2px_7px_-4px_black] flex flex-col h-full pb-10 items-center">
            <div className="flex flex-col items-center border-b-2 border-black w-[90%] pb-2">
            <h1 className="text-5xl font-semibold mt-10">{Judul}</h1>
            <p className="text-md italic">{Singkatan}</p>
            </div>
            <div className="flex flex-col justify-around  items-start w-[90%]">
                <input type="text" id="NIM" maxLength={11} onChange={changeNIM} value={inputNIM} className="w-full h-10 my-6 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="NIM"/>
                <input type="text" id="Nama Lengkap" className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Nama Lengkap"/>
                <div className="w-full relative">
                    <CaretDown size={20} className="absolute right-4 top-[35px]"/>
                    <select className="w-full h-10 shadow-[0px_0px_8px_-6px_black] my-6 rounded-sm px-2">
                        <option disabled selected>{Periode}</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                    </select>
                </div>
                <div className="w-full relative">
                    <CaretDown size={20} className="absolute right-4 top-[10px]"/>
                    <select className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm px-2">
                        <option disabled selected className="text-gray-400 italic">{Program}</option>
                        <option>MSIB</option>
                        <option>Wirausaha Merdeka</option>
                        <option>IISMA</option>
                        <option>Kampus Mengajar</option>
                        <option>Studi Independent</option>
                        <option>Pertukaran Mahasiswa Merdeka</option>
                    </select>
                </div>
                <div className="w-full relative">
                    <CaretDown size={20} className="absolute right-4 top-[35px]"/>
                    <select className="w-full h-10 shadow-[0px_0px_8px_-6px_black] my-6 rounded-sm px-2">
                        <option disabled selected className="text-gray-400 italic">{dosenPembimbing}</option>
                        <option>Dosen 1</option>
                        <option>Dosen 2</option>
                        <option>Dosen 3</option>
                        <option>Dosen 4</option>
                        <option>Dosen 5</option>
                        <option>Dosen 6</option>
                    </select>
                </div>
                <input type="text" id="Intuisi" className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Intuisi / Mitra Kolaborasi"/>
                <div className="w-full flex flex-row justify-between my-6 ">
                    <div className="flex flex-col w-[45%]">
                        <label for="Mulai" className="mb-2">Tanggal Mulai</label>
                        <input type="date" id="Mulai" className="text-gray-400 italic w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" />          
                    </div>
                    <div className="w-[45%] flex flex-col">
                         <label for="Selesai" className="mb-2">Tanggal Selesai</label>
                         <input type="date" id="Selesai" className="text-gray-400 italic w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" />
                    </div>
                </div>
                <input type="text" id="Deskripsi Kegiatan" className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Deskripsi Kegiatan"/>
                <form action="/upload" method="" enctype="multipart/form-data" className="w-full my-6 items-center flex">
                <label className="w-[45%] h-10 realtive text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-center bg-white px-2">
                    <Upload size={25} className="absolute left-[210px]"/>
                    Upload Surat Izin / Laporan Awal
                <input type="file" id="Deskripsi Kegiatan" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload Surat Izin / Laporan Awal"/>
                </label>
                </form>
                <input maxLength={13} type="text" id="No Handphone" value={number} onChange={changeNumber} className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="No handphone"/>
                <div className="w-full flex justify-end mt-6">
                <button className="bg-[--primary-color] w-36 rounded-sm 0 my-6 h-10 text-white">Kirim</button>
                </div>
            </div>
        </div>
    )
}


export default FormMahasiwa