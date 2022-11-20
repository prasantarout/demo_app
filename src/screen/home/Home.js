//import liraries
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,StatusBar,Dimensions,TextInput } from 'react-native';
import action from '../../redux/action';
import { useTheme } from '@react-navigation/native';
import { COLOURS } from '../../constants';
const { width, height } = Dimensions.get('window')


const Home = ({props,navigation}) => {
    
    const [data, setData] = useState([])
    const { colors } = useTheme();
    const theme = useTheme();
   
 //getting all the data
    useEffect(() => {
        (async () => {
            try {
                let tempArr=[];
                let res = await action.getPosts()
                if(res.length>0){
                    res.map((item)=>{
                        item.color="#CD6155";
                        tempArr.push(item);
                    })
                }
                setData(res)
            } catch (error) {
                console.log("error raised", error)
            }
        })();
    }, [])

 

   
//data render 
   const renderItem = ({ item, index }) => {
         
      return (
           
            <View style={styles.boxView}>
                <Text style={styles.heading}>{item.id}. {item.title}</Text>
                <Text style={{
                    color:theme.dark ? 'white':'black',
                    fontSize:14,
                    fontWeight:'bold'
                }}>{item.body}</Text>
            <TouchableOpacity  style={styles.btnStyle} onPress={()=>navigation.navigate('Update',{data:item})}>
                    <Text style={{color: 'white'}}>EDIT</Text>
                </TouchableOpacity>
            </View>
          
           
        )
    }

    return (
        <View style={{
            flex: 1,
            paddingHorizontal: 16,
            backgroundColor:theme.dark ?COLOURS.lightLime:COLOURS.white 
        }}>
            
       <StatusBar barStyle="light-content" backgroundColor={COLOURS.darkBlue}/>
         <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                    ItemSeparatorComponent={() => <View style={{ marginBottom: 16 }} />}
                />
                
            </SafeAreaView>
        
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
  
    boxView: {
        borderWidth: 1,
        padding: 16,
        borderRadius: 8,
        top:50,
        flex:1
    },
    navBar: {
        height: 60,
         borderBottomWidth: 1,
         backgroundColor:COLOURS.darkBlue,
         shadowOffset: { width: 0, height: 2 },
         shadowOpacity: 0.9,
         shadowRadius: 0.8,
         elevation: 4,
         top:20,
         width:width*1.5,
         right:width*0.1
        
      },
      leftContainer: {
       flexDirection: 'row',
      
        
     },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
        textTransform:'capitalize'
    },
    btnStyle: {
        marginTop: 10,
        alignSelf:'flex-end',
        backgroundColor:'blue',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4
    },
    textInput: {
        padding: 10,
        paddingStart: 30,
        width: '95%',
        height: 60,
        right:10,
        marginTop: 20,
        borderRadius: 30,
        backgroundColor: '#F2F3F4',
      },
   textareaContainer: {
        height: 150,
        padding: 5,
        right:5,
        width:'92%',
        backgroundColor: '#F2F3F4',
        borderRadius:10,
        top:20
      },
      textarea: {
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        left:10,
        color: '#333',
      },
});

//make this component available to the app
export default Home;
