import React, {useState} from 'react';
import {Image, ImageBackground, Text, View} from "react-native";
import {color, fontSize, icons, images} from "../constant";
import {UIButton} from "../component";

function Welcome() {

    const [check,setCheck] = useState('influence')

    return (
        <View
            style={{flex: 1}}
        >
            <ImageBackground
                style={{flex: 100}}
                source={images.bgi}
                resizeMode='cover'
            >
                <View style={{flex:10, marginTop: 20}}>
                    <View style={{
                        height: 50,
                        alignItems: 'center',
                        flexDirection: 'row'
                    }}
                    >
                        <Image
                            source={icons.fire}
                            style={{width: 40, height: 40, marginHorizontal: 5}}
                        />
                        <Text style={{
                            color: color.white,fontWeight: 'bold', fontSize: fontSize.fz__18
                        }}
                        >
                            COMPANY.CO
                        </Text>
                        <View style={{flex: 1}}/>
                        <Image
                            source={icons.question}
                            style={{width:20,height:20,marginEnd: 5,tintColor: color.white}}
                        />
                    </View>
                </View>
                <View style={{flex: 15, justifyContent: 'center', alignItems:'center'}}>
                    <Text style={{color: color.white, paddingVertical: 5, fontSize: fontSize.fz__16}}>Welcome to</Text>
                    <Text style={{fontWeight: 'bold', color: color.white, paddingVertical: 5, fontSize: fontSize.fz__16}}>COMPANY.CO !</Text>
                    <Text style={{color: color.white, paddingVertical: 5}}>Please choose your account type</Text>
                </View>
                <View style={{flex: 40,justifyContent: 'center'}}>
                    <View>
                        <UIButton text='Influence' check={check==='influence'} onPress={() => setCheck('influence')}/>
                        <UIButton text='Business' check={check==='business'} onPress={() => setCheck('business')}/>
                        <UIButton text='Individual' check={check==='individual'} onPress={() => setCheck('individual')}/>
                    </View>
                </View>
                <View style={{flex: 20}}>
                    <UIButton text={'Login'.toUpperCase()} onPress={() => alert('You touch login')}/>
                    <Text style={{alignSelf: 'center',color: color.white,marginTop: 10}}>Want to register new account?</Text>
                    <Text style={{alignSelf: 'center',color: color.white,marginTop: 10,textDecorationLine: 'underline'}}>
                        Register
                    </Text>
                </View>
            </ImageBackground>
        </View>
    );
}
export default Welcome;
