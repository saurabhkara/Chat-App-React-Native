//Libraries
import { View, Text,} from 'react-native'
import React from 'react';
import { styles } from './styles';

//Components
import WrapperContainer from '../../component/WrapperContainer';
import HeaderComponent from '../../component/HeaderComponent';
import RoundImage from '../../component/RoundImage'

//Variables
import Colors from '../../constants/colors';



export default function Users({navigation}) {

 

  return (
   <WrapperContainer containerStyle={{ paddingHorizontal: 0, flex: 1 }}>
    <HeaderComponent 
      centerText="New Chat"
      rightText='Cancel'
      isDisabled={false}
      rightTextStyle={{color:Colors.SKY_BLUE}}
      containerStyle={{ paddingHorizontal: 10 }}
      onPressRight={()=>navigation.goBack()}
    />
    <RoundImage size={60} />

   </WrapperContainer>
  )
}