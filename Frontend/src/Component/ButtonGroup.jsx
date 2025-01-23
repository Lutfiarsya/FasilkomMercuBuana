
export const PrimaryButton = ({text, functionButton, type = 'button', width, height, style}) => {
    return(
        <button 
        type={type} 
        onClick={(e) => {
            if(type === 'submit' && functionButton){
                e.preventDefault();
                functionButton(e)
            }else if (functionButton){
                functionButton(e)
            }
        }}
        className={`hover:scale-110 hover:cursor-pointer transition-all transform w-[${width}] h-${height} bg-[--primary-color] text-white ${style}`}
        >
            {text}
        </button>
    )
}

export const SecondaryButton = ({text, functionButton, type = 'button', width, height, style}) => {
    return(
        <button 
        type={type} 
        onClick={(e) => {
            if(type === 'submit' && functionButton){
                e.preventDefault();
                functionButton(e)
            }else if (functionButton){
                functionButton(e)
            }
        }}
        className={`w-[${width}] h-${height} hover:scale-110 hover:cursor-pointer transition-all transform bg-white font-semibold rounded-md px-4 text-[--primary-color] ${style}`}
        >
            {text}
        </button>
    )
}

export const ThirdButton = ({text, functionButton, type = 'button', style, width, height}) => {
    return(
        <button 
        type={type} 
        onClick={(e) => {
            if(type === 'submit' && functionButton){
                e.preventDefault();
                functionButton(e)
            }else if (functionButton){
                functionButton(e)
            }
        }}
        className={`w-[${width}] rounded-md text-white h-${height} bg-[#06D001] font-['Poppins'] hover:scale-110 hover:cursor-pointer transition-all transform ${style}`}
        >
            {text}
        </button>
    )
}

export const TrashButton = ({text, functionButton, type = 'button', width, height, style}) => {
    return(
        <button 
        type={type} 
        onClick={(e) => {
            if(type === 'submit' && functionButton){
                e.preventDefault();
                functionButton(e)
            }else if (functionButton){
                functionButton(e)
            }
        }}
        className={`hover:scale-110 hover:cursor-pointer transition-all transform w-[${width}] h-${height} bg-red-600 text-white ${style}`}
        >
            {text}
        </button>
    )
}

