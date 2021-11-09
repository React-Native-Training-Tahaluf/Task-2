import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";

const Camera = () =>{    
    console.log('[Camera] : ***** Component ***** >>>>> Render');

    const [PreviewCamera,setPreviewCamera] = React.useState('');

    const TakeImage = () =>{
    let options : any ={
      mediaType : 'photo',
      quality:1,
      includeBase64 : true,
    }
    
    launchCamera(options
      ,(res:any)=>{
      if(res.didCancel){
        return;
      }
      setPreviewCamera(res.assets[0].base64);
    });
  }
  
  const CancelImage = () =>{
      setPreviewCamera('');
  }

    return (
        <ImageBackground source={PreviewCamera == '' ? 
            require('../../Assets/Background/CameraBackground.jpg')
            : {uri: 'data:image/png;base64,'+PreviewCamera}
        }
         style={[Style.MainView]}>

             {PreviewCamera == '' ? 
            <TouchableOpacity onPress={TakeImage}>
                <Image
                    source={require('../../Assets/Image/CameraImage.png')}
                    style={[Style.Image]}
                />
             </TouchableOpacity>
             : 
             <TouchableOpacity style={[Style.container]}
             onPress = {CancelImage}>
                <Image
                    source={require('../../Assets/Image/CancelCameraImage.png')}
                    style={[Style.Image]}
                />
                 <Text style={[Style.CancelText]}>Cancel</Text>
             </TouchableOpacity>
             }
        </ImageBackground>
    )
}

export default Camera;


var Style = StyleSheet.create({
    MainView : {
        flex:1,justifyContent:'center',alignItems:'center',
        width:'100%'
    },
    Image:{
        height:100,width:100,
    },
    container :{
        flex:1,justifyContent:'center',alignItems:'center'
    },
    CancelText:{
        fontSize:20,color:'#000',fontWeight:'900'
    }
})
