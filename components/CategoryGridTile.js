import React from "react";
import {View, Text, StyleSheet, Platform, TouchableOpacity, TouchableNativeFeedback} from "react-native";

import StandardFonts from "../constants/fonts";

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === "android" && Platform.Version >= 26) {
        TouchableCmp = TouchableNativeFeedback;
    }
    
    return (
        <View style={styles.gridItem}>
            <TouchableCmp onPress={props.onSelect}>
                <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.6,
        shadowOffset: {width: 0, height: 2},
        elevation: 3,
        padding: 10,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: "hidden",
    },
    title: {
        fontFamily: StandardFonts.openSansBold,
        fontSize: 20,
        textAlign: "center",
    }
});

export default CategoryGridTile;
