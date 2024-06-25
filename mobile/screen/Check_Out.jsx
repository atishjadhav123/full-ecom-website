import { ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Button, Card, Icon, IconButton, Snackbar, Text } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removeCart } from '../redux/slices/mobileUserSlice'

const Check_Out = ({ navigation }) => {
    const { cart } = useSelector(state => state.mobileUser)
    const dispatch = useDispatch()
    const [show, setShow] = useState(true)
    const handleSnacBar = id => {
        dispatch(removeCart(id))
        setShow(true)
        setTimeout(() => {
            setShow(false)
        }, 1000);
    }
    return <>

        {cart && cart.length > 0
            ? <>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ paddingTop: 50, padding: 15 }}>
                        <View>
                            <Text style={styles.font}>Check Out</Text>
                        </View>
                        <View style={{ paddingTop: 20, paddingLeft: 10 }}>
                            <Text style={{ fontWeight: "bold", fontSize: 18 }}>Today</Text>
                        </View>
                        <View style={{ flexDirection: "row", gap: 30, alignItems: "center", paddingLeft: 10, paddingTop: 20 }}>
                            <View>
                                <View>
                                    <Icon
                                        source='google-maps'
                                        size={40}
                                    ></Icon>
                                </View>
                            </View>
                            <View>
                                <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 16 }}>Home</Text>
                                <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>Congratulation you have succesfully buy a  </Text>
                                <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>plants </Text>
                            </View>
                            <View>
                                <Button onPress={e => dispatch(emptyCart())} mode='contained'>Empty cart</Button>
                            </View>
                        </View>
                        {cart && cart.map(item => <View key={item._id} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row", gap: 15, alignItems: "center", paddingLeft: 10, paddingTop: 40 }}>
                                <View >
                                    <Card.Cover
                                        style={{ borderRadius: 10, height: 130, width: 120 }}
                                        source={{ uri: item.images }}
                                    ></Card.Cover>
                                </View>
                                <View style={{ alignItems: 'flex-start' }}>
                                    <Text style={{ fontWeight: "bold", fontSize: 18, alignItems: 'center' }}>{item.name}</Text>
                                    <Text style={{ color: "gray", paddingTop: 3, }}>{item.desc}</Text>
                                    <Text style={{ color: "gray", paddingTop: 3, color: "green", fontWeight: "bold", fontSize: 20 }}>${item.price}</Text>
                                </View>
                            </View>
                            <IconButton onPress={e => handleSnacBar(item._id)} icon="trash-can" />
                        </View>

                        )}


                        <Button mode='contained' style={styles.inputbox}>Continue</Button>

                        <Snackbar visible={show}
                            action={{
                                label: 'ok',
                                onPress: () => {
                                    setShow(false)
                                },
                            }}>
                            Products Remove Success

                        </Snackbar>
                    </View></ScrollView>

            </>
            : <>
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
                    <Text variant='displaySmall'>Cart Is Empty</Text>
                    <Button onPress={e => navigation.navigate("main")} mode='contained'>
                        Shop Now
                    </Button>
                </View>
            </>
        }


    </>
}

export default Check_Out

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 25,
        paddingLeft: 15
    },
    inputbox: {
        backgroundColor: "green",
        padding: 10,
        fontWeight: "bold",
        marginTop: 20,
        color: "red"
    },
})