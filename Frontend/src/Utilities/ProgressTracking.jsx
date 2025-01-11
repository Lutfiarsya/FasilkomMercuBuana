import { motion } from "framer-motion"
const ProgressTracking = ({fill}) => {


const slideVariantsEnter = {
        hidden: { x: "100%", opacity: 0 },
        visible: { x: 0, opacity: 1 },
        exit: { x: "-100%", opacity: 0 },
}
    return(
        <div className="flex flex-col w-[60%] h-10 items-center m-auto mt-10 justify-center">
            <div className={`flex flex-row items-center justify-between  ${fill ? 'bg-[--primary-color]' : 'bg-gray-400'} transition-all duration-500 ease-in-out h-1 w-[60%]`}>
                <div className="w-6 text-[15px] h-6 bg-[--primary-color] rounded-full text-white items-center flex justify-center">1</div>
                <div className={`w-6 text-[15px] h-6 ${fill ? 'bg-[--primary-color]' : 'bg-gray-400'} transition-all duration-500 ease-in-out  rounded-full text-white items-center flex justify-center`}>2</div>
            </div>
            <div className="flex flex-row items-center justify-between w-[80%] h-full">
                <p className="text-[10px] italic">Personal Infomation</p>
                <p className="text-[10px] italic">Additional Information</p>
            </div>
        </div>
    )
}


export default ProgressTracking