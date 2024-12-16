import { useState } from "react";

const DetailsDosen = () => {
const [details, setDetails] = useState(false)    
    return(
        <div>
            {details ? 
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20">
                <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[--primary-color] text-white flex flex-col font-['Poppins'] relative font-regular rounded-md w-[600px] h-[600px] z-30 p-4">
                <button onClick={() => setDetails(false)}>Close</button>
                </div>
            </div> : 
            <button onClick={() => setDetails(true)} className="text-[--primary-color]" >Details</button>}
        </div>
    )
}

export default DetailsDosen;