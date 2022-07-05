import {View,
Text,
TextInput,
SafeAreaView,
StyleSheet,
Dimensions,
Alert,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import PrimaryButton from "./components/PrimaryButton";
import SecondaryButton from "./components/SecondaryButton";

export default function SignUp(){
    return(
        <ScrollView>
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
              <Text style={styles.h1}>Sign Up</Text>
              <TextInput style={styles.txtinput} placeholder="Name"></TextInput>
              <TextInput style={styles.txtinput} placeholder="Surname"></TextInput>
              <TextInput style={styles.txtinput} placeholder="Email"></TextInput>
              <TextInput style={styles.txtinput} keyboardType='numeric' placeholder="School Number"></TextInput>
              <TextInput style={styles.txtinput} secureTextEntry={true} keyboardType='numeric' placeholder="Password"></TextInput>
              <TextInput style={styles.txtinput} secureTextEntry={true} keyboardType='numeric' placeholder="Confirm Password"></TextInput>
              <PrimaryButton title={'Sign up'} onPress={() => Alert.alert('Signed up successfully!')}>

              </PrimaryButton>
              <View style={styles.btnzone} >
              </View>
            </View>
        </SafeAreaView>
        </ScrollView>
    )
}

function tikla(){




}

const styles = StyleSheet.create({
    main:{
      flex:1000,
      backgroundColor:'#f2f2f2',
      alignItems:'center',
      justifyContent:'center'
    },
    container:{
      padding:30

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