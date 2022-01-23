import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
export const CustomButton = (props) => {
    const {
        width1,
        height1, 
        onPress,
        title,
        style,
        disabled,
        icon,
        titleStyle } = props;
    return (
        <TouchableOpacity
            style={[styles.largeButtonContainer, style,{height:height1},{width:width1},
            disabled && { borderColor: 'rgba(0,0,0,0.2' }
            ]}
            onPress={onPress}
            activeOpacity={0.5}
            disabled={disabled}
        >
            <View style={styles.Buttonstyle}> 
                <Text style={[styles.largeButtonText, titleStyle,
                disabled && { color: 'rgba(0,0,0,0.2' }
                ]}>{title}</Text>
                <Text>   </Text>
                {/*{Boolean(icon) && InputIcon(icon)}*/}
            </View>
        </TouchableOpacity>
    )
}




const styles = StyleSheet.create({
    largeButtonContainer: {
        //backgroundColor: 'white',
        //width          :'90%',
        borderWidth    : 2,
        //height         : heightPercentageToDP(7),
        borderRadius   : 12,
        justifyContent : 'center',
        //marginTop      : '3%',
        //margin         : '3%',
        borderColor    : 'black', 
        backgroundColor: 'grey'

    },
    largeButtonText: {
        fontSize      : 16,
        color         : 'white',
        textAlign     : "center",
        justifyContent: 'center',
        fontFamily    : "Roboto-Bold",
        fontWeight    :'bold'
    },
    Buttonstyle: {
        height        : '100%',
        justifyContent: 'center',
        alignItems    : 'center',
        borderRadius  : 15,
        flexDirection : 'row',
        
    }

});