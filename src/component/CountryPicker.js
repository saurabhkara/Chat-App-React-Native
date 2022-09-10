import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  View,
  FlatList,
} from "react-native";
import React, { useCallback, useMemo, useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconConstant from "../constants/IconConstant";
import Colors from "../constants/colors";
import HeaderComponent from "./HeaderComponent";
import CountryCode from "../constants/CountryCode";
import HorizontalLine from "./HorizontalLine";
import { SvgUri } from "react-native-svg";

const CountryPicker=({ onFetchCountry = () => {}, value })=> {
  const [data, setData] = useState(CountryCode);
  const [isVisible, setIsVisible] = useState(false);

  const CountryItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={{
          paddingHorizontal: 15,
          justifyContent: "center",
          paddingVertical: 8,
        }}
        onPress={() => onSelectCountry(item)}
      >
        <Text
          style={{ color: item.name == value ? Colors.SKY_BLUE : Colors.BLACK }}
        >
          {item.name}({item.dialCode})
        </Text>
         {/* <SvgUri
          width="10"
          height='10'
          uri={item.flag}
          onError={(e) => {console.log(e)}}
          onLoad={() => {console.log("loading")}}
        />  */}
      </TouchableOpacity>
    );
  };

  const countryMemo=useMemo(()=>CountryItem,[data,value]);

  const onSelectCountry = (item) => {
    onFetchCountry(item);
    setIsVisible(false);
  };
  return (
    <>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.4}
        onPress={() => setIsVisible(true)}
      >
        <Text style={{ color: Colors.SKY_BLUE, fontWeight: "bold" }}>
          {value}
        </Text>
        <Ionicons name={IconConstant.FORWARD} size={22} color={Colors.GRAY} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={isVisible}
        onRequestClose={() => {
          setIsVisible(false);
        }}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <View>
            <HeaderComponent
              centerText="Please Select your Country"
              containerStyle={{ paddingHorizontal: 8 }}
              onPressRight={() => setIsVisible(false)}
            />
            <FlatList
              data={data}
              renderItem={countryMemo}
              ItemSeparatorComponent={() => (
                <HorizontalLine horizontalLineStyle={{ marginTop: 5 }} />
              )}
              ListHeaderComponent={() => <View style={{ marginTop: 10 }} />}
              ListFooterComponent={() => <View style={{ marginBottom: 35 }} />}
            />
          </View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderBottomColor: Colors.GRAY,
    borderBottomWidth: 0.6,
    // borderTopColor:Colors.GRAY,
    // borderTopWidth:0.6,
  },
});

export default React.memo(CountryPicker);