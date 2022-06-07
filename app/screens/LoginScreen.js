import React, {useState} from 'react';
import {StyleSheet,Image} from 'react-native';
import Screen from './Screen';
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton';

function LoginScreen(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return (
        <Screen>
            <Image 
                source={require('../assets/logo-red.png')}
                style={styles.logo}
             />
             <AppTextInput 
                 placeholder="Enter Email"
                icon="email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                onChangetext={text => setEmail(text)}
               />

            <AppTextInput 
                placeholder="Enter Password"
                icon="form-textbox-password"
                autoCapitalize="none"
                autoCorrect={false}
                textContentType="password"
                secureTextEntry={true}
                onChangetext={text => setPassword(text)}
            />

            <AppButton 
                title="login"
                onPress={() => console.log('email',email,'password',password)}
            />
        </Screen>
    );
}
const styles = StyleSheet.create({
    logo:{
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20 
    }
})
export default LoginScreen;