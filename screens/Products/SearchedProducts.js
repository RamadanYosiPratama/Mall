import { Content, Left, Body, ListItem, Thumbnail } from 'native-base';
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

var {width} = Dimensions.get("window")

const SearchedProducts = (props) => {
    const { productsFiltered } = props;
    return (
        <Content style={{ width: width}}>
            {productsFiltered.length > 0 ? (
                productsFiltered.map((item) => (
                    <ListItem
                    onPress={() => {
                        props.navigation.navigate("Product Detail", {item})
                    }}
                    key={item._id}
                    avatar
                    >
                    <Left>
                        <Thumbnail
                            source={{uri: item.image ? item.image
                            : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
                            }}
                        />
                    </Left>
                    <Body>
                        <Text>{item.name}</Text>
                        <Text note>{item.description}</Text>
                    </Body>
                    </ListItem>
                ))
            ) : (
                <View style={styles.center}>
                    <Text style={{alignSelf: 'center'}}>
                        No Products match the selected criteria
                    </Text>
                </View>
            )}
        </Content>
    )
}

export default SearchedProducts

const styles = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})
