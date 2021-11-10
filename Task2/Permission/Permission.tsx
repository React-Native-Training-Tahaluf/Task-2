import { request,Permission, RESULTS, openSettings } from "react-native-permissions";

const TakePermission = async (Type:Permission,KeepAsking = false)=>{    
    var Result = await request(Type);
        switch(Result){
        case RESULTS.GRANTED:{return true;} 
        case RESULTS.DENIED : {            
            if(!KeepAsking){
                return false;
            }
            TakePermission(Type,KeepAsking);
        }
        case RESULTS.BLOCKED : {openSettings(); return false;}
    }
    
}


export default TakePermission;




