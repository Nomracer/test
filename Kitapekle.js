import { Text 
,ScrollView
,StyleSheet
,SafeAreaView
,View
,TouchableHighlight
} from "react-native";  

export default function App(){
    return(
        <SafeAreaView style={styles.main}>
            <TouchableHighlight onPress={test}>
                <Text>Dokun</Text>
            </TouchableHighlight>
        </SafeAreaView>
    
    )
    async function test(){
        fetch('../api/test',{
            method:'POST',
            headers:{
                Accept:'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email:'deasdas@gmail.com'
            })
        })
    }
}
const styles = StyleSheet.create({
    main:{
      flex:1,
      backgroundColor:'#f2f2f2',
      alignItems:'center',
      justifyContent:'center'
    }
});
