import React from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
import {View,Alert} from 'react-native';
import AppText from './app/components/AppText';
import { MaterialIcons } from '@expo/vector-icons'; 
import AppButton from './app/components/AppButton';

export default function App() {

    const handleOnPress = () => {
        Alert.alert('Hello World');

    }


    return (
        // <WelcomeScreen/>
        // <ViewImageScreen/>

        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <View style={{
                padding: 10,
                width: 100,
                height: 100,
                backgroundColor: 'dodgerblue',
                // shadowColor: 'red',
                // shadowOffset: {width: 0, height: 10},
                // shadowOpacity: 1,
                elevation: 20
            }}>
                 <View style={{
                        width: 50,
                        height: 50,
                        backgroundColor: 'gold',
                        elevation: 20
                    }}>
                </View>
            </View>
            <AppText>Hello World <MaterialIcons name="email" color={'dodgerblue'} size={28} /></AppText>
            <AppButton title='login' onPress={() => handleOnPress()}/>
        </View>
    );
}

