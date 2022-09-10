import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { styles } from "./Styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import WrapperContainer from "../../component/WrapperContainer";
import HeaderComponent from "../../component/HeaderComponent";
import Colors from "../../constants/colors";
import ScreenConstant from "../../constants/ScreenConstant";

export default function Chats({ navigation }) {
  const [data, setData] = useState([]);
  const IconView = () => {
    return <Ionicons name="checkbox-outline" size={30} color={Colors.GRAY} />;
  };

  const LeftCustomView = () => {
    return (
      <View>
        {data.length>0?<Text style={{marginLeft:5}} onPress={()=>console.log('edit')}>Edit</Text>:null}
        <Text style={{fontSize:22, fontWeight:'800'}}>Chat</Text>
      </View>
    );
  };

  const renderItem = () => {
    return <Text> Render Item</Text>;
  };

  const onPressRight = () => {
    navigation.navigate(ScreenConstant.Users);
  };
  const ListEmptyComponent = () => {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Text style={{ fontSize: 18, textAlign: "center" }}>
          Tap on{" "}
          <Ionicons name="checkbox-outline" size={20} color={Colors.GRAY} /> in
          top right corner to start a new Chat{" "}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 18,
          }}
        >
          {" "}
          You can chat with contacts who have ChatApp account{" "}
        </Text>
      </View>
    );
  };
  return (
    <WrapperContainer containerStyle={{ paddingHorizontal: 0, flex: 1 }}>
      <HeaderComponent
        isRightView={true}
        isRightText={false}
        isDisabled={false}
        IconView={IconView}
        containerStyle={{ paddingHorizontal: 10 }}
        onPressRight={onPressRight}
        isLeftView={true}
        LeftCustomView={LeftCustomView}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={ListEmptyComponent}
        keyExtractor={() => Math.random()}
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          height: "100%",
        }}
      />
    </WrapperContainer>
  );
}
