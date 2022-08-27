import React from "react"
import { GET_TOP_5_COINS } from "./ActionTypes"
import axios from "axios"

export const getTop5Coins = () => {
    return(dispatch)=>{
            console.log("RAN!!!")
            axios.get(`https://api.coinlore.net/api/ticker/?id=90,80,48543,518,2710`).then(res=>{
                if(res.data){
                    dispatch({
                        type:GET_TOP_5_COINS,
                        payload:res.data
                    })
                }
            }).catch(err=>console.log(err))
        }
}