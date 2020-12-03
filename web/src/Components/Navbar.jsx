
import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <SafeAreaView style={styles.navbar}>
            <Text style={styles.logo}><Link to='/'>Movie</Link></Text>
            <Text style={styles.links}><Link to='/'>Friends</Link></Text>
            <Text style={styles.links}><Link to='/'>Profile</Link></Text>
            <Button style={styles.btn}></Button>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    navbar: {
        backgroundColor: 'red',
        height: 100,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        flexDirection: 'row',
        padding: 10,
        paddingVertical: 5,
    },
    logo: {
        color: "#fff",
        marginLeft: 20,
        textDecorationStyle: "none",
        fontSize: "2rem",
    },
    btn: {
        borderRadius: 5,
        border: "none",
        outline: "none",
        fontSize: 18,
        color: "white",
        cursor: "pointer",
    },
});

