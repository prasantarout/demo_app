//import liraries
import React, { Component,useState } from 'react';
import { View, Text, StyleSheet, Dimensions,TextInput,StatusBar,TouchableOpacity, Alert} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
const { width, height } = Dimensions.get('window')
import Textarea from 'react-native-textarea';
import { COLOURS,SIZES } from '../../constants';
import { useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import action from '../../redux/action';
const Update= ({navigation,route}) => {
  const {data}=route.params;
  const { colors } = useTheme();
  const theme = useTheme();
 
  const [product, setProduct] = useState({
    title:data.title,
    body:data.body,
   });

  const onChangeTitle = (value) => {
    setProduct({ ...product,  title: value });
  };

  const onChangeBody = (value) => {
    setProduct({ ...product,body: value });
  };
  const updatePost = async (id) => {
 
    try {
      if(product.title=='' && product.body==''){
        Alert.alert('all field required')
      }else{
        const res = await action.updatePost(id)
        console.log('response data', res)
        navigation.goBack('')
      }
    } catch (error) {
        console.log("error raised", error)
    }
}
    
      return (
        <View style={{
          backgroundColor:theme.dark ?COLOURS.lightLime:COLOURS.white,
          flex: 1,
        }}>
        {/* <StatusBar barStyle="light-content" backgroundColor={COLOURS.darkBlue}/> */}
        <View style={styles.navBar}>
         <TouchableOpacity style={styles.leftContainer} 
            onPress={()=>navigation.goBack('')}
          >
          <Entypo name="arrow-long-left" size={34} color="white"  />
             <Text style={{left:10,fontSize:SIZES.h2,color:'white'}}>Update</Text>
         </TouchableOpacity>
        </View>
          <View style={{left:20,top:70}}>
           <TextInput 
               placeholder="Update product name" 
               style={styles.textInput}
               placeholderTextColor={'black'}
               onChangeText={(value) =>onChangeTitle(value)}
               value={product.title}
                />
                
               <Textarea
                 containerStyle={styles.textareaContainer}
                 style={styles.textarea}
                 maxLength={120}
                 placeholder={'update product description 。。。'}
                 placeholderTextColor={'black'}
                 underlineColorAndroid={'transparent'}
                 onChangeText={(value) =>onChangeBody(value)}
                 value={product.body}
                 />
             </View>
             <TouchableOpacity style={{
                    backgroundColor:COLOURS.darkBlue,
                    borderColor:COLOURS.darkBlue,
                    borderWidth:1,
                    borderRadius:10,
                  
                    alignItems:'center',
                    left:30,
                    top:height*0.2,
                    width:width*0.8,
                    height:60
                    }}
                    onPress={()=>updatePost(data.id)}
                    >
                      <Text style={{
                          textAlign:'center',
                          fontSize:24,
                          fontWeight:'bold',
                          padding:10,
                          color:'white'
                      }}>Update</Text>
                    </TouchableOpacity>
            </View>
             
    );
};

// define your styles
const styles = StyleSheet.create({
    mainContainer: {
       
       },
   textInput: {
        padding: 10,
        paddingStart: 30,
        width: '95%',
        height: 60,
        right:10,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#D6DBDF',
        elevation:5
      },
   textareaContainer: {
        height: 150,
        padding: 5,
        right:5,
        width:'92%',
        backgroundColor: '#D6DBDF',
        borderRadius:10,
        top:20,
        elevation:5
      },
      textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        left:10,
        color: '#333',
      },
      navBar: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
         borderBottomWidth: 1,
        backgroundColor:COLOURS.darkBlue,
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.9,
         shadowRadius: 0.8,
         elevation: 4,
         top:20
      },
      leftContainer: {
        justifyContent: 'flex-start',   
         flexDirection: 'row',
         left:40
     },
});

//make this component available to the app
export default Update;
