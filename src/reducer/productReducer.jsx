import {

    GET_ALL_PRODUCTS,

} from '../actions'

const productReducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return (
                { ...state })
        default:
            return state;

    };

}

export default productReducer