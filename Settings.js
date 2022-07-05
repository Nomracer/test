import { Text,
    ScrollView,
    View,
    Searchbar,
    StyleSheet, } from "react-native"
    import { SearchBar } from 'react-native';
    import PrimaryButton from "./components/PrimaryButton";
    import * as React from 'react';
    import { useContext } from "react";
    import AppContext from './context/AppContext'

export default function Login(){
    const data=useContext(AppContext)
    return(
        <ScrollView style={styles.main}>
            <PrimaryButton title="Çıkış yap" onPress={()=>data.setLogin(false)}></PrimaryButton>
            {data.admin&&
                <PrimaryButton title="Admin" onPress={()=>alert('beyler adminim')}></PrimaryButton>
            }

        </ScrollView>
    )
}

const styles=StyleSheet.create({
    main:{
        display:'flex',
        height:40,
    },
})










