import { CaretDown, Upload } from "@phosphor-icons/react"
import { useState } from "react"
import Panduan from "../../Panduan"
import ExampleFile from "../../ExampleFile"

const Pendataan = ({Judul, Singkatan, Program, dosenPembimbing, Periode}) => {
const [inputNIM, setInputNIM] = useState('')
const [number, setNumber] = useState('')
const [exampleFile, setExampleFile] = useState(false)
const [file, setFile] = useState(null)


const changeNIM = (e) => {
    const NIM = e.target.value;
    if (/^\d*$/.test(NIM)) {
        setInputNIM(NIM);
    }
  };

  const handleFile = (event) => {
    const uploadFile = event.target.file[0]
    if(uploadFile){
        setFile(uploadFile)
        console.log('File berhasil di upload', file)
    }
  }

  const showExampleFile = () => {
    setExampleFile(true)
  }

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
                        <option disabled selected>Cabang Instansi</option>
                        <option>Meruya</option>
                        <option>Menteng</option>
                        <option>Warung Buncit</option>
                    </select>
                </div>
                <div className="w-full relative">
                    <CaretDown size={20} className="absolute right-4 top-[10px]"/>
                    <select className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm px-2">
                        <option disabled selected className="text-gray-400 italic">Program MBKM</option>
                        <option>MSIB</option>
                        <option>Wirausaha Merdeka</option>
                        <option>IISMA</option>
                        <option>Kampus Mengajar</option>
                        <option>Studi Independent</option>
                        <option>Pertukaran Mahasiswa Merdeka</option>
                    </select>
                </div>
                <input type="text" id="Dosen" className="w-full h-10 my-6 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Nama Dosen Pembimbing Akademik"/>
                <input type="text" id="Intuisi" className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Intuisi / Mitra Kolaborasi"/>
                <input type="text" id="Deskripsi Kegiatan" className="w-full h-10 my-6 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Nama Pembimbing MBKM"/>
                <input type="text" id="Deskripsi Kegiatan" className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Nama Pembimbing Industri"/>
                <form action="/upload" method="" enctype="multipart/form-data" className="w-full my-6 flex flex-col h-[200px] justify-between">
                    <div className="w-full  flex flex-row">
                        <label className="w-[45%] h-10 realtive text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-center bg-white px-2">
                            <Upload size={25} className="absolute left-[210px]"/>
                                 Upload Surat Diterima
                        <input type="file" id="Deskripsi Kegiatan" accept="image/*" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload Surat Izin / Laporan Awal"/>
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                            <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>
                    <div className="w-full  flex flex-row">
                        <label className="w-[45%] h-10 realtive text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-center bg-white px-2">
                             <Upload size={25} className="absolute left-[210px]"/>
                                Upload Transkrip Nilai UMB
                        <input type="file" id="Deskripsi Kegiatan" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload Surat Izin / Laporan Awal"/>
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                            <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>
                    <div className="w-full flex flex-row">
                        <label className="w-[45%] h-10 realtive text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-center bg-white px-2">
                            <Upload size={25} className="absolute left-[210px]"/>
                                Upload KRS Semester Berjalan
                        <input type="file" id="Deskripsi Kegiatan" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload Surat Izin / Laporan Awal"/>
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                        <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>
                    <div className="w-full flex flex-row">
                        <label className="w-[45%] h-10 realtive text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-center bg-white px-2">
                            <Upload size={25} className="absolute left-[210px]"/>
                                Upload Silabus MBKM
                        <input type="file" id="Deskripsi Kegiatan" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload Surat Izin / Laporan Awal"/>
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                        <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>
                </form>
                <input maxLength={13} type="text" id="No Handphone" value={number} onChange={changeNumber} className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="No handphone"/>
                <div className="w-full flex justify-end mt-6">
                <button className="bg-[--primary-color] w-36 rounded-sm 0 my-6 h-10 text-white">Kirim</button>
                </div>
            </div>
        </div>
    )
}


export default Pendataan