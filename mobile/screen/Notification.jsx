import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Card, Icon, List } from 'react-native-paper'

const Notification = () => {
    return (
        <View style={{ paddingTop: 50, padding: 15 }}>
            <View style={{ flexDirection: "row", gap: 115 }}>
                <View>
                    <Text style={styles.font}>Notification</Text>
                </View>
                <View >
                    <Icon
                        source='dots-horizontal'
                        size={30}
                    ></Icon>
                </View>
            </View>
            <View style={{ paddingTop: 25, paddingLeft: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Today</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 30, alignItems: "center", paddingLeft: 10, paddingTop: 20 }}>
                <View>
                    <View>
                        <Icon
                            source='basket-check-outline'
                            size={40}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 16 }}>Payment succesfull</Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>Congratulation you have succesfully buy a  </Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>plants </Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", gap: 30, alignItems: "center", paddingLeft: 10, paddingTop: 20 }}>
                <View>
                    <View>
                        <Icon
                            source='bag-checked'
                            size={40}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 16 }}>New Service Available</Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>Congratulation you have succesfully buy a  </Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>plants </Text>
                </View>
            </View>
            <View style={{ paddingTop: 25, paddingLeft: 10 }}>
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>Yesterday</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 30, alignItems: "center", paddingLeft: 10, paddingTop: 20 }}>
                <View>
                    <View>
                        <Icon
                            source='wallet'
                            size={40}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 16 }}>New Service Available</Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>Congratulation you have succesfully buy a  </Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>plants </Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", gap: 30, alignItems: "center", paddingLeft: 10, paddingTop: 20 }}>
                <View>
                    <View>
                        <Icon
                            source='content-save-cog-outline'
                            size={40}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 16 }}>New Service Available</Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>Congratulation you have succesfully buy a  </Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>plants </Text>
                </View>
            </View>
            <View style={{ flexDirection: "row", gap: 30, alignItems: "center", paddingLeft: 10, paddingTop: 20 }}>
                <View>
                    <View>
                        <Icon
                            source='account'
                            size={40}
                        ></Icon>
                    </View>
                </View>
                <View>
                    <Text style={{ paddingTop: 6, fontWeight: "bold", fontSize: 16 }}>New Service Available</Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>Congratulation you have succesfully buy a  </Text>
                    <Text style={{ color: "gray", paddingTop: 6, fontSize: 13 }}>plants </Text>
                </View>
            </View>
            {/* <List.Section title="Accordions">
                <List.Accordion
                    title="Uncontrolled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>

                <List.Accordion
                    title="Controlled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}
                    expanded={expanded}
                    onPress={handlePress}>
                    <List.Item title="First item" />
                    <List.Item title="Second item" />
                </List.Accordion>
            </List.Section> */}
        </View >
    )
}

export default Notification

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 25,
        paddingLeft: 30
    },
})