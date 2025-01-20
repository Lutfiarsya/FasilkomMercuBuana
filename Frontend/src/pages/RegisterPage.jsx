import { useState } from "react"
import { motion } from "framer-motion"
import EmailVerify from "../Component/EmailVerify"
import RegistMahasiswa from "../Component/RegistMahasiswa"
import logoMercu from '../Assets/MercuIcons.png'
import ProgressTracking from "../Utilities/ProgressTracking"
import RegistDosen from "../Component/RegistDosen"
import { PrimaryButton } from "../Component/ButtonGroup"

const Register = () =>{
const [gmailVerify, setGmailVerify] = useState('')
const [codeVerify, setCodeVerify] = useState('verify')
const [validateCode, setValidateCode] = useState([])
const [fillSuccess, setFillSuccess] = useState(false)
const emailMahasiswa = 'student.mercubuana.ac.id';
const emailDosen = 'mercubuana.ac.id';

const handleVerify = () => {
    const pattern = new RegExp(`^[A-Za-z0-9\s@]+@${emailDosen}|[A-Za-z0-9\s@]+@${emailMahasiswa}`)
    if (pattern.test(gmailVerify)) {
      alert("email valid");
      setCodeVerify('codeVerify')
    } else {
      alert('tidak valid');
      setGmailVerify('')
    }
    console.log(gmailVerify)
}


const slideVariantsEnter = {
    hidden: { x: "100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
}

const slideVariantsExit = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
}



    return(
        <div className="w-full h-[630px] flex justify-center items-center  bg-black bg-opacity-25 z-20 font-['Poppins'] relative">
            <div className={`shadow-xl w-[500px] text-center rounded-md ${codeVerify == 'verify' ? "h-64" : codeVerify == 'codeVerify' ? 'h-96' :  "h-[600px] w-[600px]"}  flex flex-col text-[--primary-color] items-center transform  relative bg-white`}>
                {codeVerify == 'verify' ? 
                <motion.div className="overflow-hidden w-full h-full items-center flex flex-col">
                    <motion.div
                    className="relative"
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={slideVariantsExit}
                    transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-5xl mt-4 font-semibold">Register</h1>
                    <p className="text-sm mt-2 italic">Pendaftaran Khusus mahasiswa dan dosen mercu buana</p>
                    <div className="relative flex flex-col w-full h-full items-center justify-center">
                        <input
                         placeholder="example@student.mercubuana.ac.id"
                         className="w-[80%] p-4 rounded-lg h-12 bg-white text-black border-2 text-sm"
                         onChange={(e) => setGmailVerify(e.target.value)}
                         value={gmailVerify}
                        />
                        <PrimaryButton functionButton={handleVerify} text={'Verify Gmail'} width={'80%'} height={'10'} style={'text-sm mt-4'}/>
                        </div>
                        </motion.div>    
                    </motion.div> 
                       : codeVerify == 'codeVerify' ?
                        <div className="relative flex flex-col w-full h-full overflow-hidden">
                        <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={slideVariantsEnter}
                        transition={{ duration: 0.5 }}>
                            <EmailVerify valueGmail={gmailVerify} setVerifyGmail={setCodeVerify} code={validateCode} validateCode={setValidateCode}/>
                        </motion.div>
                        </div>
                        : 
                        <div className="flex flex-col w-full justify-center items-center">
                            <div className='m-2 mt-4 w-18 h-18 rounded-full bg-white border-gray-300  border-4 p-2'>
                            <img
                            src={logoMercu}
                            width={50}
                            height={50}
                            />
                            </div>
                            <div className="flex flex-col w-full">
                                <h1 className="text-3xl font-semibold">{gmailVerify.includes(emailMahasiswa) ? 'Registrasi Mahasiswa' : 'Registrasi Dosen'}</h1>
                                <p className="italic text-sm">Silahkan isi data sesuai</p>
                                <ProgressTracking fill={fillSuccess}/>
                            </div>
                            <div className="flex w-full items-center justify-center">
                            {gmailVerify.includes(emailMahasiswa) ?  <RegistMahasiswa additional={fillSuccess}/> : <RegistDosen additional={fillSuccess} />} 
                            </div>
                            <div className="w-full flex flex-row mt-2 justify-end">
                                <button className="w-36 h-10 bg-white font-semibold rounded-md text-[--primary-color] mr-6 border-2 border-[--primary-color]" onClick={() => setFillSuccess(false)}>Back</button>
                                <button className="w-36 h-10 text-white font-semibold rounded-md bg-[--primary-color] mr-6" onClick={() => setFillSuccess(true)}>{fillSuccess ? 'Submit' : 'Next'}</button>
                            </div>
                        </div>
                    }
                </div>
           
        </div>
    )
}


export default Register