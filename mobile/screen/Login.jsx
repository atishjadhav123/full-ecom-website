import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useMobileLoginUserMutation } from '../redux/apis/mobileAuthApi'
import { Button, RadioButton, TextInput } from 'react-native-paper'
import asyncStorage from '@react-native-async-storage/async-storage'

const Login = ({ navigation }) => {
    const [User, setUser] = useState({})
    const [MobileloginUser, { data, isSuccess, isLoading }] = useMobileLoginUserMutation()

    const setAsyncStorage = async () => {
        await asyncStorage.setItem("mobileAuth", JSON.stringify(data))
    }
    useEffect(() => {
        if (isSuccess) {
            setAsyncStorage()
            navigation.navigate('Home')
        }
    }, [isSuccess])
    useEffect(() => {
        asyncStorage.getItem("mobileAuth")
            .then(res => {
                if (res) {
                    navigation.navigate('Home')
                }
            })
            .catch(err => console.warn(err.message))
    })
    return (
        <View style={{ paddingTop: 50, padding: 15, gap: 20 }}>
            <View>
                <Text style={styles.font}>Login Page</Text>
            </View>
            <View>
                {isSuccess && <Text style={{ backgroundColor: "green", color: "white", padding: 2 }}>User SuccessFully Login</Text> && navigation.navigate("Home")}
            </View>
            <View style={{ gap: 10 }}>
                <Text style={styles.input} variant='bodySmall'>Email</Text>
                <TextInput
                    onChangeText={val => setUser({ ...User, email: val })}
                    style={styles.Formcontrol}
                    mode="outlined"
                    left={<TextInput.Icon icon="mail" />}
                    placeholder='Type Your Email'
                />
            </View>
            <View style={{ gap: 10 }}>
                <Text s style={styles.input} variant='bodySmall'>Password</Text>
                <TextInput
                    onChangeText={val => setUser({ ...User, password: val })}
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
                MobileloginUser(User)
            }} mode='contained'>{isLoading ? "Loading..." : "Sign In"}</Button>
            <Text style={{ color: "black", fontWeight: "bold" }}>Don't Have an Account? <Text onPress={e => navigation.navigate("Register")} style={{ color: "blue", fontWeight: "bold" }}>Register</Text></Text>
        </View>
    )
}




export default Login

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