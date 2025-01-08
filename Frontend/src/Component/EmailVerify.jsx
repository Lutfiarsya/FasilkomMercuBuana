import { useNavigate } from 'react-router-dom'
import logo from '../Assets/MercuIcons.png'
import CountDown from '../Utilities/CountDown'
const EmailVerify = ({valueGmail, setVerifyGmail}) => {
const mappingInput = Array.from({length: 6}, (_, i) => i + 1)
const navigate = useNavigate()

const handleBack = () => {
    setVerifyGmail(true)
}



    return(
        <div className='flex flex-col w-full h-full items-center'>
            <div className='mt-4 w-18 h-18 rounded-full bg-white border-gray- border-4 p-2'>
             <img
             src={logo}
             width={50}
             height={50}
                />
            </div>
            <div className='flex flex-col w-full mt-4'>
                <h1 className='font-semibold text-3xl'>Please Check Your Gmail</h1>
                <p className="italic text-[12px]">we've send code to {valueGmail}</p>
            </div>
            <div className='flex flex-row items-center w-full justify-center'>
                {mappingInput.map((index) => {
                    return(
                        <div className='flex flex-row w-14 mt-4 items-center justify-around'>
                            <input
                                key={index}
                                className='border-2 border-gray-400 w-12 h-12 rounded-md text-center text-xl'
                                maxLength={1}
                                type='text'
                            />
                        </div>
                    )
                })}
            </div>
            <div className='w-[80%] flex flex-row justify-between mt-4 p-4'>
                <button className='w-44 bg-white text-[--primary-color] rounded-md shadow-sm shadow-[--primary-color] h-10' onClick={handleBack}>Back</button>
                <button className='w-44 bg-[--primary-color] text-white rounded-md shadow-sm shadow-black h-10'>Verify Code</button>
            </div>
            <div className='w-[45%] mt-4 text-sm flex flex-row items-center justify-around'>
                <p>Didn't recieve an email? </p>
                <CountDown ResendGmail={60}/>
            </div>
        </div>
    )
}


export default EmailVerify