import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles";
import WrapperContainer from "../../component/WrapperContainer";
import HeaderComponent from "../../component/HeaderComponent";
import IconConstant from "../../constants/IconConstant";
import Colors from "../../constants/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import OTPField from "../../component/OTPField";
import { verifyOTP } from "../../redux/actions/auth";




export default function OtpVerification({ navigation , route}) {
  const {data}=route?.params;
  const [loginPin, setLoginPin]=useState(null);
 

  const LeftCustomView = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={IconConstant.BACKWARD} size={24} color={Colors.BLACK} />
      </TouchableOpacity>
    );
  };

  const getPin=(pin)=>{
    console.log(pin)
    setLoginPin(pin)
  }

  const onRightPress=()=>{
    let otpd={
      otp:loginPin,
      user_id:data?.data?._doc?._id 
    }
    verifyOTP(otpd)
  }


  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText={`${data?.data?._doc.countryData?.dialCode} ${data?.data?.phoneNumber}`}
        leftCustomView={<LeftCustomView />}
        isLeftView={true}
        containerStyle={{ paddingHorizontal: 8 }}
        isRightView={true}
        isDisabled={loginPin?false:true}
        rightTextStyle={{
          color: loginPin ? Colors.SKY_BLUE : Colors.GRAY,
        }}
        onPressRight={onRightPress}
      />
      <Text style={{ ...styles.text, ...{ marginVertical: 15 } }}>
        We have sent you an SMS with a Code to the number above
      </Text>
      <Text style={styles.text}>
        To complete your phone number Verification, please enter the 6 digit
        activation code.
      </Text>
      <OTPField containerStyle={{ marginVertical: 50 }}  getPin={getPin}/>
      <Text style={styles.otpText}>Resend OTP in 1:00</Text>
    </WrapperContainer>
  );
}
