import { Download, Eye, Trash } from "@phosphor-icons/react";
import { PrimaryButton, ThirdButton, TrashButton } from "./ButtonGroup";

const ActionButton = () => {
    return(
        <div className="flex w-[70%] h-10 flex-row m-auto items-center justify-around">
            <PrimaryButton width={'32px'} height={'8'} text={<Eye color="#fff" size={15}/>} style={'rounded-lg flex justify-center px-2 items-center'}/>
            <TrashButton width={'32px'} height={'8'} text={<Trash color="#fff" size={15}/>} style={'rounded-lg flex justify-center px-2 items-center'}/>
            <ThirdButton width={'32px'} height={'8'} text={<Download color="#fff" size={15}/>} style={'rounded-lg flex justify-center px-2 items-center'}/>
                
        </div>
    )
}

export default ActionButton;