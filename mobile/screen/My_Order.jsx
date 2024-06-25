import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Card, Icon } from 'react-native-paper'
import { ScrollView } from 'react-native'


const My_Order = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop: 50, padding: 15 }}>
                <View style={{ flexDirection: "row", paddingLeft: 15, alignItems: 'center' }}>
                    <View>
                        <Icon
                            source='basket-check-outline'
                            size={30}
                        ></Icon>
                    </View>
                    <View>
                        <Text style={styles.font}>My Cart</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 15, alignItems: "center", paddingLeft: 10, paddingTop: 40 }}>
                    <View >
                        <Card.Cover
                            style={{ borderRadius: 10, height: 130, width: 120 }}
                            source={{ uri: "https://images.unsplash.com/photo-1517229581671-6aeb58910de4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                        ></Card.Cover>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, alignItems: 'center' }}>Variegated Snake</Text>
                        <Text style={{ color: "gray", paddingTop: 3, }}>Indoor</Text>
                        <Text style={{ color: "gray", paddingTop: 3, color: "green", fontWeight: "bold", fontSize: 20 }}>$25.00</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 15, alignItems: "center", paddingLeft: 10, paddingTop: 40 }}>
                    <View >
                        <Card.Cover
                            style={{ borderRadius: 10, height: 130, width: 120 }}
                            source={{ uri: "https://images.unsplash.com/photo-1517229581671-6aeb58910de4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                        ></Card.Cover>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, alignItems: 'center' }}>Variegated Snake</Text>
                        <Text style={{ color: "gray", paddingTop: 3, }}>Indoor</Text>
                        <Text style={{ color: "gray", paddingTop: 3, color: "green", fontWeight: "bold", fontSize: 20 }}>$25.00</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 15, alignItems: "center", paddingLeft: 10, paddingTop: 40 }}>
                    <View >
                        <Card.Cover
                            style={{ borderRadius: 10, height: 130, width: 120 }}
                            source={{ uri: "https://images.unsplash.com/photo-1517229581671-6aeb58910de4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                        ></Card.Cover>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, alignItems: 'center' }}>Variegated Snake</Text>
                        <Text style={{ color: "gray", paddingTop: 3, }}>Indoor</Text>
                        <Text style={{ color: "gray", paddingTop: 3, color: "green", fontWeight: "bold", fontSize: 20 }}>$25.00</Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row", gap: 15, alignItems: "center", paddingLeft: 10, paddingTop: 40 }}>
                    <View >
                        <Card.Cover
                            style={{ borderRadius: 10, height: 130, width: 120 }}
                            source={{ uri: "https://images.unsplash.com/photo-1517229581671-6aeb58910de4?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }}
                        ></Card.Cover>
                    </View>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={{ fontWeight: "bold", fontSize: 18, alignItems: 'center' }}>Variegated Snake</Text>
                        <Text style={{ color: "gray", paddingTop: 3, }}>Indoor</Text>
                        <Text style={{ color: "gray", paddingTop: 3, color: "green", fontWeight: "bold", fontSize: 20 }}>$25.00</Text>
                    </View>
                </View>
            </View></ScrollView>
    )
}

export default My_Order

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 25,
        paddingLeft: 15
    },
})