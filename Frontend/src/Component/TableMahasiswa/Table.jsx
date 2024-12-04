import { useState } from "react"
import ActionButton from "../ActionButton";

const Table = ({category, filter, data, Judul1, Judul2, Judul3, Judul4, Judul5, Judul6}) => {


const selectedData = category ? data[category] : data


const filteredData = selectedData?.filter((items) =>
  filter ? 
    Object.values(items).some((val) =>
      String(val).toLowerCase().includes(filter?.toLowerCase())
    ) : true
  );
  console.log(filteredData)  

    return(
        <div className="relative w-full max-h-[280px] overflow-y-auto border border-gray-300">
            <table className="w-full table-auto border-collapse  text-white text-center font-['Poppins'] shadow-[4px_4px_5px_-4px_black]">
                <thead>
                    <tr className="bg-[--primary-color] h-12 sticky top-0 z-10 text-white">
                        <th className="border-x-1 border-white">{Judul1}</th>
                        <th>{Judul2}</th>
                        <th>{Judul3}</th>
                        <th>{Judul4}</th>
                        <th>{Judul5}</th>
                        <th>{Judul6}</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {filteredData?.map((items, index) => {
                        return(
                        <tr key={index} className="bg-white text-black h-12 border-t">
                            <td>{items.NIM || items.NID}</td>
                            <td>{items.Nama}</td>
                            <td>{items.Angkatan || items.Departemen}</td>
                            <td>{items.DosenPembimbing || items.Keahlian}</td>
                            <td>{items.TanggalUpload || null}</td>
                            <td>{Judul6 ?  <ActionButton/> : null}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Table