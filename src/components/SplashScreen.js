import React, {useEffect,useState,useCallback} from "react";
import {View,Text,StyleSheet} from "react-native"
import LinearGradient from 'react-native-linear-gradient';
import * as variables from "../assets/variables"
import { useDispatch,useSelector } from 'react-redux';
import { getTop5Coins } from '../redux/Actions';
const SplashScreen = ({navigation}) => {
    const {topFiveCoins} = useSelector(state=>state.Reducers)
    const dispatch = useDispatch();
    const getTop5CoinsCallback = useCallback(()=>{
        return dispatch(getTop5Coins())
    },[])
    useEffect(()=>{
        getTop5CoinsCallback();
        setTimeout(()=>{navigation.replace("Homepage")},3000)
    },[])
    return(
        <LinearGradient colors={["#22212D","#030304"]} start={{x:0,y:0}} end={{x:0,y:1}} style={styles.splashContainer}>
            <Text style={styles.logoText}>WatchTheCoins</Text>
            <Text style={styles.logoSubText}>Discover and track your coins</Text>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    splashContainer:{
        borderWidth:1,flex:1,alignItems:"center",justifyContent:"center"
    },
    logoText:{
        fontSize:50,color:variables.goldColor,
    },
    logoSubText:{
        fontSize:20,color:variables.fontWhiteColor
    }
})

export default SplashScreen;