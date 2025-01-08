import { useEffect, useState } from "react"

const CountDown = ({ResendGmail}) => {
const [timer, setTimer] = useState(ResendGmail)  
const [resend, setResend] = useState(false) 


    useEffect(() => {
        if(timer < 0){
         setResend(true)
         return
        };
        if(!resend){
                const time = setInterval(() => {
                    setTimer((prevTime) => prevTime - 1);
                  }, 1000);
                  return () => clearInterval(time); 
                }
    }, [timer, resend])
 
const handleResendCode = () => {
    setTimer(ResendGmail)
    setResend(false); 
}

const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

    return(
        <div>
            {timer > 0 ? formatTime(timer) : <button onClick={handleResendCode}>Resend</button>}
        </div>
    )
}

export default CountDown