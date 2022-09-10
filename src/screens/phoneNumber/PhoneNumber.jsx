import { Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles";
import WrapperContainer from "../../component/WrapperContainer";
import HorizontalLine from "../../component/HorizontalLine";
import HeaderComponent from "../../component/HeaderComponent";
import CountryPicker from "../../component/CountryPicker";
import ScreenConstant from "../../constants/ScreenConstant";
import Colors from "../../constants/colors";

export default function PhoneNumber({ navigation }) {
  const [state, setState] = useState({
    countryData: {
      name: "India",
      dialCode: "+91",
      isoCode: "IN",
      flag: "https://cdn.kcak11.com/CountryFlags/countries/in.svg",
    },
    phoneNum: "",
  });

  const { countryData, phoneNum } = state;


  const updateState = (data) => {
    setState((state) => ({ ...state, ...data }));
  };

  const onFetchCountry = (item) => {
    updateState({ countryData: item });
  };

  const onDone = () => {
    navigation.navigate(ScreenConstant.Edit_Profile,{data:state});
  };

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText="Enter Your Phone Number"
        containerStyle={{ paddingHorizontal: 8 }}
        onPressRight={onDone}
        isRightView={true}
        rightTextStyle={{
          color: phoneNum.length > 8 ? Colors.SKY_BLUE : Colors.GRAY,
          fontWeight: phoneNum.length > 8 ? "bold" : "400",
        }}
        isDisabled={phoneNum.length < 8 }
      />
      <Text style={styles.desc}>
        Chat App will send sms to verify your phone number
      </Text>
      <HorizontalLine />
      <CountryPicker
        onFetchCountry={onFetchCountry}
        value={countryData?.name}
      />
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          borderBottomColor: "gray",
          borderBottomWidth: 0.6,
          alignItems: "center",
        }}
      >
        <Text style={{ color: "skyblue", paddingRight: 7 }}>
          {countryData?.dialCode}
        </Text>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ height: 30 }}
            placeholder=" Enter Your Phone Number"
            keyboardType="number-pad"
            // value={phoneNum}
            onChangeText={(text) => updateState({ phoneNum: text })}
          />
        </View>
      </View>
    </WrapperContainer>
  );
}
