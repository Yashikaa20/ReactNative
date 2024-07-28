import React,{useState} from "react";
import{View,Text,TextInput,Button,StyleSheet} from 'react-native'
const App=()=>{
  const[name,setName]=useState(' ');
  
  
  return(
       <View>
        <Text style = {{fontSize:50,color:'darkblue'}}>HANDLE TEXT INPUT</Text>
        <Text style = {{fontSize:30,color:'lightblue'}}>Your name is:{name}</Text>

        <TextInput 
          style={style.teraaa}
          placeholder='Enter your name'
          value={name}
          onChangeText={(text)=>setName(text)}
          />
        <Button title='Clear Input' onPress={()=>setName('')}/>
        
       </View>
  );
};
const style=StyleSheet.create({
  teraaa:{
    color:'black',
    height:100,
    fontSize:50,
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:5,
    borderRadius:4,
    marginBottom:10,
    textAlign:'center',
    margin:5
  }
})
  


export default App;