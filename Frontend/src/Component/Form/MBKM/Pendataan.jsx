import { CaretDown, FileText, Upload } from "@phosphor-icons/react"
import { useState } from "react"
import ExampleFile from "../../ExampleFile"

const Pendataan = ({Judul, Singkatan, Program, dosenPembimbing, Periode}) => {
const [inputNIM, setInputNIM] = useState('')
const [number, setNumber] = useState('')
const [exampleFile, setExampleFile] = useState(false)
const [selectedFile, setSelectedFile] = useState({})
const [program, setProgram] = useState('')


const changeNIM = (e) => {
    const NIM = e.target.value;
    if (/^\d*$/.test(NIM)) {
        setInputNIM(NIM);
    }
  };

  const handleFile = (event) => {
    // validasi target file yang ingin di upload
    const {id, files: uploadedFiles } = event.target
    const maxLengthFile = 20
    
    // jika ada data dalam array
    if(uploadedFiles.length > 0){   

        // mengubah apabila nama file lebih dari 20 karakter
        const updatedFiles = Array.from(uploadedFiles).map((items) => {
            if(items.name.length > maxLengthFile){
                const updateNameFile = items.name.slice(0, maxLengthFile) + '...'
                return{...items, name: updateNameFile}
            }
            return items
        })

        setSelectedFile((prev) => ({
            ...prev,
            [id]: updatedFiles
        }));
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
                    <select className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm px-2" onChange={(e) => {setProgram(e.target.value)}}>
                        <option disabled selected className="text-gray-400 italic" >Program MBKM</option>
                        <option value="MSIB">MSIB</option>
                        <option value="Wirausaha">Wirausaha Merdeka</option>
                        <option value="IISMA">IISMA</option>
                        <option value="KampusMengajar">Kampus Mengajar</option>
                        <option value="Studip">Studi Independent</option>
                        <option value="Pertukaran">Pertukaran Mahasiswa Merdeka</option>
                    </select>
                </div>
                {program == 'Studip' ? 
                    <select className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm px-2 mt-6">
                        <option disabled selected className="text-gray-400 italic" >Kategori Mitra</option>
                        <option value="MSIB">Bangkit</option>
                        <option value="Wirausaha">MyEduSolve</option>
                        <option value="IISMA">Hacktiv8</option>
                    </select>
                : 
                
                null }
                <input type="text" id="Dosen" className="w-full h-10 my-6 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Nama Dosen Pembimbing Akademik"/>
                <input type="text" id="Intuisi" className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Intuisi / Mitra Kolaborasi"/>
                <input type="text" id="NamaPembimbingMBKM" className="w-full h-10 my-6 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Nama Pembimbing MBKM"/>
                <input type="text" id="NamaPembimbingIndustri" className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="Nama Pembimbing Industri"/>
                <form action="/upload" method="" enctype="multipart/form-data" className="w-full my-6 flex flex-col h-[200px] justify-between">


                        {/* Upload Surat izin diterima di MBKM */}
                    <div className="w-full  flex flex-row">
                        <label className="w-[45%] h-10  relative text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-start bg-white  px-2">
                           {selectedFile['SuratIzin'] ? <FileText size={25} color="#00376d" weight="fill"  className="mx-6"/> : <Upload size={25} className="mx-6" color="#00376d"/> }
                            {selectedFile['SuratIzin']  ? selectedFile['SuratIzin'][0]?.name : `Upload Surat Izin / Laporan Awal`}
                        <input type="file" onChange={handleFile} id="SuratIzin" accept="application/pdf,application/msword, application/docx" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" />
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                            <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>
                    

                        {/* Upload transkrip Nilai */}
                    <div className="w-full  flex flex-row">
                        <label className="w-[45%] h-10 relative text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-start bg-white px-2">
                        {selectedFile['Transkrip'] ? <FileText size={25} color="#00376d" weight="fill"  className="mx-6"/> : <Upload size={25} className="mx-6" color="#00376d"/> }
                        {selectedFile['Transkrip'] ? selectedFile['Transkrip'][0]?.name : `Upload Transkrip Nilai UMB`}
                        <input onChange={handleFile} type="file" id="Transkrip" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload Transkrip Nilai UMB"/>
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                            <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>


                    <div className="w-full  flex flex-row">
                        <label className="w-[45%] h-10 relative text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-start bg-white px-2">
                        {selectedFile['Silabus'] ? <FileText size={25} color="#00376d" weight="fill"  className="mx-6"/> : <Upload size={25} className="mx-6" color="#00376d"/> }
                        {selectedFile['Silabus'] ? selectedFile['Silabus'][0]?.name : `Upload Silabus MBKM~~`}
                        <input onChange={handleFile} type="file" id="Silabus" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload Silabus MBKM"/>
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                            <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>


                    <div className="w-full  flex flex-row">
                        <label className="w-[45%] h-10 relative text-gray-400 italic shadow-[0px_0px_8px_-6px_black] rounded-sm flex hover:cursor-pointer items-center justify-start bg-white px-2">
                        {selectedFile['KRS'] ? <FileText size={25} color="#00376d" weight="fill"  className="mx-6"/> : <Upload size={25} className="mx-6" color="#00376d"/> }
                        {selectedFile['KRS'] ? selectedFile['KRS'][0]?.name : `Upload KRS Berjalan`}
                        <input onChange={handleFile} type="file" id="KRS" className="w-[45%] hidden h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm text-center bg-white px-2" placeholder="Upload KRS Berjalan"/>
                        </label>
                        {exampleFile ? 
                            <div><ExampleFile setClose={setExampleFile}/></div>
                                    :
                            <button onClick={showExampleFile} className="hover:scale-105 transform transition-all w-36 ml-6 rounded-md h-10 bg-[--primary-color] text-white">Contoh file</button>
                        }
                    </div>
                </form>
                <input maxLength={13} type="text" id="NoHandphone" value={number} onChange={changeNumber} className="w-full h-10 shadow-[0px_0px_8px_-6px_black] rounded-sm  px-2" placeholder="No handphone"/>
                <div className="w-full flex justify-end mt-6">
                <button className="bg-[--primary-color] w-36 rounded-sm 0 my-6 h-10 text-white">Kirim</button>
                </div>
            </div>
        </div>
    )
}


export default Pendataan