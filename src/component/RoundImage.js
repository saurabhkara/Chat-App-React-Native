import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

export default function RoundImage({
    image='',
    onPress=()=>{console.log('function working perfectly')},
    size=100
}) {
  return (
    <TouchableOpacity style={styles(size).RoundImage} onPress={onPress}>
      {image ? <Image source={{uri:image}} style={styles().image} /> : <Text style={styles().photoText}>Add Photo</Text>}
    </TouchableOpacity>
  )
}

const styles=(size) => StyleSheet.create({
    RoundImage: {
        width: size,
        height: size,
        borderRadius: size/2,
        backgroundColor:Colors.LIGHT_GRAY,
        borderColor:Colors.GRAY,
        borderWidth:0.3,
        justifyContent:'center',
        alignItems:'center'
    },
    photoText:{
        color:Colors.SKY_BLUE,
        fontSize:20,
        textAlign:'center'
    },
    image:{
        width:size,
        height:size,
        borderRadius:size/2,
       resizeMode:'contain'
    }
})