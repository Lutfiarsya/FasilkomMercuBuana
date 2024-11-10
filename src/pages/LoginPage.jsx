import { User, Lock, Log } from "@phosphor-icons/react";
import mercu from '../Assets/mercu bg.png'
import Logo from '../Assets/logo Mercu.png'
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const data = {
    admin:{
        username : "admin",
        password : 'admin1234'
    },
    mahasiswa:{
        NIM : "41524010185",
        password : 'lutfiarsya34'
    }
}

console.log(data.mahasiswa.NIM)


const LoginPage = ({setIsLogin}) => {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()

const handleKey = (event) => {
    if(event.key === 'Enter'){
        handleClick()
    }
}

const handleClick = (event) => {
    if(username == data.admin.username && password == data.admin.password){
        navigate('/admin')
        setIsLogin(true)
    }else if(username == data.mahasiswa.NIM && password == data.mahasiswa.password){
        navigate('/mahasiswa')
        setIsLogin(true)
    }else{
        alert('Password salah')
    }
    setUsername('')
    setPassword('')
}

    return(
        <div className="flex flex-row w-full justify-between h-full mt-4">
           <div className="flex flex-col w-[50%] my-20  items-center">
              <h1 className="text-5xl text-[--primary-color] font-bold font-['Poppins']">Login</h1>
              <p className="text-gray-600 mt-2 italic text-[8px] font-semibold font-['Poppins']">Silahkan login menggunakan NIM dan Password anda</p>
              <div className="mt-16 flex flex-col h-[60%] justify-around relative">
                <div className="relative">
                    <User size={21} className="absolute top-[9px] left-3"/>
                    <input onKeyDown={handleKey} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="NIM" className="w-[400px] h-10 px-10 rounded-md placeholder-italic text-md font-['Poppins'] shadow-[4px_4px_8px_-4px_black]"/>
                </div>
                <div className="relative">
                    <Lock size={21} className="absolute top-[9px] left-3"/>
                    <input onKeyDown={handleKey} value={password} placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)}  className="w-[400px] h-10 px-10 rounded-md italic text-md font-['Poppins'] shadow-[4px_4px_8px_-4px_black]" />
                </div>
                <button className="italic text-xs font-['Poppins'] absolute bottom-0 text-[--secondary-color] right-0">forget password?</button>
              </div>
              <button onClick={handleClick}  className="bg-[--secondary-color] w-[280px] text-2xl h-20 mt-10 rounded-full text-white font-semibold font-['Poppins'] shadow-[4px_4px_8px_-4px_black]">Login</button>
           </div>
           <div className="flex w-[50%] h-full">
               <img
               src={Logo}
               width={160}
               height={160}
               className="absolute right-5"
               />
                <img
                src={mercu}
                className="object-fill w-[600px] h-[600px]"
                />
           </div>
        </div>
    )
}

export default LoginPage;