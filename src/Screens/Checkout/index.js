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

function Checkout({ navigation }) {
    return ( 
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView  enableOnAndroid={Platform.OS === 'android'} enableAutomaticScroll={true} >
                <ScrollView contentContainerStyle={styles.commonWrapper}>
                  <View style={{margin:20}}>  
                    <Text style={styles.welcome}>give Your Address</Text> 
                       
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'place'}
                            style          ={{fontSize:35}}
                        />
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'post'}
                            style          ={{fontSize:35}}
                        />
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'bechmark'}
                            style          ={{fontSize:35}}
                        />
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'pincode'}
                            style          ={{fontSize:35}}
                        />
                        
                        <CustomButton
                            style    ={{marginTop       : heightPercentageToDP(7)}}
                            height1  ={heightPercentageToDP(7)}
                            width1   ={'100%'}
                            //onPress  ={() => navigation.navigate('ProductList')}
                            title    =' Place your order ' 
                        /> 
                       
                </View> 
              </ScrollView>
            </KeyboardAwareScrollView>
          </SafeAreaView>
    );  
  }  
export default  Checkout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
},  
  welcome: {  
    marginTop: heightPercentageToDP(10),
    fontSize : 19,  
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