import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Input = (props) => {
    return (
        <TextInput
        placeholder={props.placeholder}
        name={props.name}
        id={props.id}
        value={props.value}
        autoCorrect={props.autoCorrect}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
        secureTextEntry={props.secureTextEntry}
        keyboardType={props.keyboardType}
        style={styles.input}
        >

        </TextInput>
    )
}

export default Input

const styles = StyleSheet.create({
    input: {
        width: '80%',
        height: 60,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
        padding: 10,
        borderWidth: 2,
        borderColor: 'orange'
    }
})
