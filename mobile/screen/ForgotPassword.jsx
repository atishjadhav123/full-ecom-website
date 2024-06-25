import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper'

const ForgotPassword = () => {
    return (
        <View style={{ paddingTop: 50, padding: 15, gap: 20 }}>
            <View>
                <Text style={styles.font} >Forgot </Text>
                <Text style={styles.font}>Password </Text>
            </View>
            <View >
                <Text style={styles.inputV} >Don't Worry! it happens.please enter the email associated with your account</Text>
            </View>
            <View style={{ paddingTop: 25, gap: 15 }}>
                <Text style={styles.input} variant='bodySmall'>Email/Mobile Number</Text>
                <TextInput
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="account" />}
                    placeholder='Enter Your Email Or Mobile Number'

                />
            </View>
            <Button mode='contained'>Sing Up</Button>
            <View style={{ flexDirection: "row" }}>
                <Text style={styles.sing} >already have an account ? </Text>
                <Text style={{ paddingTop: 25, fontSize: 17, color: "green" }} >sing up</Text>
            </View>
        </View>
    )
}

export default ForgotPassword

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 30,
    },
    inputV: {
        // fontWeight: "bold",
        fontSize: 15,
    },
    input: {
        fontWeight: "bold"
    },
    inputbox: {
        backgroundColor: "green",
        padding: 10,
        marginTop: 10,
    },
    sing: {
        paddingLeft: 30,
        fontSize: 17,
        paddingTop: 25
    }
})