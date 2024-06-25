import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, RadioButton, TextInput } from 'react-native-paper'
import { useMobileRegisterUserMutation } from '../redux/apis/mobileAuthApi'

const Register = ({ navigation }) => {
    const [users, setUsers] = useState({})
    const [MobileRegister, { isSuccess, isLoading }] = useMobileRegisterUserMutation()
    if (isSuccess) {
        navigation.navigate("Login")
    }
    return (
        <View style={{ paddingTop: 50, padding: 15, gap: 20 }}>
            <View>
                <Text style={styles.font}>Create Your </Text>
                <Text style={styles.font}>Account </Text>
            </View>
            <View>
                {isSuccess && <Text style={{ backgroundColor: "green", color: "white", padding: 2 }}>User SuccessFully Registerd</Text> && navigation.navigate("Home")}
            </View>
            <View style={{ gap: 10 }}>
                <Text style={styles.input} variant='bodySmall'>Full Name</Text>
                <TextInput
                    onChangeText={val => setUsers({ ...users, name: val })}
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="account" />}
                    placeholder='Type Your Name'

                />
            </View>
            <View style={{ gap: 10 }}>
                <Text style={styles.input} variant='bodySmall'>Email</Text>
                <TextInput
                    onChangeText={val => setUsers({ ...users, email: val })}
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="mail" />}
                    placeholder='Type Your Email'
                />
            </View>
            <View style={{ gap: 10 }}>
                <Text s style={styles.input} variant='bodySmall'>Password</Text>
                <TextInput
                    onChangeText={val => setUsers({ ...users, password: val })}
                    secureTextEntry
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="eye" />}
                    placeholder='Type Your Password'
                />
            </View>
            <View style={{ flexDirection: 'row', gap: 110, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: "center", }}>
                    <RadioButton value='female' />
                    <Text>Remmber Me</Text>
                </View>
                <View>
                    <Text style={styles.text}>Forget Password</Text>
                </View>
            </View>
            <Button onPress={e => {
                MobileRegister(users)
            }} mode='contained'>{isLoading ? "Loading..." : "Sign Up"}</Button>

            <Text style={{ color: "black", fontWeight: "bold" }}>Already Have an Account? <Text onPress={e => navigation.navigate("Login")} style={{ color: "blue", fontWeight: "bold" }}>Login</Text></Text>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    font: {
        fontWeight: "bold",
        fontSize: 30,
    },
    input: {
        fontWeight: "bold",
    },
    inputbox: {
        backgroundColor: "green",
        padding: 10,
    },
    box: {
        backgroundColor: "white"
    },
    text: {
        fontWeight: "bold",
    }

})