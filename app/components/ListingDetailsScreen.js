import React from 'react';
import {View,Image,Text,StyleSheet} from 'react-native';
import AppText from './AppText';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}></Image>
            <View class={styles.detailsContainer}>
                <AppText>Red Jacket for sale</AppText>
                <AppText>Price 100</AppText>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer:{
        padding: 20,
        margin: 20
    }
})

export default ListingDetailsScreen;