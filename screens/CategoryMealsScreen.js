import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";

const CategoriesMealScreen = props =>{
    console.log(props.navigation)

    return (
        <View style={styles.screen}>
            <Text>The CategoriesMealScreen</Text>
            <Button title="Go to Details!" onPress={() => {
                props.navigation.navigate({routeName: "MealDetails"})
            }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
});

export default CategoriesMealScreen;