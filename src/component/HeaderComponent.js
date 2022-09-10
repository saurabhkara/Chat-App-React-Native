import { View, Text , TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

export default function HeaderComponent({
  centerText='',
  rightText='Done',
  LeftCustomView=()=>{},
  isLeftView=false,
  containerStyle={},
  rightTextStyle={},
  onPressRight=()=>{},
  isRightView=true,
  isDisabled=true,
  isRightText=true,
  IconView 
 
}) {

  
  return (
    <View
        style={{...styles.container,...containerStyle}}
      >
       {isLeftView ? <LeftCustomView />:<View style={{width:'15%'}}></View>}
        <Text style={styles.centerTextStyle}>{centerText}</Text>
        {isRightView ?(<TouchableOpacity onPress={onPressRight} disabled={isDisabled}>
          {
            isRightText ?
          <Text style={{...styles.rightTextStyle,...rightTextStyle}}>{rightText}</Text>
          : 
          <IconView />
          }
        </TouchableOpacity>):<View/>}
      </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "gray",
    borderBottomWidth:0.6,
    paddingBottom:12,
   
  },
  centerTextStyle:{
    fontSize:19,
    fontWeight:'bold',
    // width:"65%",
    // backgroundColor:'red',
    textAlign:'center',
    
  },
  rightTextStyle:{
    fontSize:17,
    fontWeight:'400',
    color: Colors.LIGHT_GRAY,
  
  }
})