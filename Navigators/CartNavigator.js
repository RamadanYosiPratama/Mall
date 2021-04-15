import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import Cart from '../screens/Cart/Cart';
import CheckoutNavigator from './CheckoutNavigator';

const Stack = createStackNavigator();

function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Cart"
                component={Cart}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Checkout"
                component={CheckoutNavigator}
                options={{
                    title: 'Checkout'
                }}
            />
        </Stack.Navigator>
    )
}

export default function CartNavigator() {
    return <MyStack/>
}

const styles = StyleSheet.create({})
