import { Text,
    View,
    StyleSheet,
TouchableHighlight } from "react-native"
import { memo } from "react";

import Ionicons from 'react-native-vector-icons/Ionicons';

export default memo(function BookList({onPress,data}){
    return(
        <View style={styles.container}>
            <View style={styles.sec}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.author}>{data.author}</Text>
                <Text style={styles.author}>{data.basimYili}</Text>
            </View>
            {data.kira&&
            <TouchableHighlight style={[styles.sec,{alignItems:'flex-end'}]} activeOpacity={.7} underlayColor={'lightgray'} onPress={onPress}>
                <Ionicons name="close-circle-outline" color={'darkred'} size={64}></Ionicons>
            </TouchableHighlight>
            }
            {!data.kira&&
            <TouchableHighlight style={[styles.sec,{alignItems:'flex-end'}]} activeOpacity={.7} underlayColor={'lightgray'} onPress={onPress}>
                <Ionicons name="checkmark-circle-outline" color={'darkgreen'} size={64}></Ionicons>
            </TouchableHighlight>
            }

        </View>
    )
})
const styles=StyleSheet.create({
    container:{
        backgroundColor:'lightgray',
        display:'flex',
        margin:10,
        padding:5,
        borderRadius:5,
        flexDirection:'row'
    },
    sec:{
        display:'flex',
        flex:1,
        flexDirection:'column'
    },
    title:{
        fontSize:24,
        fontWeight:'bold'
    },
    author: {
        color:'#333',
        fontSize:16,
    }
})