import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View style={styles.Header}>
            <Image
            source={require("../assets/Logo.png")}
            resizeMode="contain"
            style={{ height: 50}}
            />    
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Header: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
        // marginTop: 80,
    }
})
