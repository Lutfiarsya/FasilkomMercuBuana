import Navbar from "../Component/Navbar";
import Table from "../Component/TableMahasiswa/Table";
import InputSearch from "../Utilities/inputSearch";
import { useState } from "react";

const DataDosen = () => {
  const [filter, setFilter] = useState('');
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



    return(
        <div className="flex flex-col relative items-center w-full justify-center font-['Poppins']">
            <Navbar/>
            <div className="w-[95%] h-12 border-b-2 border-gray-400 flex items-center justify-center pb-4 mt-12">
            <h1 className="text-5xl font-semibold text-[--primary-color]">Dosen Fakultas Ilmu Komputer</h1>
            </div>
            <div className="w-[95%] mt-6 mb-2 flex justify-end">
                <InputSearch setFilter={setFilter} filter={filter}/>
            </div>
            <div className="relative w-[95%] max-h-[450px] overflow-y-auto border border-gray-300">
              <Table Judul1={'NID'} Judul2={'Nama'} Judul3={'Departemen'} Judul4={'Keahlian'} Judul5={'Details'} data={data} filter={filter}/>
            </div>
        </div>
    )
}

export default DataDosen;