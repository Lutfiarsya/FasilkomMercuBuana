import Navbar from "../Component/Navbar";

const DataDosen = () => {
    const data = {
        "DataDosen": [
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
        ]
      };



    return(
        <div className="flex flex-col relative items-center w-full justify-center font-['Poppins']">
            <Navbar/>
            <div className="w-[95%] h-12 border-b-2 border-gray-400 flex items-center justify-center pb-4 mt-12">
            <h1 className="text-5xl font-semibold text-[--primary-color]">Dosen Fakultas Ilmu Komputer</h1>
            </div>
            <div>

            </div>
            <div className="relative w-[95%] max-h-[450px] overflow-y-auto border border-gray-300">
  <table className="w-full table-auto border-collapse">
    <thead>
      <tr className="bg-[--primary-color] h-12 sticky top-0 z-10 text-white">
        <th className="px-4">NID</th>
        <th className="px-4">Nama</th>
        <th className="px-4">Departemen</th>
        <th className="px-4">Keahlian</th>
        <th className="px-4">Action</th>
      </tr>
    </thead>
    <tbody>
      {data.DataDosen.map((items, index) => (
        <tr key={index} className="bg-white text-black h-12 border-t">
          <td className="px-4">{items.NID}</td>
          <td className="px-4">{items.Nama}</td>
          <td className="px-4">{items.Departemen}</td>
          <td className="px-4">{items.Keahlian}</td>
          <td className="px-4">Coming soon</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
        </div>
    )
}

export default DataDosen;