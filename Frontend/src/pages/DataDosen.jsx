import { House, MagnifyingGlass } from "@phosphor-icons/react";
import Navbar from "../Component/Navbar";
import Table from "../Component/TableMahasiswa/Table";
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
          { 'NID': '14145141', 'Nama': 'Nama 1', 'Departemen': 'Teknik Informatika', 'Keahlian': 'CyberSecurity' },
          { 'NID': '14145142', 'Nama': 'Nama 2', 'Departemen': 'Teknik Informatika', 'Keahlian': 'CyberSecurity' },
          { 'NID': '14145145', 'Nama': 'Nama 3', 'Departemen': 'Teknik Informatika', 'Keahlian': 'CyberSecurity' },
          { 'NID': '14145159', 'Nama': 'Nama 4', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Web Developer' },
          { 'NID': '14145155', 'Nama': 'Nama 5', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Web Developer' },
          { 'NID': '14145156', 'Nama': 'Nama 6', 'Departemen': 'Teknik Informatika', 'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Nama 7', 'Departemen': 'Teknik Informatika', 'Keahlian': 'Artificial Intellagence' },
          { 'NID': '14145157', 'Nama': 'Nama 7', 'Departemen': 'Teknik Informatika', 'Keahlian': 'Artificial Intellagence' },
          { 'NID': '14145157', 'Nama': 'Nama 7', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Nama 7', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Nama 7', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Nama 7', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
          { 'NID': '14145157', 'Nama': 'Nama 7', 'Departemen': 'Sistem Informasi',   'Keahlian': 'Data Science' },
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
            <div className="w-[95%] mt-6 mb-2 bg-green-400 flex flex-row items-center justify-between">
                <House size={42} weight="fill" color='var(--primary-color)' className="hover:cursor-pointer" onClick={handleNavigate} />
                <InputSearch setFilter={setFilter} filter={filter}/>
                <MagnifyingGlass size={20} className="absolute right-4"/>
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
                            <td><DetailsDosen/></td>
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