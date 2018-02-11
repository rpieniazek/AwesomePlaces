import React from 'react';
import {StyleSheet, Text, FlatList} from "react-native";
import ListItem from "./ListItem/ListItem";

const placeList = (props) => {
    return (
        <FlatList
            style={styles.placesList}
            data={props.places}
            renderItem={(info) => (
                <ListItem
                    place={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    placesList: {
        width: "100%",
    }
});

export default placeList;