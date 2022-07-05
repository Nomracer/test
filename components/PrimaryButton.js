import { memo } from "react";
import { SafeAreaView,
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight } from "react-native";
    import { Dimensions } from "react-native";

export default memo(function PrimaryButton({title,onPress}){
    return(
    <TouchableHighlight style={styles.btn} onPress={onPress}>
        <Text style={styles.btntxt}>{title}</Text>
    </TouchableHighlight>
    )
})
const styles=StyleSheet.create({
    btn:{
        backgroundColor:'#1a1a1a',
        height:40,
        width:Dimensions.get('screen').width-50,
        margin:5,
        padding:5,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
      },
      btntxt:{
        textAlign:'center',
        color:'white',
        fontSize:16
      },
})