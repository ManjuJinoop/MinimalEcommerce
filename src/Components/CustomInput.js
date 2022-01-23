import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';



export const CustomInput = (props) => {
    const { inputStyle,
        secureTextEntry,
        label,
        icon,
        placeholderText,
        onChangeText,
        value,
        errorMessage,
        keyboardType,
        maxLength,
        editable,
        required } = props

    return (
        <View style={{ ...inputStyle, marginBottom: heightPercentageToDP(2) }}>

          <Text style={[styles.label]}>{label}</Text> 
            <View style={[styles.input]}>
               
             
                <TextInput style={[editable === false ]}
                    editable       ={editable}
                    color          ='black'
                    keyboardType   ={keyboardType}
                    secureTextEntry={secureTextEntry}
                    placeholder    ={placeholderText}
                    //placeholderTextColor={'grey'}//
                    onChangeText   ={onChangeText}
                    value          ={value}
                    maxLength      ={maxLength}
                    width          ={'90%'}
                    placeholderTextColor={'#8D8D8D'}

                >
                </TextInput>
             
                
            </View>
            {Boolean(errorMessage) ?
                <Text style={styles.error}>{errorMessage}</Text>
                : null}
        </View>
    )
}

const styles = StyleSheet.create({

    error: {
        color           : "red",
        fontSize        : 12,
        fontFamily      : "Roboto-Regular",
        marginTop       : heightPercentageToDP(.3),
        marginHorizontal: widthPercentageToDP(5)
    },

    inputContainer: {
        flexDirection: 'row',
        marginBottom : heightPercentageToDP(.5)
    },
    input: {
        flexDirection  : 'row',
        //backgroundColor: Theme.SECONDARY_COLOR,
        borderColor    : 'black',
        borderWidth    : 1,
        height         : heightPercentageToDP(7),
        width          : '100%',
        borderRadius   : 12,
        padding        : 0,
        //paddingLeft    : heightPercentageToDP(1),
        fontSize       : 12,
        //justifyContent: 'center',
        alignItems     : 'center',
    },
    label: {
        // fontWeight: 'bold',
        fontSize: 17,
        fontFamily: "poppins",
        color:'grey',
        //marginTop: 0,
        //marginBottom: heightPercentageToDP(1),
        marginLeft: heightPercentageToDP(1),

    },



})