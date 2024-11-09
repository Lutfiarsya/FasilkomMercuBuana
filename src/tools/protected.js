import { replace, useNavigate } from "react-router-dom"
import React from "react"

const Protected = ({ IsLogin,children }) => {
    const navigate = useNavigate()

    if(!IsLogin){
        return navigate('/errorPage', replace)
    }else
    return children
    
}



export default Protected