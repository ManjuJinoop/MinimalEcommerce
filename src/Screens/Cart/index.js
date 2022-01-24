import React, {useState,useEffect} from 'react';  
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView,ScrollView ,FlatList} from 'react-native';  
import { CustomInput  } from '../../Components/CustomInput' ;
import { CustomButton } from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen'; 
import Geolocation from '@react-native-community/geolocation';

function Cart({ navigation ,route }) {
  const { Param }             = route.params; 
  const [currentLongitude,setCurrentLongitude] = useState('...');
  const [currentLatitude,setCurrentLatitude]   = useState('...');

  useEffect(() => {
    getOneTimeLocation();
  }, []);
  
  const getOneTimeLocation = () => {
    Geolocation.getCurrentPosition(//Will give you the current location
      (position) => {
        const currentLongitude = position.coords.longitude;//getting the Latitude from the location json
        const currentLatitude  = position.coords.latitude;//Setting Longitude state
        setCurrentLongitude(currentLongitude);//Setting Longitude state
        setCurrentLatitude(currentLatitude); 
    },
    )
  }
    return ( 
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView  enableOnAndroid={Platform.OS === 'android'} enableAutomaticScroll={true} >
                <ScrollView contentContainerStyle={styles.commonWrapper}>
                  <View style={{margin:20}}>  
                    <Text style={styles.welcome}> Cart</Text> 
                    <FlatList style={styles.list}
                        contentContainerStyle={styles.listContainer}
                        data={Param}
                        horizontal={false}
                        scrollEnabled={true}
                        numColumns={1}
                        keyExtractor={(item) => {
                        return item.id;
                        }}
                        renderItem={({ item }) => {
                          return (
                            <View style={{margin:5,borderColor:'grey',borderWidth:1.5,width:300,borderRadius:.5}}>
                            <Text style={{color:'black',alignSelf:'center',margin:16}}>{item.title}</Text>
                              
                              </View> )
                            }} />
                        
                        <CustomButton
                            style    ={{marginTop : heightPercentageToDP(7)}}
                            height1  ={heightPercentageToDP(7)}
                            width1   ={'100%'}
                            onPress  ={() => navigation.navigate('Checkout',{Param2:currentLongitude,Param1:currentLatitude})}
                            title    ='Checkout ' 
                        /> 
                       
                </View> 
              </ScrollView>
            </KeyboardAwareScrollView>
          </SafeAreaView>
    );  
  }  
export default  Cart;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
},  
list: {
  paddingHorizontal: 5,
  backgroundColor  : "#fff",
},
listContainer: {
  marginTop : 40,
  alignItems: 'center'
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