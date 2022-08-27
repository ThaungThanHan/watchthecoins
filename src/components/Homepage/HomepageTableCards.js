import React,{useRef} from "react";
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import * as variables from "../../assets/variables"
import BottomSheet from '@gorhom/bottom-sheet';

const HomepageTableCards = ({onPressCoinData,name,symbol,price,coinDataSheetRef,coin}) => {
    // const onPressCoinData = () => {
    //     coinDataSheetRef.current?.expand()
    // }
    return(
        <>
        <TouchableOpacity onPress={()=>onPressCoinData(coin)}style={styles.cardContainer}>
            <Text style={styles.cardName}>{name}</Text>
            <Text style={styles.cardSymbol}>{symbol}</Text>
            <Text style={styles.cardPrice}>{price}</Text>
        </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    cardContainer:{
        borderColor:"#fff",height:71,width:349,alignSelf:"center",backgroundColor:variables.fontWhiteColor,
        flexDirection:"row",alignItems:"center",justifyContent:"center",justifyContent:'space-between',paddingLeft:15,paddingRight:15,
        borderRadius:10,
    },
    cardName:{
        color:variables.primaryDarkColor,fontSize:15,width:90,textAlign:'center',
    },
    cardSymbol:{
        color:variables.primaryDarkColor,fontSize:15,width:60,textAlign:'center',
    },
    cardPrice:{
        color:variables.primaryDarkColor,fontSize:15,width:65,textAlign:'center',
    }
})
export default HomepageTableCards