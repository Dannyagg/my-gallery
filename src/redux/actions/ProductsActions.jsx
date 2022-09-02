import {actionTypes} from '../constants/actionTypes'

export const setProducts = (products) => {
    return {
        type:actionTypes.SET_PRODUCTS,
        payload: products,
    }
}
export const selectedProduct = (products) => {
    return {
        type:actionTypes.SELECTED_PRODUCT
    }
}

export const removeSelectedProducts = (products) => {
    return {
        type:actionTypes.REMOVE_SELECTED_PRODUCTS
    }
}