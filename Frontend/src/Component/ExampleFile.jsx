import { X } from '@phosphor-icons/react'
import file from '../Assets/Image3.jpg'
const ExampleFile = ({setClose}) => {
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-20">
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[--primary-color] text-white flex flex-col font-['Poppins']  font-regular rounded-md w-[600px] h-[600px] z-30">
            <img src={file}
            className='object-fill w-full h-full'
            />
        </div>
        <X size={32} onClick={() => setClose(false)} weight="bold" className='right-5 top-5 fixed hover:cursor-pointer'/>
        </div>
    )
}

export default ExampleFile