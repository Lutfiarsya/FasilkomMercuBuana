import { User, Lock, Log } from "@phosphor-icons/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.css';
import mercu1 from "../Assets/Image1.jpeg"
import mercu2 from "../Assets/Image2.jpg"
import mercu3 from "../Assets/Image3.jpg"
import Logo from '../Assets/Mercu icons.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../Component/ButtonGroup";







const LoginPage = ({setIsLogin, adminUser, mahasiswaUser, dosenUser}) => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


const handleKey = (event) => {
    if(event.key === 'Enter'){
        handleClick()
    }
}

const handleClick = (event) => {
    if(username == adminUser.username && password == adminUser.password){
        navigate('/admin')
        setIsLogin(true)
    }else if(username == mahasiswaUser.username && password == mahasiswaUser.password){
        navigate('/mahasiswa')
        setIsLogin(true)
    }else if(username == dosenUser.username && password == dosenUser.password){
        navigate('/dosen')
        setIsLogin(true)
    }
    else{
        alert('Password salah')
    }
    setUsername('')
    setPassword('')
}

    return(
        <div className="flex flex-row w-full h-[630px] m-auto  items-center justify-between relative">
            <img
            src={Logo}
            width={200}
            height={200}
            className="absolute left-4 top-4"
            />
           <div className="flex flex-col justify-around m-auto h-[55%] w-[50%] items-center">
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-6xl text-[--primary-color] font-semibold font-['Poppins']">Login</h1>
              <p className="text-gray-600  mt-4 italic text-[10px] font-regular font-['Poppins']">Silahkan login menggunakan NIM dan Password anda</p>
            </div>
            <div className="w-full flex flex-col  items-center">
              <div className=" flex flex-col h-[50%]  justify-around relative">
                <div className="relative">
                    <User size={21} className="absolute top-[12px] left-3"/>
                    <input onKeyDown={handleKey} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="NIM / Username" className="w-[400px] h-[40px] h-12 px-10 rounded-md placeholder-italic text-md font-['Poppins'] shadow-[4px_4px_8px_-4px_black]"/>
                </div>
                <div className="relative">
                    <Lock size={21} className="absolute top-[12px] left-3"/>
                    <input onKeyDown={handleKey} value={password} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}  className="w-[400px] h-12 px-10 rounded-md italic text-md font-['Poppins'] shadow-[4px_4px_8px_-4px_black]" />
                </div>
                <button className="italic text-xs font-['Poppins'] absolute h-1 bottom-0  text-[--secondary-color] right-0">forget password?</button>
              </div>
              <div className="w-[70%] h-72 flex flex-col items-center justify-evenly">
                <PrimaryButton text={'Login'} width={'400px'} height={'16'} functionButton={handleClick} style={"text-2xl font-['Poppins'] font-semibold"}/>
                <SecondaryButton text={'Register'} width={'400px'} height={'16'} functionButton={() => navigate('/register')} style={"text-2xl font-['Poppins'] font-semibold border border-[--primary-color]"}/>
              </div>

            </div>
           </div>

           {/* Slider */}
           <div className="w-[50%] h-full flex m-auto items-center flex mr-2 ">
            <Swiper         spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          hideOnClick: true
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
                className="w-[95%] h-[90%] rounded-md shadow-[4px_4px_8px_-4px_black]">
                <SwiperSlide className="w-full h-full">
                    <img src={mercu1} 
                    className="object-cover w-full h-full"
                    alt="Slide 1" />
                </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img src={mercu2} 
                    className= "object-cover w-full h-full"
                    alt="Slide 2" />
                    </SwiperSlide>
                <SwiperSlide className="w-full h-full">
                    <img src={mercu3} 
                    className= "object-cover w-full h-full"
                    alt="Slide 3" />
                    </SwiperSlide>
            </Swiper>
           </div>
        </div>
    )
}

export default LoginPage;