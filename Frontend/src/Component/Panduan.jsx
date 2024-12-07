const Panduan = ({setClose}) => {

const handleClick = () => {
    setClose(false)
}    
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20">
        <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[--primary-color] text-white flex flex-col font-['Poppins'] relative font-regular rounded-md w-[600px] h-[600px] z-30 p-4">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum reiciendis error exercitationem et beatae quo id ut minima labore debitis, ad rem totam iste. Sint non eveniet maxime laboriosam autem!</p>
            <div className="fixed bottom-4 right-4 flex w-[330px] justify-between flex-row">
            <button onClick={handleClick} className=" bottom-6 bg-white text-[--primary-color] w-56 h-10 rounded-md right-6  hover:scale-110 hover:cursor-pointer transition-all transform">Download Panduan</button>
            <button onClick={handleClick} className=" bottom-6 bg-white text-[--primary-color] w-20 h-10 rounded-md right-6  hover:scale-110 hover:cursor-pointer transition-all transform">Close</button>
            </div>
        </div>
        </div>
    )
}


export default Panduan