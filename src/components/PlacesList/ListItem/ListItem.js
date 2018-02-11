import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const listItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Text key={props.i}>{props.place}</Text>
            </View>
        </TouchableOpacity>

    );
};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        backgroundColor: '#DCDCDC',
        paddingBottom: 10,
        margin: 5
    }
});
export default listItem;