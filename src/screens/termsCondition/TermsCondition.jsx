import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { styles } from "./Styles";
import ScreenConstant from "../../constants/ScreenConstant";
import ImageConstant from "../../constants/ImageConstant";
import WrapperContainer from "../../component/WrapperContainer";
import i18n from 'i18n-js';
import eng from "../../constants/lang/eng";
import Colors from "../../constants/colors";
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TermsCondition({ navigation }) {
  const { height} = useWindowDimensions();





  return (
    <WrapperContainer>
    <View >
      <Image
        source={ImageConstant.LOGO}
        style={{...styles.logo, ...{ marginTop: 0.1 * height} }}
        resizeMode='contain'
      />
      <Text style={styles.head}>{eng.WELCOME}</Text>
      <Text style={styles.privacy}>
        Read our <Text style={{ color: Colors.SKY_BLUE }}>Privacy Policy. </Text> Tap to
        'Agree  Continue' to accept the <Text style={{ color:Colors.SKY_BLUE }}>terms and condition</Text>
      </Text>

      <TouchableOpacity
        style={styles.agreeContainer}
        onPress={() => navigation.navigate(ScreenConstant.Phone_Number)} 
      >
        <Text style={styles.agree}>Agree  Continue</Text>
      </TouchableOpacity>
    </View>
    </WrapperContainer>
  );
}
