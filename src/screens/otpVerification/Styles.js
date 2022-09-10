import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export const styles= StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center',
        
    },
    text:{
        marginHorizontal:25,
        textAlign:'center',
        fontSize:18,
        paddingVertical:5,
        color:Colors.GRAY
    },
    otpText:{
        textAlign:'center',
        color:Colors.GRAY
    }
})