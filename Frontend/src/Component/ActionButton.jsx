import { Download, Eye, Trash } from "@phosphor-icons/react";

const ActionButton = () => {
    return(
        <div className="flex w-[70%] h-10 flex-row m-auto items-center justify-around">
            <button id="read" className="w-8 h-8 bg-[--primary-color] flex items-center justify-center rounded-lg shadow-[2px_2px_7px_-4px_black]">
                <Eye color="#fff" size={15}/>
            </button>
            <button className="w-8 h-8 bg-[#CC2B52] flex items-center justify-center rounded-lg shadow-[2px_2px_7px_-4px_black]">
                <Trash color="#fff" size={15}/>
            </button>
            <button className="w-8 h-8 bg-[#06D001] flex items-center justify-center rounded-lg shadow-[2px_2px_7px_-4px_black]">
                <Download color="#fff" size={15}/>
            </button>
        </div>
    )
}

export default ActionButton;