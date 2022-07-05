import { Text 
,ScrollView
,StyleSheet
,SafeAreaView
,View
} from "react-native";  

export default function App(){
    return(
        <SafeAreaView style={styles.main}></SafeAreaView>
    
    )

}
const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'#f2f2f2',
      alignItems:'center',
      justifyContent:'center'
    }
});
