import LogoMercu from '../Assets/images 1.png'
import ProfilePicture from '../Assets/download (5).jpg'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {

    return(
        <nav className='flex flex-row justify-between w-full mt-2'>
            <img
            src={LogoMercu}
            width={150}
            height={150}
            className='ml-4'
            />
            {/* Profile Picture */}
            <div className='flex flex-row items-center'>
                <h2 className="mr-6 text-regular font-['Poppins']">Luthfie Arsya</h2>
                <img
                src={ProfilePicture}
                width={50}
                height={50}
                className='rounded-full mr-4'
                />
            </div>
        </nav>
    )
}

export default Navbar