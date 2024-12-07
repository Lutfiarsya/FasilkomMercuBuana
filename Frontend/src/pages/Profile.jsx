import logoMercu from '../Assets/Mercu icons.png'

const Profile = () => {
    return(
        <div className='flex flex-col w-full h-full'>
            <nav className='w-full h-16 bg-green-300'>
                <img
                src={logoMercu}
                width={150}
                height={150}
                />
            </nav>
            <div>
                <img/>
                <h1>Luthfie Arsya Darmaputra</h1>
                <p>41524010185@student.mercubuana.ac.id</p>
            </div>
        </div>
    )
}

export default Profile