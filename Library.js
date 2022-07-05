import { Text,
ScrollView,
View,
Searchbar,
StyleSheet } from "react-native"
import { SearchBar } from 'react-native';
import PrimaryButton from "./components/PrimaryButton";
import * as React from 'react';
import { useContext } from "react";
import AppContext from './context/AppContext'
import BookList from './components/BookList'

const datas=[
    {
        id:1,
        title:'Anna Karenina',
        author:'Ben',
        basimYili:'2016',
        kira:false
    },
    {
        id:2,
        title:'Ezilenler',
        author:'Sen',
        basimYili:'2022',
        kira:true
    },
    {
        id:3,
        title:'Sefiller',
        author:'O',
        basimYili:'2015',
        kira:false
    },
    {
        id:4,
        title:'Açlık',
        author:'Knut Hamsun',
        basimYili:'2011',
        kira:false
    },
    {
        id:5,
        title:'Beslenme',
        author:'Ayşe Baysal',
        basimYili:'1993',
        kira:true
    },
]

export default function Login(){
    const data=useContext(AppContext)
    return(
        <ScrollView style={styles.main}>
            {datas.map((data)=>{
                return(
                    <BookList key={data.id} data={data}></BookList>
                )
            })}

        </ScrollView>
    )
}
const styles=StyleSheet.create({
    main:{
        display:'flex',
    },
})



