import { MagnifyingGlass } from "@phosphor-icons/react";

const Input = () => {
    return(
        <div className="flex flex-row relative">
            <input className="bg-gray-300 w-[300px] rounded-md h-8 px-2 text-[12px] italic font-['Poppins']"
            placeholder="Nama, NIM, Dosen Pembimbing"
            />
            <MagnifyingGlass size={20}
            className="absolute right-2 top-[6px]"
            />
        </div>
    )
}

export default Input;