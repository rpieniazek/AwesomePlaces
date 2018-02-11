import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const listItem = (props) => {
    return (
        <View style={styles.listItem}>
            <Text key={props.i}>{props.place}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: '#DCDCDC',
        paddingBottom:10,
        margin:5
    }
});
export default listItem;