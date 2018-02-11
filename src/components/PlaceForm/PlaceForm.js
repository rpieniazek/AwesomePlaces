import {View, TextInput, Button, StyleSheet} from "react-native";
import * as React from "react";

placeForm = (props) => {

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={props.placeName}
                placeholder="Type place name str"
                onChangeText={props.onChangeText}
                style={styles.placeInput}
            />
            <Button title="Add"
                    style={styles.placeButton}
                    onPress={props.onSubmit}/>
        </View>
    );
};


const styles = StyleSheet.create({
    inputContainer: {
        // flex: 1,
        width: "100%",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default placeForm;