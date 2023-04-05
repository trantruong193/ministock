import React, {useEffect, useState} from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView, Platform, Keyboard
} from "react-native";
import Color from "../constant/color";
import {color, fontSize, icons} from "../constant";
import {validEmail, validPassword} from "../utils";

function Login() {

    // state for keyboard trigger
    const [keyBoard,setKeyBoard] = useState(false)
    // state for check error
    const [emailError,setEmailError] = useState(false)
    const [passwordError,setPasswordError] = useState(false)
    // state for storing email, password
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    // add listen event keyboard behavior
    useEffect(() => {
        Keyboard.addListener('keyboardDidShow',() => {
            setKeyBoard(true)
        })
        Keyboard.addListener('keyboardDidHide',() => {
            setKeyBoard(false)
        })
        // clean up function
        return () => {
            Keyboard.removeAllListeners('keyboardDidShow')
            Keyboard.removeAllListeners('keyboardDidHide')
        }
    },[])
    
    return (
        <KeyboardAvoidingView
            style={{flex: 100, backgroundColor: Color.white}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View
                style={{
                    flex: 30,
                    marginTop: 20, flexDirection: 'row',
                    alignItems: 'center',justifyContent: 'space-around'
                }}
            >
                <Text
                    style={{width: '35%', fontSize: fontSize.fz__22}}
                >
                    You have an account already?
                </Text>
                <Image
                    style={{height: 120, width: 120, tintColor: color.primary}}
                    source={icons.computer}
                />
            </View>
            <View
                style={{flex: 20}}
            >
                <View style={{
                    marginHorizontal: 20,
                    marginVertical: 10,
                    borderBottomWidth:1,
                    borderColor: color.primary
                }}
                >
                    <Text
                        style={{color: color.primary, fontSize: fontSize.fz__16}}
                    >
                        Email
                    </Text>
                    <TextInput
                        placeholder='example@email.com'
                        placeholderTextColor={color.placeholder}
                        style={{
                            paddingVertical: 7,
                        }}
                        value={email}
                        onChangeText={text => {
                            setEmail(text)
                            if (!validEmail(text) && text !== ''){
                                setEmailError(true)
                            }else {
                                setEmailError(false)
                            }
                        }}
                    />
                </View>
                {emailError && <Text style={{color: 'red', fontSize: fontSize.fz__14, marginStart: 20}}>Email is invalid format</Text>}
                <View style={{
                        marginHorizontal: 20,
                        marginVertical: 10,
                        borderBottomWidth:1,
                        borderColor: color.primary
                    }}
                >
                    <Text
                        style={{color: color.primary, fontSize: fontSize.fz__16}}
                    >
                        Password
                    </Text>
                    <TextInput
                        placeholder='Enter your password'
                        secureTextEntry={true}
                        placeholderTextColor={color.placeholder}
                        style={{
                            paddingVertical: 7,
                        }}
                        value={password}
                        onChangeText={text => {
                            setPassword(text)
                            if (!validPassword(text) && text !== ''){
                                setPasswordError(true)
                            }else {
                                setPasswordError(false)
                            }
                        }}
                    />
                </View>
                {passwordError && <Text style={{color: 'red', fontSize: fontSize.fz__14, marginStart: 20}}>Password is invalid format</Text>}
            </View>
            {
                !keyBoard && <View
                    style={{flex: 20}}
                >
                    <TouchableOpacity
                        style={{
                            backgroundColor: color.primary,
                            width: '50%',
                            alignSelf: 'center',
                            borderRadius: '20',
                            padding: 8,
                            alignItems: 'center',
                            marginTop: 25
                        }}
                        onPress={() => alert(`Email: ${email}. Password: ${password}.`)}
                    >
                        <Text
                            style={{fontSize: fontSize.fz__20}}
                        >
                            Login
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{alignSelf: 'center', padding: 5, marginTop: 15}}
                        onPress={() => alert('You press register')}
                    >
                        <Text
                            style={{color: color.primary}}
                        >
                            New user? Register now
                        </Text>
                    </TouchableOpacity>
                </View>
            }
            <View
                style={{flex: 20}}
            >
                <View style={{height: 40,flexDirection: 'row',alignItems: 'center',marginHorizontal: 10}}>
                    <View style={{flex: 1,height:1,backgroundColor: color.black}}></View>
                    <Text
                        style={{
                            padding: 8,
                            fontSize: fontSize.fz__18,
                            marginHorizontal: 10
                        }}
                    >
                        Use other methods?
                    </Text>
                    <View style={{flex: 1,height: 1,backgroundColor: color.black}}></View>
                </View>
                <View
                    style={{flexDirection: 'row',justifyContent: 'center'}}
                >
                    <Image
                        source={icons.google}
                        style={{height: 40, width: 40,margin: 5}}
                    />
                    <Image
                        source={icons.facebook}
                        style={{height: 40, width: 40, margin: 5}}
                    />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login;