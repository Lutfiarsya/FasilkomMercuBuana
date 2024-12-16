const BimbinganPage = ({setClose}) => {

const handleClick = () => {
    setClose(false)
    alert("Berhasil ajukan bimbingan")
}

    return(
        <div className="fixed top-0 left-0 font-['Poppins'] right-0 bottom-0 bg-black bg-opacity-50 z-20">
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[--secondary-color] text-white flex flex-col font-['Poppins'] relative font-regular rounded-md w-[600px] h-[600px] z-30 p-4">
            <h1 className="text-2xl">Pengajuan Bimbingan</h1>
            <div className="w-full mt-16 flex flex-col justify-start items-start">
                <label>Nama Lengkap</label>
                <input className="w-[97%] h-8 rounded-md text-black text-md px-2"/>
            </div>
            <div className="flex flex-row w-[60%] fixed bottom-2 right-2 justify-evenly">
                <button onClick={() => setClose(false)} className="w-36 h-8 bg-white text-[--primary-color] rounded-md hover:scale-110 hover:cursor-pointer transition-all transform">Batal</button>
                <button onClick={handleClick} className="w-36 h-8 bg-[#06D001] text-white rounded-md hover:scale-110 hover:cursor-pointer transition-all transform">Ajukan</button>
            </div>
        </div>
        </div>
    )
}

export default BimbinganPage