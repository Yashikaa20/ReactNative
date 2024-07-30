//BASIC FORM IN REACT NATIVE
import React,{useState} from "react";
import{View,Text,TextInput,Button,StyleSheet} from 'react-native'
const App=()=>{
  const[name,setName]=useState(' ');
  const[password,setPassword]=useState(' ');
  const[email,setEmail]=useState(' ');
  const[display,setDisplay]=useState(false);

  const ResetData=()=>{
    setName('');
    setPassword('');
    setEmail('');
    setDisplay(false);
  }
  
  return(
       <View>
        <Text style = {{fontSize:50,color:'red'}}>Basic form in React Native</Text>
        <TextInput 
          style={style.teraaa}
          placeholder='Enter your name'
          value={name}
          onChangeText={(text)=>setName(text)}
          />
          <TextInput 
          style={style.teraaa}
          placeholder='Enter your Password'
          secureTextEntry={true}
          value={password}
          onChangeText={(text)=>setPassword(text)}
          />
          <TextInput 
          style={style.teraaa}
          placeholder='Enter your Email'
          value={email}
          onChangeText={(text)=>setEmail(text)}
          />
        <View style={{marginBottom:10}}>
          <Button color={'green'} title='Print Details' onPress={()=>setDisplay(true)}/>
        </View>
        <Button title='Clear Input' onPress={()=>ResetData()}/> 
          <View style={{margin:10}}>
           <Text style={{fontSize:30,color:'orange'}}>Your user name is:{name}</Text>
           <Text style={{fontSize:30,color:'orange'}}>Your Password is:{password}</Text>
           <Text style={{fontSize:30,color:'orange'}}>Your Email is:{email}</Text>
          </View>
         
          <View>

          </View>
        
       </View>
  );
};
const style=StyleSheet.create({
  teraaa:{
    color:'black',
    height:70,
    fontSize:30,
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