import { StyleSheet ,useWindowDimensions} from "react-native";
import Colors from "../../constants/colors";

export const styles = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
    alignSelf:'center'
 },
 head:{
    fontWeight:'500',
    fontSize:24,
    textAlign:'center'
 },
 privacy:{
    alignSelf:'center',
    textAlign:'center',
    fontSize:17,
    marginHorizontal:25,
    marginTop:12,
    lineHeight:20,
    color:'grey', 
    lineHeight:24,
 },
 agree:{
    alignSelf:'center',
    fontSize:20,
    fontWeight:'400',
    color:Colors.WHITE,
   
 },
 agreeContainer:{
    backgroundColor:Colors.CYAN,
    justifyContent:'center',
    alignItems:'center',
    marginTop:100,
    height:50,
    width:'60%',
    alignSelf:'center',
    borderRadius:25,
 }
});
