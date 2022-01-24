import React, {useState,useEffect} from 'react';  
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView,ScrollView} from 'react-native';  
import { CustomInput  } from '../../Components/CustomInput' ;
import { CustomButton } from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

function Login({ navigation }) {
  const mycredentials = { userName: '', Password: '' }
  const [list,setlist] = useState('')
  const [credentials, setcredentials] = useState(mycredentials);
  useEffect(() => {
    setcredentials(mycredentials)
    Data();
    
  }, []);
  {/*const Login = () =>{
    fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
  }*/}
  const Data =() =>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setlist(json))
            //setlist(res.json());
            console.log(list);
    }
  const Login = async () => {
    const res = await axios.post(
      'https://fakestoreapi.com/auth/login',
      { username    : credentials.userName, 
        password    : credentials.Password ,
        },
    ).catch((res) => {
      console.log(res)
      return { status: 401, message: 'Unauthorized' }
    })
    if (res.status === 200) {
      console.log(res.status)
      console.log(res.data)
      navigation.navigate('ProductList',{Param: list})
    }
    else {
      console.log('null')
      //navigation.navigate('ProductList');
      return false;
      
    }
  }
    return ( 
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView  enableOnAndroid={Platform.OS === 'android'} enableAutomaticScroll={true} >
                <ScrollView contentContainerStyle={styles.commonWrapper}>
                  <View style={{margin:20}}>  
                    <Text style={styles.welcome}>Login</Text> 
                        <Text style={styles.userpas}>User name</Text>
                        <CustomInput
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'username'}
                            style          ={{fontSize:35}}
                            value          ={credentials.userName}
                            onChangeText   ={(checkName) => {
                            setcredentials({ ...credentials, userName: checkName })
                             }}
                        />
                        <Text   style={styles.userpas}>Password</Text>
                        <CustomInput
                            secureTextEntry={true}
                            inputStyle     ={{fontSize:35}}
                            placeholderText={'*******'}
                            style          ={{fontSize:35}}
                            value          ={credentials.Password}
                            onChangeText   ={(password) => {
                            setcredentials({ ...credentials, Password: password })
                             }}
                        />
                        <CustomButton
                            style    ={{marginTop       : heightPercentageToDP(7)}}
                            height1  ={heightPercentageToDP(7)}
                            width1   ={'100%'}
                            onPress  ={() => {Data() , Login()}}
                            title    =' Login ' 
                        /> 
                        <View style={{flexDirection:'row' , marginTop:25,justifyContent:'flex-end',alignItems:'center'}}>
                          <Text style={styles.newuser}>New User ...?</Text>
                        <TouchableOpacity
                            onPress  ={() => navigation.navigate('SignUp')}>
                          <Text style ={styles.register}>SignUp</Text>
                        </TouchableOpacity>
                        </View>
                </View> 
              </ScrollView>
            </KeyboardAwareScrollView>
          </SafeAreaView>
    );  
  }  
export default  Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
},  
  welcome: {  
    marginTop: heightPercentageToDP(10),
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