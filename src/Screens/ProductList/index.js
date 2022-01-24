import React, {useState} from 'react';  
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView,ScrollView ,FlatList} from 'react-native';  
import { CustomInput  } from '../../Components/CustomInput' ;
import { CustomButton } from '../../Components/CustomButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from 'react-native-responsive-screen'; 
import { TouchableOpacity } from 'react-native-gesture-handler';

function ProductList({ navigation , route }) {
  const { Param }             = route.params; 
  
  const [cart,setcart]        = useState('');
  const [cart1,setcart1]        = useState(Param[0])
  const AddToCart=(item)=>{
    setcart([...cart, item])
    console.log(cart);
    setcart1(cart)
    const cart1 = cart.filter((v,i) => {
      return cart.map((val)=> val.id).indexOf(v.id) == i//filter
    })
    setcart1(cart1)
    console.log(cart1);
  }
  
    return ( 
        <SafeAreaView style={styles.container}>
            <KeyboardAwareScrollView  enableOnAndroid={Platform.OS === 'android'} enableAutomaticScroll={true} >
                <ScrollView contentContainerStyle={styles.commonWrapper}>
                  <View style={{margin:20}}>  
                    <Text style={styles.welcome}>ProductList</Text> 
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
                            <Text style={{color:'black',alignSelf:'center',marginTop:16}}>{item.title}</Text>
                              <TouchableOpacity
                                  onPress={() => AddToCart(item)}
                                  >
                                          <Text style={{color:'white',alignSelf:'center',margin:10 ,fontWeight:'bold',padding:1,backgroundColor:'black',alignSelf:'flex-end'}}>
                                            Add To Cart</Text>
                              </TouchableOpacity>
                              </View> )
                            }} />
                        
                        <CustomButton
                            style    ={{marginTop : heightPercentageToDP(7)}}
                            height1  ={heightPercentageToDP(7)}
                            width1   ={'100%'}
                            onPress  ={() => navigation.navigate('Cart',{Param:cart1})}
                            title    ='View Your Cart ' 
                        /> 
                       
                </View> 
              </ScrollView>
            </KeyboardAwareScrollView>
          </SafeAreaView>
    );  
  }  
export default  ProductList;
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