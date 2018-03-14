import {ADD_PLACE, DESELECT_PLACE, SELECT_PLACE, DELETE_PLACE} from "../actions/actionTypes";
import placeImage from './../../../src/assets/tatras.jpg'

const initialState = {
    placeName: '',
    places: [],
    selectedPlace: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: placeImage
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter((place) => {
                    return place.key !== state.selectedPlace.key;
                }),
                selectedPlace: null
            };
        case  SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
                })
            };
        case DESELECT_PLACE:
            return {
                ...state,
                selectedPlace:null
            };
        default:
            return state;
    }
};

export default reducer;