import React from 'react';
import {View,Image,StyleSheet} from 'react-native';
import colors from '../../config/colors';
import AppText from './AppText';
function Card({title,subTitle,image}) {
    return (
        <View style={styles.app_container}>
            <View style={styles.card}>
                <Image style={styles.image} source={image}/>
                <AppText >{title}</AppText>
                <AppText>{subTitle}</AppText>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: 20,
    },
    app_container:{
        padding: 10
    },
    image: {
        width: '100%',
        height: 200
    },
    text:{
        padding: 10
    }
})
export default Card;