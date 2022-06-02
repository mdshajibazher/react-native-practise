import React from 'react';
import colors from '../../config/colors';
import { Text,StyleSheet,View,TouchableOpacity } from 'react-native';
function AppButton({title,onPress}) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text  style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        width: '100%',
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
})

export default AppButton;