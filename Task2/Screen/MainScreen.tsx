import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";
import SplashScreen from "react-native-splash-screen";
import Camera from "./Component/Camera";
import Gallery from "./Component/Gallery";

const MainScreen = () =>{
    console.log('[MainScreen] : ***** Screen ***** >>>>> Render'); 

    useEffect(() => {
        setTimeout(() => {
           SplashScreen.hide(); 
        }, 2000);
    }, [])

    return (
        <View style={[Style.MainView]}>
            <Gallery />
            <Camera />
        </View>
    )
}


export default MainScreen;

var Style = StyleSheet.create({
    MainView:{
        flex:1,justifyContent:'center',alignItems:'center'
        ,width:'100%',backgroundColor:'#fff'
    }
}) 

