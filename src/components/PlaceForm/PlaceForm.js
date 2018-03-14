import {View, TextInput, Button, StyleSheet} from "react-native";
import React, { Component } from "react";


class PlaceForm extends Component {

    state = {
        placeName: ""
    };

    placeNameHandler = (val) => {
        this.setState({
            placeName: val
        })
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.props.onPlaceAdded(this.state.placeName);
    };

    render (){
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    value={this.state.placeName}
                    placeholder="Type place name str"
                    onChangeText={this.placeNameHandler}
                    style={styles.placeInput}
                />
                <Button
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}/>
            </View>
        )
    };
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

export default PlaceForm;