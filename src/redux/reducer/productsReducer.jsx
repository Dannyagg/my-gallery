import { actionType } from "../constants/actionType";

const initialState = {
    products: [],
};

export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actionType.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case actionType.SELECTED_PRODUCT:
            return { ...state, ...payload };
        case actionType.REMOVE_SELECTED_PRODUCT:
            return {};
        default:
            return state;
    }
};