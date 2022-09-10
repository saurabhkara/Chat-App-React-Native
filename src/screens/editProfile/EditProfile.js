import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import WrapperContainer from "../../component/WrapperContainer";
import HeaderComponent from "../../component/HeaderComponent";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/colors";
import IconConstant from "../../constants/IconConstant";
import RoundImage from "../../component/RoundImage";
import HorizontalLine from "../../component/HorizontalLine";
import TextInputComp from "../../component/TextInputComp";
import * as ImagePicker from "expo-image-picker";
import ScreenConstant from "../../constants/ScreenConstant";
import actions from "../../redux/actions";

export default function EditProfile({ navigation, route }) {
  const { data } = route.params;

  const [pic, setPic] = useState(null);
  const [name, setName] = useState("");

  const LeftCustomView = () => {
    return (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name={IconConstant.BACKWARD} size={24} color={Colors.BLACK} />
      </TouchableOpacity>
    );
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setPic(result.uri);
    }
  };

  const onDone = async () => {
    let userD = {
      ...data,
      ...{ name: name },
    };
    try {
      console.log('Sign up called',userD)
      const res = await actions.signUp(userD);
      console.log('response of signup api', res)
      if (res?.status != 400)
        navigation.navigate(ScreenConstant.OTP_Verification, { data: res?.data });
    } catch (err) {
      console.log(error);
    }

    return;
  };

  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0 }}>
      <HeaderComponent
        centerText="Edit Profile"
        leftCustomView={<LeftCustomView />}
        isLeftView={true}
        containerStyle={{ paddingHorizontal: 8 }}
        onPressRight={onDone}
        isDisabled={name.length < 3}
        rightTextStyle={{
          color: name.length > 2 ? Colors.SKY_BLUE : Colors.GRAY,
        }}
      />
      <View style={{ flexDirection: "row", alignItems: "center", padding: 10 }}>
        <RoundImage onPress={pickImage} image={pic} />
        <Text style={styles.addProfile}>
          Enter Your name and add optional profile picture
        </Text>
      </View>
      <HorizontalLine horizontalLineStyle={{ marginTop: 25 }} />
      <TextInputComp
        placeholder="Enter Your Name(for notification)"
        onChangeText={(text) => setName(text)}
      />
      <HorizontalLine />
    </WrapperContainer>
  );
}
