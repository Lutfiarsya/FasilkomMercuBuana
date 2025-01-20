import logo from '../Assets/MercuIcons.png'

const Icons = ({width, height}) => {
    return(
        <div className='mt-4 w-18 h-18 rounded-full bg-white border-gray- border-4 p-2'>
        <img
        src={logo}
        width={width}
        height={height}
           />
       </div>
    )
}

export default Icons