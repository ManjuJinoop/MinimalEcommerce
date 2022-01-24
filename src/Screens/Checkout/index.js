import React, {useEffect,useState} from 'react';  
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView,ScrollView} from 'react-native';  
import { CustomInput  } from '../../Components/CustomInput' ;
import { CustomButton } from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

function Checkout({ navigation,route }) {
  const { Param1,Param2} = route.params;
  const [currentLongitude,setCurrentLongitude] = useState('...');
  const [currentLatitude,setCurrentLatitude]   = useState('...');
  const [locationStatus,setLocationStatus]     = useState('');
  const [addressComponent,setaddressComponent] = useState('');
  useEffect(() => {
    //setdataa(dataa)
    //setdataa1(dataa1)
    //setloopData2(loopData2)
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
              getOneTimeLocation();
              subscribeLocationLocation();
      } else {
        try {
              const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title  : 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) { //To Check, If Permission is granted
              //setLoader(true);
              getOneTimeLocation();//subscribeLocationLocation();
              
              
          } else {
              setLocationStatus('Permission Denied');
          }
          } catch (err) {
              console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      //Shops();
    };
  }  , []);
  Geocoder.init("AIzaSyAXlvaq7vj-M4-dN4Rnmgyu2UdfBxohf-0");
  const getOneTimeLocation = () => {
    //for (var i=0; i < 2; i++){
    //setLoader(true);
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(//Will give you the current location
      (position) => {
        setLocationStatus('Your location');//getting the Longitude from the location json
        const currentLongitude = position.coords.longitude;//getting the Latitude from the location json
        const currentLatitude  = position.coords.latitude;//Setting Longitude state
        setCurrentLongitude(currentLongitude);//Setting Longitude state
        setCurrentLatitude(currentLatitude);
        Geocoder.from(Param1,Param2)
        //lat=10.530345&lon=76.214729//not required
        //Geocoder.from(10.530345,76.214729)
        .then(JSON => { console.log(JSON);
        var addressComponent = JSON.results[0].formatted_address;
        //var addressComponent = JSON.results[0].address_components[0].long_name;
        //console.log(JSON.results[0].formatted_address);
        setaddressComponent(addressComponent)
        console.log(addressComponent);
        //console.log(JSON.results[0].address_components[0].long_name);
       },
      )  
    },
    
  (error) => {
        setLocationStatus(error.message);
        console.log(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 1000
      }
      
    )
   
  }

    return ( 
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView  enableOnAndroid={Platform.OS === 'android'} enableAutomaticScroll={true} >
                <ScrollView contentContainerStyle={styles.commonWrapper}>
                  <View style={{margin:20}}>  
                    <Text style={styles.welcome}>select Your Address</Text> 
                    <View style={{justifyContent:'center',alignItems:'center',marginLeft:20}}> 
                  <View style={{flexDirection:'row',marginTop:5}}>
                     <TouchableOpacity onPress={getOneTimeLocation}>
                       <Text>
                        Location--
                       </Text>
                     </TouchableOpacity>
                    <Text style={{ marginRight: 5, color:'black',fontWeight:'bold' }}>
                      {addressComponent}
                    </Text>
                  </View>    
                  <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize : 11,color : 'black'}}>
                      {locationStatus}
                    </Text> 
                       
                  </View> 
              </View>    
                    <Text style={styles.welcome}>Or</Text>
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
    marginTop: heightPercentageToDP(3),
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