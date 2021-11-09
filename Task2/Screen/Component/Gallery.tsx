import React from "react";
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const Gallery = () =>{   
    console.log('[Gallery] : ***** Component ***** >>>>> Render'); 

     const [PreviewGallery,setPreviewGallery] = React.useState('');

    const ChoiceImage = () =>{
    let options : any ={
      mediaType : 'photo',
      quality:1,
      includeBase64 : true,
    }
    
    launchImageLibrary(options
      ,(res:any)=>{
      if(res.didCancel){
        return;
      }
      setPreviewGallery(res.assets[0].base64);
    });
  }
  
  const CancelImage = () =>{
      setPreviewGallery('');
  }

    return (
        <ImageBackground source={PreviewGallery == '' ? 
            require('../../Assets/Background/GalleryBackground.jpg')
            : {uri: 'data:image/png;base64,'+PreviewGallery}
        }
         style={[Style.MainView]}>

             {PreviewGallery == '' ? 
            <TouchableOpacity onPress={ChoiceImage}>
                <Image
                    source={require('../../Assets/Image/GalleryImage.png')}
                    style={[Style.Image]}
                />
             </TouchableOpacity>
             : 
             <TouchableOpacity style={[Style.container]}
             onPress = {CancelImage}>
                <Image
                    source={require('../../Assets/Image/CancelGalleryImage.png')}
                    style={[Style.Image]}
                />
                 <Text style={[Style.CancelText]}>Cancel</Text>
             </TouchableOpacity>
             }
        </ImageBackground>
    )
}

export default Gallery;


var Style = StyleSheet.create({
    MainView : {
        flex:1,justifyContent:'center',alignItems:'center',
        width:'100%',backgroundColor:'#000'
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
