import React from 'react';
import { SafeAreaView,Platform,StatusBar,StyleSheet } from 'react-native';
function Screen(props) {

    return (
        <SafeAreaView style={styles.screen}>
           {props.children}
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingLeft: 10,
        paddingRight: 10,
    }
})
export default Screen;