import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Avatar, Icon } from 'react-native-paper'

const Profile = () => {
    return (
        <ScrollView>
            <View style={{ paddingTop: 50, padding: 20 }}>
                <View style={{ flexDirection: "row", alignItems: 'center', gap: 160 }}>
                    <View style={{ flexDirection: "row", paddingLeft: 5, alignItems: 'center' }}>
                        <Icon
                            source='account'
                            size={30}
                        ></Icon>
                        <View style={{ gap: 300 }}>
                            <Text style={styles.Profile}>Profile</Text>
                        </View>
                    </View >
                    <View>
                        <Icon
                            source='dots-horizontal'
                            size={30}
                        ></Icon>
                    </View>
                </View>
                <View style={{ gap: 75, flexDirection: 'row', alignItems: "center", paddingTop: 20 }}>

                    <View style={{ flexDirection: 'row', gap: 9, alignItems: "center" }}>
                        <View>
                            <Avatar.Image size={60} source={require('../assets/icon.png')} />
                        </View>
                        <View>
                            <Text style={styles.font}>JOHN</Text>
                            <Text style={{ paddingLeft: 5 }} >0857-9658-4521</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", margin: 15 }}>
                        <Icon
                            source='notebook-edit-outline'
                            size={25}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <View style={{ paddingTop: 25, fontSize: 2 }}>
                        <Text style={{ fontSize: 15, color: "gray", fontWeight: "bold" }}>General</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 200, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='book-account'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}> My Order</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: 200, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='book-account'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}> My Order</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ paddingTop: 25, fontSize: 2 }}>
                        <Text style={{ fontSize: 15, color: "gray", fontWeight: "bold" }}>Account Setting</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 205, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='google-maps'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}> Address</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: 205, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='wallet'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}>Payment</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: 190, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='eye-outline'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}> Dark Mode</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: 213, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='logout'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}> Logout</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={{ paddingTop: 25, fontSize: 2 }}>
                        <Text style={{ fontSize: 15, color: "gray", fontWeight: "bold" }}>App Setting</Text>
                    </View>
                    <View style={{ flexDirection: "row", gap: 200, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='book-account'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}>Lagguage</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", gap: 190, paddingTop: 20 }}>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Icon
                                source='bell'
                                size={25}
                            ></Icon>
                            <Text style={{ fontWeight: "bold" }}>Notification</Text>
                        </View>
                        <View>
                            <Icon
                                source='chevron-right'
                                size={25}
                            ></Icon>
                        </View>
                    </View>
                </View>
            </View >
        </ScrollView>
    )
}

export default Profile

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 15,
        paddingLeft: 5,
        paddingBottom: 8,
    },
    Profile: {
        fontWeight: "bold",
        fontSize: 25,
        paddingLeft: 15
    },
})