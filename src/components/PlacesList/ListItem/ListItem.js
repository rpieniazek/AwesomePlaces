import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from "react-native";

const listItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Image source={props.placeImage} style={styles.placeImage}/>
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
        flexDirection: 'row',
        alignItems: "center",
        margin: 5
    },
    placeImage: {
        marginRight: 8,
        height:30,
        width:30
    }
});
export default listItem;