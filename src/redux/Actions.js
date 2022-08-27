import React from "react"
import { GET_TOP_5_COINS } from "./ActionTypes"
import axios from "axios"

export const getTop5Coins = () => {
    return(dispatch)=>{
            console.log("RAN!!!")
            axios.get(`https://api.coinlore.net/api/tickers/?start=1&limit=5`).then(res=>{
                if(res.data){
                    dispatch({
                        type:GET_TOP_5_COINS,
                        payload:res.data
                    })
                }
            }).catch(err=>console.log(err))
        }
}