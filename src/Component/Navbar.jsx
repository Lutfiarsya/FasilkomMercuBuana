import LogoMercu from '../Assets/images 1.png'
import ProfilePicture from '../Assets/download (5).jpg'
const Navbar = () => {
    return(
        <nav className='flex flex-row justify-between w-full mt-2'>
            <img
            src={LogoMercu}
            width={200}
            height={200}
            className='ml-4'
            />
            {/* Profile Picture */}
                <img
                src={ProfilePicture}
                width={75}
                height={75}
                className='rounded-full mr-4'
                />
        </nav>
    )
}

export default Navbar