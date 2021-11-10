
import { Platform } from "react-native";
import { PERMISSIONS } from "react-native-permissions";

const Permissions = {
    Camera : Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA 
    : PERMISSIONS.ANDROID.CAMERA
}

export default {
    Camera : Permissions.Camera
};
