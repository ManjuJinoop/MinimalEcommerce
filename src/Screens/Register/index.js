import React, {Component} from 'react';  
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView,ScrollView} from 'react-native';  
import { CustomInput  } from '../../Components/CustomInput' ;
import { CustomButton } from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

function Register({ navigation }) {
    return ( 
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView  enableOnAndroid={Platform.OS === 'android'} enableAutomaticScroll={true} >
                <ScrollView contentContainerStyle={styles.commonWrapper}>
                  <View style={{margin:20}}>  
                    <Text style={styles.welcome}>Sign Up</Text> 
                        <Text style={styles.userpas}>User name</Text>
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'username'}
                            style          ={{fontSize:35}}
                        />
                        <Text style={styles.userpas}>Phone Number</Text>
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'number'}
                            style          ={{fontSize:35}}
                        />
                        <Text style={styles.userpas}>Email ID</Text>
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'email'}
                            style          ={{fontSize:35}}
                        />
                        <Text   style={styles.userpas}>Password</Text>
                        <CustomInput
                            secureTextEntry={true}
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'*******'}
                            style          ={{fontSize:35}}
                        />
                        <CustomButton
                            style    ={{marginTop       : heightPercentageToDP(7)}}
                            height1  ={heightPercentageToDP(7)}
                            width1   ={'100%'}
                            onPress  ={() => navigation.navigate('Login')}
                            title    =' SignUp ' 
                        /> 
                        <View style={{flexDirection:'row' , marginTop:25,justifyContent:'flex-end',alignItems:'center'}}>
                          <Text style={styles.newuser}>Already A User ...?</Text>
                        <TouchableOpacity
                            onPress  ={() => navigation.navigate('Login')}>
                          <Text style ={styles.register}>Login</Text>
                        </TouchableOpacity>
                        </View>
                </View> 
              </ScrollView>
            </KeyboardAwareScrollView>
          </SafeAreaView>
    );  
  }  
export default  Register;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
},  
  welcome: {  
    marginTop: heightPercentageToDP(1),
    fontSize : 29,  
    textAlign: 'center',  
    color    :'black',
    fontWeight:'bold'
  }  ,
  text: {  
    //marginTop:20,
    fontSize : 17,  
    color    :'grey',
  },
 
  userpas: {  
    marginTop : heightPercentageToDP(1),
    fontSize  : 15,  
    color     :'black',
    fontStyle :'normal',
    fontWeight:'600',
  },
  commonWrapper: {
    // display: 'flex',
     //flexGrow: 1,
     justifyContent: 'center',
     margin :5
    // paddingBottom: '10%',
    //marginBottom: '10%',
},
newuser:{
  color:'grey',
  fontSize :18
},
register:{
  color:'black',
  fontSize:22
}
});  