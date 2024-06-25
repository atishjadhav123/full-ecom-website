import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const OTP = () => {
    return (
        <View style={{ paddingTop: 92, padding: 20, }}>
            <View>
                <Text style={styles.font}>Enter Otp Code</Text>
            </View>
            <View>
                <Text style={styles.sing} >An 4 digits code has been sent to  </Text>
                <Text style={{ paddingTop: 5, fontSize: 12, color: "green", paddingLeft: 95, }} >jaythale2522@gmail.com</Text>
            </View>
            <View style={{ flexDirection: "row", gap: 20, paddingTop: 60 }}>
                <TextInput
                    style={styles.Formcontrol}
                    mode="outlined"
                    keyboardType='number-pad'
                />
                <TextInput
                    style={styles.Formcontrol}
                    mode="outlined"
                    keyboardType='number-pad'
                />
                <TextInput
                    style={styles.Formcontrol}
                    mode="outlined"
                    keyboardType='number-pad'
                />
                <TextInput
                    style={styles.Formcontrol}
                    mode="outlined"
                    keyboardType='number-pad'
                />
            </View>
            <View style={{ flexDirection: "row", gap: 20, justifyContent: "center", alignItems: "center", paddingTop: 60 }}>
                <Button style={{ flex: 1 }} mode='contained'> Reset</Button>
                <Button style={{ flex: 1 }} mode='contained'> Submit</Button>
            </View>

        </View >
    )
}

export default OTP

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 25,
        paddingLeft: 40
    },
    sing: {
        paddingLeft: 60,
        fontSize: 14,
        paddingTop: 25
    },
})