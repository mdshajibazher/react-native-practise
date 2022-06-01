import React from 'react';
import { ImageBackground,StyleSheet,View,Image,Text } from 'react-native';
import { clearErrors } from 'react-native/Libraries/LogBox/Data/LogBoxData';
import colors from '../../config/colors';

function WelcomeScreen(props) {
    return (
    <ImageBackground source={require('../assets/background.jpg')}style={styles.background}>
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require('../assets/logo-red.png')} />
                <Text>Sell what you dont need</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: 'center'
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        alignItems:"center",
        position: 'absolute',
        top: 90,
    }
})

export default WelcomeScreen;