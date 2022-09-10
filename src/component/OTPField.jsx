import React, { useState, useRef, useEffect } from "react";
import { TextInput, View, StyleSheet, Keyboard } from "react-native";
import Colors from "../constants/colors";

const OTPField = ({ containerStyle = {}, getPin }) => {
  let data;
  const pinRef1 = useRef(null);
  const pinRef2 = useRef(null);
  const pinRef3 = useRef(null);
  const pinRef4 = useRef(null);
  const pinRef5 = useRef(null);
  const pinRef6 = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");
  const [pin5, setPin5] = useState("");
  const [pin6, setPin6] = useState("");

  useEffect(() => {
    pinRef1.current.focus();
  }, []);

  function onComplete() {
    console.log("oncomplete Called");
    if (
      pin1 != "" &&
      pin2 != "" &&
      pin3 != "" &&
      pin6 != "" &&
      pin4 != "" &&
      pin5 != ""
    ) {
      data = pin1 + pin2+pin3+pin4+pin5+pin6;
      data=Number(data)
      getPin(data)
    }
  }

  return (
    <View style={{...styles.container,...containerStyle}}>
      <View style={styles.inputView}>
        <TextInput
          keyboardType="numeric"
          ref={pinRef1}
          maxLength={1}
          style={styles.textInput}
          onChangeText={(pin1) => {
            setPin1(pin1);
            pinRef2.current.focus();
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              pinRef1.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={pinRef2}
          keyboardType="numeric"
          maxLength={1}
          style={styles.textInput}
          onChangeText={(pin2) => {
            setPin2(pin2);
            pinRef3.current.focus();
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              pinRef1.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={pinRef3}
          keyboardType="numeric"
          maxLength={1}
          style={styles.textInput}
          onChangeText={(pin3) => {
            setPin3(pin3);
            pinRef4.current.focus();
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              pinRef2.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={pinRef4}
          keyboardType="numeric"
          maxLength={1}
          style={styles.textInput}
          onChangeText={(pin4) => {
            setPin4(pin4);
            pinRef5.current.focus();
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              pinRef3.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={pinRef5}
          keyboardType="numeric"
          maxLength={1}
          style={styles.textInput}
          onChangeText={(pin5) => {
            setPin5(pin5);
            pinRef6.current.focus();
          }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              pinRef4.current.focus();
            }
          }}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          ref={pinRef6}
          keyboardType="numeric"
          maxLength={1}
          style={styles.textInput}
          onChangeText={(pin6) => {
            setPin6(pin6);
            // onComplete();
          }}
          onSubmitEditing={onComplete}
          // onEndEditing={() => {
          //   Keyboard.dismiss;
          //   onComplete();
          // }}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === "Backspace") {
              pinRef5.current.focus();
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 10,
    marginVertical: 20,
  },
  inputView: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY,
    width: 30,
  },
  textInput: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default OTPField;
