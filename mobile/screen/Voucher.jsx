import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Card, MD3Colors, TextInput } from 'react-native-paper'

const Vouchers = () => {
    return (
        <View style={{ padding: 10, paddingTop: 20 }}>
            <View>
                <Appbar.Header>
                    <Appbar.Action icon='keyboard-backspace' />
                    <Appbar.Content title='Vouchers' />
                </Appbar.Header>
            </View>

            <View style={{ paddingTop: 15 }}>
                <TextInput
                    mode='contained'
                    left={<TextInput.Icon icon='magnify' />}
                    placeholder='Search'
                    right={<TextInput.Icon icon='reorder-horizontal' />} />
            </View>

            <View style={{ paddingTop: 20, }} >
                <Card style={{ backgroundColor: MD3Colors.primary80 }}>
                    <View style={{ paddingTop: 20, height: 20, paddingLeft: 10 }}>
                        <Avatar.Icon size={50} icon='flower' />
                    </View>
                    <Text style={{ marginLeft: 65, paddingTop: 5, fontWeight: 'bold' }}>John Doe</Text>
                    <Text style={{ paddingLeft: 70, fontWeight: 'bold' }} >Save up to $ 5.00 for buy plant</Text>
                    <Text style={{ paddingLeft: 10 }}>.....................................................................................</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                        <Text style={{ fontWeight: 'bold' }}>Your coupn code</Text>
                        <Text style={{ fontWeight: 'bold' }}>Plant777</Text>
                    </View>
                    <View>
                        <Card mode='contained'>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ paddingTop: 20, height: 20, paddingLeft: 10, }}>
                                    <Avatar.Icon size={50} icon='calendar-account' />
                                </View>
                                <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 30 }}>Valid Unit</Text>
                                <Text style={{ fontSize: 16, paddingLeft: 1, paddingTop: 30, marginLeft: 70 }}>Min Transaction</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 10, marginLeft: 60, fontWeight: 'bold' }}>Mei 31, 2023</Text>
                                <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 10, marginLeft: 40, fontWeight: 'bold' }}>$</Text>
                                <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 10, marginLeft: 10, fontWeight: 'bold', paddingBottom: 10 }}>$25.00</Text>
                            </View>
                        </Card>

                    </View>
                </Card>
            </View>


            <View style={{ paddingTop: 20, }} >
                <Card style={{ backgroundColor: "black" }}>
                    <View style={{ paddingTop: 20, height: 20, paddingLeft: 10 }}>
                        <Avatar.Icon size={50} icon='flower-tulip-outline' />
                    </View>
                    <Text style={{ marginLeft: 65, paddingTop: 5, fontWeight: 'bold', color: 'white' }}>John Doe</Text>
                    <Text style={{ paddingLeft: 70, fontWeight: 'bold', color: 'white' }} >Save up to $ 15.00 for buy plant</Text>
                    <Text style={{ paddingLeft: 10, color: 'white' }}>.....................................................................................</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10, }}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Your coupon code</Text>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Summer Plant777</Text>
                    </View>
                </Card>

                <View>
                    <Card >
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ paddingTop: 20, height: 20, paddingLeft: 10, }}>
                                <Avatar.Icon size={50} icon='calendar-account' />
                            </View>
                            <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 30 }}>Valid Unit</Text>
                            <Text style={{ fontSize: 16, paddingLeft: 1, paddingTop: 30, marginLeft: 70 }}>Min Transaction</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 10, marginLeft: 60, fontWeight: 'bold' }}>Mei 31, 2023</Text>
                            <Text style={{ fontSize: 26, paddingLeft: 10, paddingTop: 10, marginLeft: 10, fontWeight: 'bold' }}>$</Text>
                            <Text style={{ fontSize: 16, paddingLeft: 10, paddingTop: 10, marginLeft: 10, fontWeight: 'bold', paddingBottom: 10 }}>$100.00</Text>
                        </View>
                    </Card>

                </View>
            </View>

        </View>

    )
}

export default Vouchers

const styles = StyleSheet.create({})