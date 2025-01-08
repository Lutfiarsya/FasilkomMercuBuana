import { useState } from "react"
import { motion } from "framer-motion"
import EmailVerify from "../Component/EmailVerify"

const Register = () =>{
const [gmailVerify, setGmailVerify] = useState('')
const [codeVerify, setCodeVerify] = useState(true)

const handleVerify = () => {
    const emailMahasiswa = /^[^\s@]+@student.mercubuana.ac.id/;
    const emailDosen = /^[^\s@]+@mercubuana.ac.id/;
    if (emailMahasiswa.test(gmailVerify) || emailDosen.test(gmailVerify)) {
      alert("email valid");
      setCodeVerify(false)
    } else {
      alert('tidak valid');
      setGmailVerify('')
    }
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
        <div className="w-full h-[630px] flex justify-center items-center  bg-black bg-opacity-25 z-20 font-['Poppins'] ">
            <div className={`shadow-xl w-[500px] text-center rounded-md ${codeVerify ? "h-64" : "h-96"}  flex flex-col text-[--primary-color] items-center transform  relative bg-white`}>
                {codeVerify ? 
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
                        <button className="text-sm w-[80%] mt-4 rounded-md h-10 p-2  bg-[--primary-color] text-white"
                        onClick={handleVerify}
                        >Verify Gmail</button>
                        </div>
                        </motion.div>    
                    </motion.div> 
                        :
                        <div className="relative flex flex-col w-full h-full overflow-hidden">
                        <motion.div 
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={slideVariantsEnter}
                        transition={{ duration: 0.5 }}>
                            <EmailVerify valueGmail={gmailVerify} setVerifyGmail={setCodeVerify}/>
                        </motion.div>
                        </div>
                    }
                </div>
           
        </div>
    )
}


export default Register