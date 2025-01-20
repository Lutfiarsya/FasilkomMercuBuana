
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
        className={`hover:scale-110 hover:cursor-pointer transition-all transform w-[${width}] h-${height} rounded-md bg-[--primary-color] px-4 text-white ${style}`}
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

export const ThirdButton = ({text, functionButton, type = 'button'}) => {
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
        className="w-36 text-[10px] rounded-md text-white h-8 bg-[#06D001] font-['Poppins'] hover:scale-110 hover:cursor-pointer transition-all transform"
        >
            {text}
        </button>
    )
}

