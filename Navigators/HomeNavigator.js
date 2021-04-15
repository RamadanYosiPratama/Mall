import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import ProductContainer from '../screens/Products/ProductContainer';
import SingleProduct from '../screens/Products/SingleProduct';
import Cart from '../screens/Cart/Cart';
import Checkout from '../screens/Cart/Checkout/Checkout';
import CartNavigator from './CartNavigator';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={ProductContainer}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name="Product Detail"
                component={SingleProduct}
                options={{
                    headerShown: false
                }}
            />
            {/* <Stack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: false
                }}
            /> */}
             {/* <Stack.Screen
                name="Checkout"
                component={CartNavigator}
                options={{
                    headerShown: false
                }}
            /> */}
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return <MyStack/>
}