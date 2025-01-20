import { useRef, useState } from 'react'
import CountDown from '../Utilities/CountDown'
import Icons from './Icons'
import { PrimaryButton, SecondaryButton } from './ButtonGroup'


const EmailVerify = ({valueGmail, setVerifyGmail, code, validateCode}) => {
const [input, setInput] = useState(['' , '', '','', '', ''])
const nextInput = useRef([])




const handleBack = () => {
    setVerifyGmail('verify')
}

const handleVerifyCode = (index, value) => {
    const newInputs = [...input]
    setInput(newInputs)



    if (value && index < input.length - 1) {
        nextInput?.current[index + 1].focus();
    }

}


const handleClick = () => {
    const test = input.join('').toString()
    setVerifyGmail('RegisterIdentity')

}
    return(
        <div className='flex flex-col w-full h-full items-center'>
            <Icons width={50} height={50}/>
            <div className='flex flex-col w-full mt-4'>
                <h1 className='font-semibold text-3xl'>Please Check Your Gmail</h1>
                <p className="italic text-[12px]">we've send code to {valueGmail}</p>
            </div>
            <div className='flex flex-row items-center w-full justify-center'>
                {input.map((items,index) => {
                    return(
                        <div className='flex flex-row w-14 mt-4 items-center justify-around' key={index}>
                            <input            
                                className='border-2 border-gray-400 w-12 h-12 rounded-md text-center text-xl'
                                maxLength={1}
                                type='text' 
                                onChange={(e) => handleVerifyCode(index, e.target.value)}
                                ref={(e) => (nextInput.current[index] = e)}
                                onInput={(e) => e.target.value =  e.target.value.replace(/[^0-9]/g, '')}
                            />
                        </div>
                    )
                })}
            </div>
            <div className='w-[70%] flex flex-row justify-between mt-4 p-4'>
                <SecondaryButton text={'Back'} functionButton={handleBack} width={'45%'} height={'10'} style={'border-2 border-[--primary-color]'}/>
                <PrimaryButton text={'Verify Code'} style={'text-sm'}  functionButton={handleVerifyCode} width={'45%'} height={'10'}/>
            </div>
            <div className='w-[45%] mt-4 text-sm flex flex-row items-center justify-around'>
                <p>Didn't recieve an email? </p>
                <CountDown ResendGmail={60}/>
            </div>
        </div>
    )
}


export default EmailVerify