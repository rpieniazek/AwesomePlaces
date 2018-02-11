import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import PlacesList from "./src/components/PlacesList/PlacesList";
import PlaceForm from "./src/components/PlaceForm/PlaceForm";


export default class App extends React.Component {

    state = {
        placeName: '',
        places: []
    };

    placeNameHandler = (val) => {
        this.setState({
            placeName: val
        })
    };

    placeSubmitHandler = (prevState) => {
        //validate input

        const currentPlaces = this.state.places;
        const placeName = this.state.placeName;
        this.setState({
            places: [...currentPlaces, placeName]
        })
    };

    placeDeletedHandler = (index) => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place, i) => {
                    return i !== index;
                })
            }
        })
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceForm
                    onChangeText={this.placeNameHandler}
                    placeName={this.state.placeName}
                    onSubmit={this.placeSubmitHandler}
                />
                <PlacesList
                    places={this.state.places}
                    onItemDeleted={this.placeDeletedHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 26
    },

});
