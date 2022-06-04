import { StyleSheet,
   Text,
   View,
   SafeAreaView,
   ScrollView,
  TouchableHighlight,
TouchableOpacity,
TextInput } from 'react-native';
import { useState,useEffect } from 'react';


export default function App() {
  const [isim,setisim]=useState()
  const [numara,setnumara]=useState(0)
  useEffect(()=>{
    setisim("Deniz")
  },[])
  return (
    <SafeAreaView style={styles.mainview}>
      <ScrollView>
        <TextInput placeholder='Adınız'>

        </TextInput>
        <TextInput placeholder='Soyadınız'>

        </TextInput>
        <TouchableOpacity activeOpacity={.7} onPress={tikla} style={styles.btn}>
          <Text >Bana {numara} Kere Tıkladın</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
  function tikla(){
    setnumara(numara+1)
  }
}

const styles =StyleSheet.create({
  mainview:{
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    backgroundColor:'cyan',
    justifyContent:'center',
    alignItems:'center'
  },
  textview:{
    color:'black'
  },
  btn:{
    backgroundColor:'white',
    height:50,
    justifyContent:'center',
    alignItems:'center'
  }
})
