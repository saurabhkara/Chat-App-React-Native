import { TextInput, StyleSheet } from 'react-native'
import React, { Fragment } from 'react'
import Colors from '../constants/colors'

export default function TextInputComp({
    placeholder='',
    inputStyle={},
    ...props
}) {
  return (
   <Fragment>
    <TextInput
        placeholder={placeholder}
        {...props}
        style={{...styles.textInput,...inputStyle}}
      />
   </Fragment>
  )
}


const styles = StyleSheet.create({
    textInput:{
        paddingHorizontal: 12,
        fontSize: 16,
        marginVertical: 10,
        // paddingBottom:10,
        
      }
}
)