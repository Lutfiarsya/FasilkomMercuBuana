import { useState } from "react"

const Table = ({category}) => {

    const data = {
        "MBKM": [
          { 'NIM': '14145141', 'Nama': 'Nama 1', 'Angkatan': '2021', 'DosenPembimbing': 'Dosen 1', 'TanggalUpload': '2023-01-01' },
          { 'NIM': '14145142', 'Nama': 'Nama 2', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 2', 'TanggalUpload': '2023-01-02' },
          { 'NIM': '14145145', 'Nama': 'Nama 3', 'Angkatan': '2020', 'DosenPembimbing': 'Dosen 3', 'TanggalUpload': '2023-01-02' },
        ],
        "MPTI": [
          { "NIM": '14145146', "Nama": 'Nama 3', "Angkatan": '2021', "DosenPembimbing": 'Dosen 3', "TanggalUpload": '2023-01-03' },
        ],
        'Tugas Akhir': [
          { "NIM": '14145149', "Nama": 'Nama 4', "Angkatan": '2022', "DosenPembimbing": 'Dosen 4', "TanggalUpload": '2023-01-04' },
        ],
        'Tugas Penelitian': [
          { "NIM": '14145192', "Nama": 'Nama 5', "Angkatan": '2023', "DosenPembimbing": 'Dosen 5', "TanggalUpload": '2023-01-05' },
        ],
      };

const selectedData = data[category]
console.log(selectedData)

    return(
        <div className="w-full flex items-center text-center justify-center">
            <table className="w-full table-auto text-white text-center font-['Poppins'] shadow-[4px_4px_5px_-4px_black]">
                <thead className="text-center">
                    <tr className="bg-[--primary-color] px-2 h-10 ">
                        <th className="border-x-1 border-white">NIM</th>
                        <th>Nama</th>
                        <th>Periode</th>
                        <th>Dosen Pembimbing</th>
                        <th>Tanggal Upload</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-center ">
                    {selectedData?.map((items, index) => {
                        return(
                        <tr className="bg-white text-black px-2 h-10" key={index}>
                            <td>{items.NIM}</td>
                            <td>{items.Nama}</td>
                            <td>{items.Angkatan}</td>
                            <td>{items.DosenPembimbing}</td>
                            <td>{items.TanggalUpload}</td>
                            <td>Coming soon</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>

        </div>
    )
}

export default Table