import { replace, useNavigate } from "react-router-dom"
import React from "react"

const Protected = ({ IsLogin,children }) => {
    const navigate = useNavigate()

    if(!IsLogin){
        alert('anda harus login terlebih dahulu')
        navigate('/errorPage')
    }else
    return children
    
}



export default Protected