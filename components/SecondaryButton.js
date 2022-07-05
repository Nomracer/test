import { memo } from "react";
import {
    Text,
    StyleSheet,
    TouchableHighlight } from "react-native";

export default memo(function SecondaryButton({title,onPress}){
    return(
    <TouchableHighlight style={styles.btn} onPress={onPress}>
        <Text style={styles.btntxt}>{title}</Text>
    </TouchableHighlight>
    )
})
const styles=StyleSheet.create({
    btn:{
        flex:1,
        backgroundColor:'#1a1a1a',
        height:40,
        margin:5,
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
      },
      btntxt:{
        textAlign:'center',
        color:'white',
        fontSize:16
      },
})