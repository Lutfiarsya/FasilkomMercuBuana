import { House, MagnifyingGlass } from "@phosphor-icons/react";
import Navbar from "../Component/Navbar";
import InputSearch from "../Utilities/inputSearch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DetailsDosen from "../Component/DetailsDosen";

const DataDosen = () => {
  const [filter, setFilter] = useState('');
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate(-1)
  }
    const data =  [
          { 'NID': '14145141', 'Nama': 'Dr. Adrian Wicaksono, M.T.', 'Departemen': 'Teknik Informatika', 'Keahlian': 'CyberSecurity', 'lahir' : 'Surabaya, 12 April 1980', 'NoHp' : '+62 812 3456 7890', pendidikan : [{'S1' : 'Teknik Informatika, ITS', 'S2' : 'Teknik Elektro, ITB' , 'S3' : 'Teknologi Informasi, Universitas Tokyo'}]  },
          { 'NID': '14145142', 'Nama': 'Prof. Farah Nabila, S.Kom., Ph.D.', 'Departemen': 'Teknik Informatika', 'Keahlian': 'CyberSecurity' , 'lahir' : 'Jakarta, 8 Juni 1985', 'NoHp' : '+62 813 4567 8912' , pendidikan : [{'S1' : 'Sistem Informasi, UI', 'S2' : 'Data Science, Monash University', 'S3' : 'Artificial Intelligence, MIT'}]},
          { 'NID': '14145145', 'Nama': 'Ir. Bagas Saputra, M.Sc.', 'Departemen': 'Teknik Informatika', 'Keahlian': 'CyberSecurity' },
          { 'NID': '14145159', 'Nama': 'Dr. Indah Maharani, S.T., M.Kom.', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Web Developer' },
          { 'NID': '14145155', 'Nama': 'Rahmat Firdaus, S.Kom., M.T.I.', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Web Developer' },
          { 'NID': '14145156', 'Nama': 'Prof. Hendra Pratama, S.T., Ph.D.', 'Departemen': 'Teknik Informatika', 'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Dian Kusuma, S.Si., M.T.I.', 'Departemen': 'Teknik Informatika', 'Keahlian': 'Artificial Intellagence' },
          { 'NID': '14145157', 'Nama': 'Dr. Lestari Wahyuni, M.Kom.', 'Departemen': 'Teknik Informatika', 'Keahlian': 'Artificial Intellagence' },
          { 'NID': '14145157', 'Nama': 'Ahmad Fauzi, S.T., M.Comp.Sc.', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Prof. Siti Nurhaliza, S.Kom., Ph.D.', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Dr. Zainuddin Ismail, M.T.', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Fadilah Ramadhani, S.Kom., M.Sc.', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Prof. Andi Setiawan, S.T., Ph.D.', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
        ];

        const filteredData = data?.filter((items) =>
          filter ? 
            Object.values(items).some((val) =>
              String(val).toLowerCase().includes(filter?.toLowerCase())
            ) : true
          );

    return(
        <div className="flex flex-col relative items-center w-full justify-center font-['Poppins']">
            <Navbar/>
            <div className="w-[95%] h-12 border-b-2 border-gray-400 flex items-center justify-center pb-4 mt-12">
            <h1 className="text-5xl font-semibold text-[--primary-color]">Dosen Fakultas Ilmu Komputer</h1>
            </div>
            <div className="w-[95%] mt-6 mb-2 flex flex-row items-center justify-between">
                <House size={42} weight="fill" color='var(--primary-color)' className="hover:cursor-pointer" onClick={handleNavigate} />
                <InputSearch setFilter={setFilter} filter={filter}/>
                <MagnifyingGlass size={20} className="absolute right-10"/>
            </div>
            <div className="relative w-[97%] max-h-[280px] overflow-y-auto border border-gray-300">
            <table className="w-full table-auto border-collapse  text-white text-center font-['Poppins'] shadow-[4px_4px_5px_-4px_black]">
                <thead>
                    <tr className="bg-[--primary-color] h-12 sticky top-0 z-10 text-white">
                        <th className="border-x-1 border-white">NID</th>
                        <th>Nama</th>
                        <th>Departemen</th>
                        <th>Keahlian</th>
                        <th>Profile Lengkap</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {filteredData?.map((items, index) => {
                        return(
                        <tr key={index} className="bg-white text-black h-12 border-t">
                            <td>{items.NID}</td>
                            <td>{items.Nama}</td>
                            <td>{items.Departemen}</td>
                            <td>{items.Keahlian}</td>
                            <td><DetailsDosen data={items}/></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default DataDosen;