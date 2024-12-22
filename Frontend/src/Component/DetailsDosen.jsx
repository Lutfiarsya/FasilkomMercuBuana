import { useState } from "react";
import PictureDosen from '../Assets/PP Dosen.jpg'



const DetailsDosen = ({data}) => {
const [details, setDetails] = useState(false)    
    return(
        <div className="font-['Poppins']">
            {details ? 
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20">
                <div className="top-1/2 relative left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white flex flex-col font-['Poppins'] relative font-regular rounded-md w-[600px] h-[600px] z-30 p-4">
                <div className="w-full h-full flex flex-col">
                    {/* Image */}
                    <div className="w-full flex flex-row h-44 items-center text-start px-4">
                        <div>
                            <img 
                            src={PictureDosen}
                            width={170}
                            height={170}
                            className="rounded-full"
                            />
                        </div>
                        <div className="flex flex-col ml-10 w-full">
                            <h1 className="text-2xl font-semibold text-[--primary-color]">{data.Nama}</h1>
                            <p className="text-gray-500 italic text-sm">{data.NID}@mercubuana.ac.id</p>
                        </div>
                    </div>

                    {/* Details data */}
                    <div className="w-full text-[--primary-color]  flex text-start flex-col">
                        <h1 className="font-semibold text-2xl">Data Diri</h1>
                        <div className="grid w-full grid-cols-1 ">
                            <table className="w-full p-4 text-lg">
                                <tr className="h-12">
                                    <td>Tempat, Tanggal lahir</td>
                                    <td className="w-10">:</td>
                                    <td>{data.lahir}</td>
                                </tr>
                                <tr className="h-12">
                                    <td>No Handphone / WhatsApp</td>
                                    <td>:</td>
                                    <td>{data.NoHp}</td>
                                </tr>
                                <tr className="h-12">
                                    <td>Keahlian</td>
                                    <td>:</td>
                                    <td>{data.Keahlian}</td>
                                </tr>
                                <tr className="h-12">
                                    <td>Departemen</td>
                                    <td>:</td>
                                    <td>{data.Departemen}</td>
                                </tr>
                            </table>
                            {data.pendidikan.map((items, index) => {
                                return(
                                <div>
                                    <h1 className="font-semibold text-xl mt-4">Pendidikan</h1>
                                    <ul key={index}>
                                        <li>S1 : {items.S1}</li>
                                        <li>S2 : {items.S2}</li>
                                        <li>S3 : {items.S3}</li>
                                    </ul>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <button onClick={() => setDetails(false)} className="text-white absolute bottom-4 right-4 w-20 h-10 bg-[--primary-color] rounded-md">Close</button>
                </div>
            </div> : 
            <button onClick={() => setDetails(true)} className="text-[--primary-color]" >Details</button>}
        </div>
    )
}

export default DetailsDosen;