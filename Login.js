import { useState } from "react";
import { SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight, ScrollView } from "react-native";
    import { Dimensions } from "react-native";

import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";
import { useContext } from "react";
import AppContext from './context/AppContext'

var md5=require('md5')

export default function Login({navigation}){
  const data = useContext(AppContext)
    return(
      <ScrollView>
<SafeAreaView style={styles.main}>
            <View style={styles.container}>
              <Text style={styles.h1}>Login</Text>
              <TextInput style={styles.txtinput} placeholder="School Number or Email"></TextInput>
              <TextInput style={styles.txtinput} secureTextEntry={true} placeholder="Password"></TextInput>
              <PrimaryButton title={'Login'} onPress={tikla}></PrimaryButton>
              <View style={styles.btnzone} >
                <SecondaryButton title={'Sign Up'} onPress={()=>navigation.navigate("Sign Up")} ></SecondaryButton>
                <SecondaryButton title={'Forgot My Password'}></SecondaryButton>
              </View>
            </View>
        </SafeAreaView>
      </ScrollView>
        
  )
  function tikla(){
    data.setLogin(true)
  }

}
const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'#f2f2f2',
      alignItems:'center',
      justifyContent:'center'
    },
    container:{
      padding:300

    },
    h1:{
      fontSize:32,
      color:'black',
      fontWeight:'bold',
      marginVertical:5,
      textAlign:'center'
    },
    txtinput:{
      width:Dimensions.get('screen').width-50,
      fontSize:24,
      textAlign:'center',
      margin:5,
      padding:5,
      borderColor:'black',
      borderWidth:1
    },
    btnzone:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between'
    },
  });