import React from 'react';

import {Image,StyleSheet,View} from 'react-native';
function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
        <Image style={styles.image} source={require('../assets/chair.jpg')} />
        </View>
    );
}
const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: "#fc5cc5",
        position: "absolute",
        top: 111,
        left: 30
    },
    image: {
        width: '100%',
        height: '100%',
    },
    container: {
        backgroundColor: "#000",
        flex: 1
    }
})

export default ViewImageScreen;