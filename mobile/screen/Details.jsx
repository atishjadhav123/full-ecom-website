import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, IconButton, Snackbar, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/slices/mobileUserSlice'

const Details = ({ navigation, route }) => {
    const { product } = route.params
    const [qty, setQty] = useState(1)
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.mobileUser)
    const [show, setShow] = useState(false)
    const handleSnacBar = e => {
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 4000)
    }
    return <>
        <View style={{ flex: 1 }}>
            <View
                style={{ marginBottom: 20, padding: 20 }}>
                <Card style={{ width: "100%", marginTop: 20 }}>
                    <Card.Cover
                        style={{ borderRadius: 10, objectFit: "cover" }}
                        source={{ uri: product.images }}
                    />
                    <Card.Content>
                        <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 18 }}>{product.name}</Text>
                        <Text style={{ color: "gray", paddingTop: 6 }}>{product.desc}</Text>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <IconButton onPress={() => setQty(qty + 1)} icon="plus-thick" />
                            <Text variant='bodyLarge'>{qty}</Text>
                            <IconButton onPress={() => setQty(qty - 1)} icon="minus" />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ color: "green", paddingTop: 6, fontWeight: "bold", flex: 1, fontSize: 20 }}> ₹.{product.price}</Text>
                            <Button
                                disabled={Boolean(cart.find(item => item._id === product._id))}
                                mode='contained'
                                onPress={() => {
                                    dispatch(addToCart(product))
                                    handleSnacBar()
                                }}>Add To Cart</Button>
                            {/* <Button mode='contained'>Buy Now</Button> */}
                        </View>
                    </Card.Content>
                </Card>
            </View>
            <Snackbar visible={show} onDismiss={() => setShow(false)}
                action={[{ label: "Ok", onPress: e => setShow(false) }]}>
                Product Added To Cart
            </Snackbar>
        </View>
    </>
}

export default Details

const styles = StyleSheet.create({})