import { useNavigate } from "react-router-dom"

const NotFound = () => {
const navigate = useNavigate()

const handleNavigate = () => {
    navigate(-1)
}
    return(
        <div className="w-full h-[600px] flex items-center  font-['Poppins'] mt-4 justify-center">
        <div className="flex flex-col w-full h-[80%] items-center justify-around">
            <img 
            src="https://cdn.dribbble.com/users/550484/screenshots/2128340/404-gif.gif"
            width={500}
            height={500}
            />
            <h2 className="text-xl text-[--primary-color]">Maaf Halaman tidak ditemukan, silahkan kembali ke menu</h2>
            <button onClick={handleNavigate} className="w-56 h-10 rounded-md bg-[--primary-color] text-white">Back to Home</button>
        </div>
        </div>
    )
}

export default NotFound