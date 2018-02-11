import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import PlacesList from "./src/components/PlacesList/PlacesList";
import PlaceForm from "./src/components/PlaceForm/PlaceForm";
import placeImage from './src/assets/tatras.jpg'
import PlaceDetails from './src/components/PlaceDetail/PlaceDetail'

export default class App extends React.Component {

    state = {
        placeName: '',
        places: [],
        selectedPlace: null
    };

    placeNameHandler = (val) => {
        this.setState({
            placeName: val
        })
    };

    placeSubmitHandler = () => {
        const placeName = this.state.placeName;
        if (placeName.trim().length !== 0) {
            this.setState({
                places: this.state.places.concat({
                    key: Math.random(),
                    name: placeName,
                    image: placeImage
                })
            })
        }
    };

    placeSelectedHandler = (key) => {
        this.setState(prevState => {
            return {
                selectedPlace: prevState.places.find(place => {
                    return place.key === key;
                })
            }
        });
    };

    onPlaceDeletedHandler = () => {
        this.setState(prevState => {
            return {
                places: prevState.places.filter((place) => {
                    return place.key !== prevState.selectedPlace.key;
                }),
                selectedPlace: null
            }
        });
    };

    onModalClosedHandler = () => {
        this.setState(() => {
            return {
                selectedPlace: null
            }
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetails
                    selectedPlace={this.state.selectedPlace}
                    onItemDeleted={this.onPlaceDeletedHandler}
                    onModalClosed={this.onModalClosedHandler}/>
                <PlaceForm
                    onChangeText={this.placeNameHandler}
                    placeName={this.state.placeName}
                    onSubmit={this.placeSubmitHandler}
                />
                <PlacesList
                    places={this.state.places}
                    onItemSelected={this.placeSelectedHandler}
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
