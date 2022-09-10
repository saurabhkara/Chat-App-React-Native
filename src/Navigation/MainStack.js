import ScreenConstant from "../constants/ScreenConstant";
import {Chats,Camera, Users} from '../screens/index';
import TabNavigator from "./TabNavigator";

export default function(Stack){
    return(
        <>
            <Stack.Screen name={ScreenConstant.TabRoute} component={TabNavigator}/>
            <Stack.Screen name={ScreenConstant.Users} component={Users}/>

        </>
    )
}