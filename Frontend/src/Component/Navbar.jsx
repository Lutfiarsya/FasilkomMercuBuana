import LogoMercu from '../Assets/images 1.png'
import ProfilePicture from '../Assets/download (5).jpg'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = ({username, home}) => {
const navigate = useNavigate()

const handleClick = () => {
    navigate(-1)
}
    return(
        <nav className='flex flex-row justify-between w-full mt-2'>
            <img
            src={LogoMercu}
            width={150}
            height={150}
            className='ml-4'
            onClick={handleClick}
            />
            {/* Profile Picture */}
            <Link to={`/profile/${username}`}>
            <div className='flex flex-row items-center'>
                <h2 className="mr-6 text-regular font-['Poppins']">Luthfie Arsya</h2>
                <img
                src={ProfilePicture}
                width={50}
                height={50}
                className='rounded-full mr-4'
                />
            </div>
            </Link>
        </nav>
    )
}

export default Navbar