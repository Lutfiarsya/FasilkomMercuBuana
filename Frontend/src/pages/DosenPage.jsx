import Navbar from "../Component/Navbar";
import Table from "../Component/TableMahasiswa/Table";

const DosenPage = () => {
    const data = [
          { 'NIM': '14145141', 'Nama': 'Nama 1', 'ProgramStudi': 'Teknik Informatika', 'Periode': '2024' , 'Bimbingan': "1/8" },
          { 'NIM': '14145142', 'Nama': 'Nama 2', 'ProgramStudi': 'Teknik Informatika', 'Periode': '2024' , 'Bimbingan': "2/8" },
          { 'NIM': '14145145', 'Nama': 'Nama 3', 'ProgramStudi': 'Teknik Informatika', 'Periode': '2024' , 'Bimbingan': "4/8" },
          { 'NIM': '14145159', 'Nama': 'Nama 4', 'ProgramStudi': 'Teknik Informatika', 'Periode': '2020' , 'Bimbingan': "7/8" },
          { 'NIM': '14145155', 'Nama': 'Nama 5', 'ProgramStudi': 'Teknik Informatika', 'Periode': '2020' , 'Bimbingan': "1/8" },
    ];

    return(
        <div>
            <Navbar />
            <div className="w-full h-full items-center">
                <div className="relative mt-10 flex flex-col m-auto w-[97%] h-40 bg-[--primary-color] rounded-md text-white">
                    <h1 className="text-5xl font-bold ml-4 mt-4">Luthfie Arsya Darmaputra</h1>
                    <h3 className="text-md italic ml-4">Teknik Informatika</h3>
                    <button className="absolute right-4 bottom-2">Check Details</button>
                </div>
                <div className="w-[97%] flex h-full  m-auto mt-6">
                <h1 className="text-4xl font-semibold text-[--primary-color]">List Mahasiswa Bimbingan</h1>
                </div>
                <div className="relative w-[97%] mt-4 flex items-center justify-center m-auto max-h-[280px] overflow-y-auto border border-gray-300">
            <table className="w-full table-auto border-collapse  text-white text-center font-['Poppins'] shadow-[4px_4px_5px_-4px_black]">
                <thead>
                    <tr className="bg-[--primary-color] h-12 sticky top-0 z-10 text-white">
                        <th className="border-x-1 border-white">NIM</th>
                        <th>Nama</th>
                        <th>Periode</th>
                        <th>Periode</th>
                        <th>Pengajuan Bimbingan</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {data.map((items, index) => {
                        return(
                        <tr key={index} className="bg-white text-black h-12 border-t">
                            <td>{items.NIM}</td>
                            <td>{items.Nama}</td>
                            <td>{items.ProgramStudi}</td>
                            <td>{items.Periode}</td>
                            <td>{items.Bimbingan}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
            </div>
        </div>
    )
}


export default DosenPage;