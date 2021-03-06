import { Container, H1, Left, Right } from 'native-base';
import React from 'react';
import { Button, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { connect } from 'react-redux';
import * as actions from "../../Redux/Actions/cartActions";
import CartItem from './CartItem';
import Icon from "react-native-vector-icons/FontAwesome";


var {height, width} = Dimensions.get("window")
const Cart = (props) => {
    var total = 0;
    props.cartItems.forEach(cart => {
        return (total += cart.product.price)
    })
    return (
        <>
        {props.cartItems.length ? (
        <Container>
            <H1 style={{ alignSelf: "center"}}>Cart</H1>
                <SwipeListView
                    data={props.cartItems}
                    renderItem={(data) => (
                        <CartItem item={data}/>
                    )}
                    renderHiddenItem={(data) => (
                        <View style={styles.hiddenContainer}>
                            <TouchableOpacity style={styles.hiddenButton}
                            onPress={() => props.removeFromCart(data.item)}
                            >
                                <Icon name="trash" color={"white"} size={30}/>
                            </TouchableOpacity>
                        </View>
                    )}
                    disableRightSwipe={true}
                    previewOpenDelay={3000}
                    friction={1000}
                    tension={40}
                    leftOpenValue={75}
                    stopLeftSwipe={75}
                    rightOpenValue={-75}
                />
                {/* {props.cartItems.map((data) => {
                    return (
                        <CartItem item={data}/>
                    )
                })} */}
            <View style={styles.bottomContainer}>
                <Left>
                    <Text style={styles.price}>$ {total}</Text>
                </Left>
                <Right>
                    <Button title="Clear"
                        onPress={() => props.clearCart()}
                    />
                </Right>
                <Right>
                    <Button title="Checkout" 
                    onPress={() => props.navigation.navigate('Checkout')}/>
                </Right>
            </View>
        </Container>
        ) : (
            <Container style={styles.emptyContainer}>
                <Text>Looks like your cart is empty</Text>
                <Text>Add Products to your cart to get Started</Text>
            </Container>
        )}
        </>
    )
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//         clearCart: () => dispatch(actions.clearCart())
//     }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    clearCart: () => dispatch(actions.clearCart()),
    removeFromCart: (item) => dispatch(actions.removeFromCart(item))
    }
}

const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
        cartItems: cartItems
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);

const styles = StyleSheet.create({
    emptyContainer: {
        height: height,
        alignItems: "center",
        justifyContent: "center",
      },
      bottomContainer: {
          flexDirection: 'row',
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: 'white',
          elevation: 20
      },
      price: {
          fontSize: 18,
          margin: 20,
          color: 'red'
      },
      hiddenContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        flexDirection: 'row'
      },
      hiddenButton: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 25,
        height: 70,
        width: width / 1.2
      }
})
