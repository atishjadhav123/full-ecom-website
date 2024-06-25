import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Appbar, Avatar, Button, TextInput } from 'react-native-paper'

const EditProfiles = () => {
    return <>
        <View>
            <View>
                <Appbar.Header>
                    <Appbar.Action icon='keyboard-backspace' />
                    <Appbar.Content title='Edit Profile' />
                </Appbar.Header>
            </View>
            <View style={{ paddingLeft: 100, paddingTop: 10 }}>
                <View style={{ paddingLeft: 30, paddingTop: 10 }}>
                    <Avatar.Image size={120} source="https://images.unsplash.com/photo-1718062455464-75f9a6375127?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                </View>
            </View>

            <View style={{ padding: 5, gap: 20, }}>
                <View>
                    <Text style={styles.input}>Full Name</Text>
                    <TextInput mode='contained' style={styles.input} left={<TextInput.Icon icon='account' />} placeholder='John Doe' />
                </View>
                <View>
                    <Text style={styles.input}>Email</Text>
                    <TextInput style={styles.input} mode='contained' left={<TextInput.Icon icon='account' />} placeholder='John@gmail.com' />
                </View>
                <View>
                    <Text style={styles.input}>No Phone</Text>
                    <TextInput style={styles.input} mode='contained' left={<TextInput.Icon icon='account' />} placeholder='287293234' />
                </View>
                <View>
                    <Text style={styles.input}>Gender</Text>
                    <TextInput style={styles.input} mode='contained' left={<TextInput.Icon icon='account' />} placeholder='Male' />
                </View>
                <View>
                    <Button mode='contained'>Login</Button>
                </View>
            </View>
        </View>
    </>
}

export default EditProfiles

const styles = StyleSheet.create({
    input: {
        fontWeight: "bold",
        backgroundColor: 'white'
    }
})