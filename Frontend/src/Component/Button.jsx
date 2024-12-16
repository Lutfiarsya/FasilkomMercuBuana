import { useState } from "react"
import BimbinganPage from "./Bimbingan"

const Button = ({require}) => {
const [bimbingan, setBimbingan] = useState(false)    
    return(
        <div>
            {bimbingan ? 
                <div><BimbinganPage setClose={setBimbingan}/></div> : 
                <div>
                    {require ? 
                    <button onClick={() => setBimbingan(true)} className="w-36 text-[10px] rounded-md text-white h-8 bg-[#06D001] font-['Poppins'] hover:scale-110 hover:cursor-pointer transition-all transform">Ajukan Bimbingan</button> : <button disabled className="w-36 text-[10px] rounded-md text-white h-8 bg-gray-400 font-['Poppins']">Tidak perlu Bimbingan</button>}
                    
                </div>
    
            }
        </div>
    )
}

export default Button