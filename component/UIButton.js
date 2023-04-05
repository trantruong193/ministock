import React from 'react';
import {Image, Text, TouchableOpacity} from "react-native";
import {color, fontSize, icons} from "../constant";


function UiButton({text,check,onPress}) {
    return (
        <TouchableOpacity style={{

            backgroundColor: check?color.white:null,
            paddingVertical: 8,
            marginHorizontal: 20,
            marginVertical: 10,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: 'white',
            alignItems: 'center',
            position: 'relative'
        }}
            onPress={onPress}
        >
            {check &&
                <Image
                    source={icons.check}
                    style={{ width: 20, height: 20,
                        position: 'absolute', top: 10, left: 10
                    }}
                />
            }
            <Text style={{fontSize: fontSize.fz__18, color: check?color.black:color.white}}>{text}</Text>
        </TouchableOpacity>
    );
}

export default UiButton;
