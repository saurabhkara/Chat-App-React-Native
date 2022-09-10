//import liraries
import React from 'react';
import { View, Text, StyleSheet,StatusBar,SafeAreaView } from 'react-native';
import Colors from '../constants/colors';


// create a component
const WrapperContainer = ({
    children,
    barStyle='dark-content',
    statusbarColor=Colors.WHITE,
    containerStyle

}) => {
    return (
        <View style={{...styles.container,...containerStyle}}>
            <StatusBar backgroundColor={statusbarColor} barStyle={barStyle} />
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingHorizontal:16,
    },
});

//make this component available to the app
export default WrapperContainer;
