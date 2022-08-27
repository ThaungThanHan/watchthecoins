import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from "../components/SplashScreen";
import Homepage from "../components/Homepage/Homepage";
const AppNavigator = () => {
    const Stack = createStackNavigator()
    return(
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}} >
            <Stack.Screen animationEnabled={true} options={{animationTypeForReplace: 'pop'}} name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Homepage" component={Homepage} />
        </Stack.Navigator>
    )
}

export default AppNavigator;