import React,{useState,useEffect} from "react"
import {View,Text,StyleSheet} from "react-native"
import * as variables from "../../assets/variables"
import HomepageTableCards from './HomepageTableCards';
import { useDispatch,useSelector } from 'react-redux';

const HomepageTable = ({onPressCoinData,coinDataSheetRef}) => {
    const {topFiveCoins} = useSelector(state=>state.Reducers)
    console.log(topFiveCoins)
    return(
        <View style={styles.TableContainer}>
            <View style={styles.TableHeaderContainer}>
                <Text style={styles.TableHeaderTextName}>Name</Text>
                <Text style={styles.TableHeaderSymbol}>Symbol</Text>
                <Text style={styles.TableHeaderText}>Price($USD)</Text>
            </View>
            <View style={styles.TableBodyContainer}>
                {topFiveCoins && topFiveCoins.length > 0 ? 
                    topFiveCoins.map(coin=>{
                        return(
                            <HomepageTableCards onPressCoinData={onPressCoinData} coinDataSheetRef={coinDataSheetRef} key={coin.id} coin={coin} name={coin.name} symbol={coin.symbol} price={coin.price_usd} />
                        )
                    })
                : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    TableContainer:{
        borderColor:"white",height:500,alignItems:"center"
    },
    TableHeaderContainer:{
        flexDirection:"row",width:400,alignItems:"center",justifyContent:"space-between",
        marginBottom:10,paddingRight:24,paddingLeft:50
    },
    TableHeaderText:{
        fontSize:12,color:variables.fontWhiteColor,width:85
    },
    TableHeaderTextName:{
        fontSize:12,color:variables.fontWhiteColor,width:85,marginLeft:18
    },
    TableHeaderSymbol:{
        fontSize:12,color:variables.fontWhiteColor,marginRight:22
    },
    TableBodyContainer:{
        height:400,justifyContent:"space-between"
    }
})

export default HomepageTable;