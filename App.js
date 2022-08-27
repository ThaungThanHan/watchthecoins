/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
const App = () => {
  return(
    <Provider store={store}>
    <View style={styles.container}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container:{     // very important. without this, navigation won't show.
    flex:1,
  }
})
export default App;
