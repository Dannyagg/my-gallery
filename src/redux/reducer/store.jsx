import {

    GET_ALL_PRODUCTS,

} from '../actions'

const Store = (state, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return (
                { ...state })
        default:
            return state;

    };

}

export default Store