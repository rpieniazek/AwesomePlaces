import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import ListItem from "./ListItem/ListItem";

const placeList = (props) => {
    const placesOutput = props.places.map((place, i) => <ListItem key={i} place={place}/>);

    return (
        <View style={styles.placesList}>
            {placesOutput}
        </View>
    );
};

const styles = StyleSheet.create({
    placesList: {
        width: "100%",
    }
});

export default placeList;