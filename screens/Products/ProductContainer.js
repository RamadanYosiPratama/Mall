import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View,Dimensions, ScrollView } from 'react-native'
import { Container, Header, Icon, Item, Input} from 'native-base';
import ProductList from './ProductList'
import SearchedProducts from './SearchedProducts';
import Banner from '../../Shared/Banner';
import CategoryFilter from './CategoryFilter';

const data = require('../../assets/data/products.json')
const Productscategories = require('../../assets/data/categories.json')
var { height } = Dimensions.get("window")

const ProductContainer = (props) => {
    const [products, setProducts ] = useState({})
    const [productsFiltered, setProductsFiltered] = useState([])
    const [focus, setFocus] = useState();
    const [productsCtg, setProductsCtg] = useState([])
    const [categories, setCategories] = useState([])
    const [active, setActive] = useState()
    const [initialState, setInitialState] = useState([])

    useEffect(() => {
        setProducts(data);
        setProductsFiltered(data);
        setFocus(false);
        setCategories(Productscategories)
        setActive(-1)
        setProductsCtg(data)
        setInitialState(data)

        return() => {
            setProducts([])
            setProductsFiltered([])
            setFocus()
            setCategories([])
            setActive()
            setInitialState()
            // setProductsCtg(data)
        }
    }, [])

    const searchProduct = (text) => {
        setProductsFiltered(
            products.filter((i) => i.name.toLowerCase().includes(text.toLowerCase()))
        )
    }

    const openList = () => {
        setFocus(true)
    }

    const onBlur = () => {
        setFocus(false);
    }

    //Categories
  const changeCtg = (ctg) => {
    {
      ctg === "all"
        ? [setProductsCtg(initialState), setActive(true)]
        : [
            setProductsCtg(
              products.filter((i) => i.category.$oid === ctg),
              setActive(true)
            ),
          ];
    }
  };

    return (
        <Container>
            <Header searchBar rounded>
                <Item>
                    <Icon name="ios-search"/>
                    <Input
                        placeholder="Search"
                        onFocus={openList}
                        onChangeText={(text) => searchProduct(text)}
                    />
                    {focus == true ? (
                        <Icon onPress={onBlur} name="ios-close"/>
                    ) : null}
                </Item>
            </Header>
            {focus == true ? (
                <SearchedProducts
                navigation={props.navigation}
                    productsFiltered={productsFiltered}
                />
            ) : (
            <ScrollView>
            <View>
                <Banner/>
            </View>
            <View>
                <CategoryFilter
                    categories={categories}
                    categoryFilter={changeCtg}
                    productsCtg={productsCtg}
                    active={active}
                    setActive={setActive}
                />
            </View>
            {productsCtg.length > 0 ? (
                <View style={styles.listContainer}>
           {productsCtg.map((item) => {
               return(
                   <ProductList
                       navigation={props.navigation}
                       key={item.name}
                       item={item}
                   />
               )
           })}
       </View>
       ) : (
           <View style={[styles.center, { height: height / 2}]}>
               <Text>No products found</Text>
           </View>
       )}
            
        </ScrollView>
            )}
        </Container>
    )
}

export default ProductContainer

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gainsboro',
        marginBottom: 100
    },
    listContainer: {
    height: height,
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "gainsboro",
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})