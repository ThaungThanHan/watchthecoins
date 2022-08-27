import React,{useEffect,useRef,useState,useCallback} from 'react';
import { View,Text,StyleSheet, addons } from 'react-native';
import * as variables from "../../assets/variables"
import LinearGradient from 'react-native-linear-gradient';
import HomepageTable from './HomepageTable';
import { useDispatch,useSelector } from 'react-redux';
import { getTop5Coins } from '../../redux/Actions';
import BottomSheet,{   BottomSheetModal,
    BottomSheetModalProvider, BottomSheetBackdrop  } from '@gorhom/bottom-sheet';

const Homepage = () => {
    const coinDataSheetRef = useRef();
    const [coinData,setCoinData] = useState([])
    const snapPoints = ["10%","50%"]
    const dispatch = useDispatch();
    const renderBackdrop = useCallback(
        props => (
      <BottomSheetBackdrop
        {...props}
      />
        ),
        []
    );
    useEffect(()=>{
        dispatch(getTop5Coins())
    },[dispatch])

    const onPressCoinData = (coin) => {
        setCoinData(coin)
        coinDataSheetRef.current?.expand()
    }
    const checkIfGreenRed = (percent) => {
        if(percent && percent.includes("-")){
            return false
        }else if (percent && percent > 0){
            return true
        }else if(percent && percent >= 0){
            return null
        }
    }
    console.log(checkIfGreenRed(coinData.percent_change_7d))
    return(
        <>
        <BottomSheet
        ref={coinDataSheetRef}
        index={-1}
        snapPoints={snapPoints} enablePanDownToClose={true} backdropComponent={renderBackdrop}
        >
            <View style={styles.bottomContainer}>
                <Text style={styles.bottomContainerTitle}>{coinData ? coinData.name : null}</Text>
                <View style={styles.bottomDataContainer}>
                    <View style={styles.bottomDataCard}>
                        <Text style={styles.bottomData}>{coinData ? coinData.rank : null}</Text>
                        <Text style={styles.bottomDataTitle}>Rank</Text>
                    </View>
                    <View style={styles.bottomDataCard}>
                        {coinData ? <Text 
                        style={checkIfGreenRed(coinData.percent_change_1h) ? styles.bottomDataGreen : !checkIfGreenRed(coinData.percent_change_1h) ? styles.bottomDataRed : styles.bottomData}>
                            {coinData.percent_change_1h}</Text> : null }
                        <Text style={styles.bottomDataTitle}>% change 1h</Text>
                    </View>
                    <View style={styles.bottomDataCard}>
                    {coinData ?  <Text 
                    style={checkIfGreenRed(coinData.percent_change_24h) ? styles.bottomDataGreen : !checkIfGreenRed(coinData.percent_change_1h) ? styles.bottomDataRed : styles.bottomData}>
                            {coinData.percent_change_24h}
                        </Text> : null}
                        <Text style={styles.bottomDataTitle}>% change 24h</Text>
                    </View>
                    <View style={styles.bottomDataCard}>
                        {coinData ? <Text 
                        style={checkIfGreenRed(coinData.percent_change_7d) ? styles.bottomDataGreen : !checkIfGreenRed(coinData.percent_change_1h) ? styles.bottomDataRed : styles.bottomData}>
                            {coinData.percent_change_7d}
                        </Text>  : null}
                        <Text style={styles.bottomDataTitle}>% change 7d</Text>
                    </View>
                </View>
            </View>
        </BottomSheet>        
        <LinearGradient colors={["#22212D","#030304"]} start={{x:0,y:0}} end={{x:0,y:1}} style={styles.HomepageContainer}>   

            <Text style={styles.HomepageTitle}>Cryptocurrencies</Text> 
            <HomepageTable onPressCoinData={onPressCoinData} coinDataSheetRef={coinDataSheetRef} />
            <Text style={styles.appAuthor}>App written by - Thaung Than Han</Text>
            <Text style={styles.appAuthor}>API powered by - Coinlore</Text>
        </LinearGradient>
        </>
    )
}
const styles = StyleSheet.create({
    HomepageContainer:{
        flex:1,zIndex:-1
    },
    HomepageTitle:{
        alignSelf:"center",color:variables.goldColor,marginTop:20,fontSize:40,marginBottom:12
    },
    appAuthor:{
        fontSize:16,color:variables.fontWhiteColor,alignSelf:"center"
    },
    bottomContainer:{
        
    },
    bottomContainerTitle:{
        alignSelf:"center",fontSize:30,color:variables.goldColor,fontWeight:"bold",marginBottom:10
    },
    bottomDataContainer:{
        height:300,flexDirection:"row",justifyContent:"space-between",
        flexWrap:"wrap",paddingHorizontal:20
    },
    bottomDataCard:{
        borderWidth:1,borderColor:variables.primaryDarkColor,width:150,height:100,marginBottom:10,borderRadius:20
    },
    bottomData:{
        alignSelf:"center",fontSize:50,color:variables.primaryDarkColor
    },
    bottomDataTitle:{
        alignSelf:"center",fontSize:20,fontWeight:"bold",color:variables.primaryDarkColor
    },
    bottomDataGreen:{
        alignSelf:"center",fontSize:50,color:variables.greenPercent
    },
    bottomDataRed:{
        alignSelf:"center",fontSize:50,color:variables.redPercent
    }
})
export default Homepage;