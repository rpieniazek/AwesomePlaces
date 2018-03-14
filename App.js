import React from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import PlacesList from "./src/components/PlacesList/PlacesList";
import PlaceForm from "./src/components/PlaceForm/PlaceForm";
import placeImage from './src/assets/tatras.jpg'
import PlaceDetails from './src/components/PlaceDetail/PlaceDetail'
import {connect} from 'react-redux';
import {addPlace, deletePlace, deselectPlace, selectPlace} from './src/store/actions/index';

class App extends React.Component {

    placeAddedHandler = placeName => {
        this.props.onAddPlace(placeName);
        console.log('Place Added!');
    };

    placeSelectedHandler = (key) => {
        this.props.onSelectPlace(key);
    };

    onPlaceDeletedHandler = () => {
       this.props.onDeletePlace();
    };

    onModalClosedHandler = () => {
        this.props.onDeselectPlace();
    };

    render() {
        return (
            <View style={styles.container}>
                <PlaceDetails
                    selectedPlace={this.props.selectedPlace}
                    onItemDeleted={this.onPlaceDeletedHandler}
                    onModalClosed={this.onModalClosedHandler}/>
                <PlaceForm
                    onPlaceAdded={this.placeAddedHandler}
                />
                <PlacesList
                    places={this.props.places}
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

const mapStateToProps = state => {
    return {
        places: state.places.places,
        selectedPlace: state.places.selectedPlace
    }
};

const mapDispatchToProps = dispatch => {//?
    return {
        onAddPlace: (name) => dispatch(addPlace(name)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (key) => dispatch(selectPlace(key)),
        onDeselectPlace: () => dispatch(deselectPlace())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);