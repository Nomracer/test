import { SafeAreaView,
View,
Text,
StyleSheet,
TextInput,
TouchableHighlight } from "react-native";
import Login from './Login'
import Library from './Library'
import Kitapekle from './Kitapekle'
import SignUp from "./SignUp";
import { Dimensions } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { useState} from "react";
import AppContext from './context/AppContext'
import Settings from "./Settings";


const Tab = createBottomTabNavigator();
const Stack =createStackNavigator();

export default function App(){
  const [login,setLogin]=useState(false)
  const [admin,setAdmin]=useState(false)
  const data ={
    login,
    setLogin,
    admin,
    setAdmin
  }
  return(
    <AppContext.Provider value={data}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Nom's Library" >
          {()=>{
            return(
              <Tab.Navigator
              screenOptions={({route})=>({
                tabBarIcon:({focused,color,size})=>{
                  let iconname;
                  if(route.name==="Login"){
                    iconname=focused
                    ?'log-in'
                    :'log-in-outline';
                  }else if(route.name==="Library"){
                    iconname=focused?'library':'library-outline';
                  }
                  else if(route.name==="Add Book"){
                    iconname=focused?
                    'add-circle'
                    :'add-circle-outline';
                  }
                  else if (route.name==="Settings"){

                    iconname=focused?
                    'settings'
                    :'settings-outline'

                  }
                  return<Ionicons name={iconname} size={32} color='black'></Ionicons>
                },
                headerShown:false
              })}>
                {login&&
                <>
                  <Tab.Screen name="Library"  component={Library}/>
                  <Tab.Screen name="Add Book"  component={Kitapekle}/>
                  <Tab.Screen name="Settings"  component={Settings}/>

                </>
                }
                {!login&&
                  <Tab.Screen name="Login" component={Login} />
                }
        
              </Tab.Navigator>
            )
          }}
        </Stack.Screen>
        <Stack.Screen name="Sign Up" component={SignUp}></Stack.Screen>
      </Stack.Navigator>
     
    </NavigationContainer>
    </AppContext.Provider>

  )
}
