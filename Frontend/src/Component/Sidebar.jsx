import { useState } from 'react'
import { motion } from 'framer-motion'
import icons from '../Assets/Mercu icons.png'
import icons2 from '../Assets/MercuIcons.png'


const Sidebar = () => {
const [isSideBar, setIsSideBar] = useState(false)
    return(
        <div
        onMouseEnter={() => setIsSideBar(true)} onMouseLeave={() => setIsSideBar(false)} className={`${isSideBar ? 'w-64' : 'w-24'} transition-all duration-300  h-[100vh] bg-white flex flex-col items-center shadow-[0px_0px_5px_-2px_black] rounded-r-xl`}>
            <div className='w-[90%] mt-4 flex flex-row items-center justify-center h-19'>
                {isSideBar ?
                <img
                src={icons}
                width={150}
                height={150}
                />
                :
                <img
                src={icons2}
                width={50}
                height={50}
                />
            }
            </div>
            <div>

            </div>
        </div>
    )
}

export default Sidebar 