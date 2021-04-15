import React from 'react'
import { LogBox, StyleSheet, Text, View } from 'react-native'
import ProductContainer from './screens/Products/ProductContainer'
import Header from './Shared/Header'
import { NavigationContainer } from '@react-navigation/native'


//Navigators
import Main from './Navigators/Main';
import { Provider } from 'react-redux'
import store from './Redux/store'

LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
    <Header/>
    <Main/>
    </NavigationContainer>
    </Provider>
    
  )
}

const styles = StyleSheet.create({

})
