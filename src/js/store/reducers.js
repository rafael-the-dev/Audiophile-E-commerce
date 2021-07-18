import { addItem, getLocalStorageData, removeAll, removeItem, updateItem } from "./actions";

const initialState = {
    cart: [],
    page: null
};

const acessLocalStorage = (state) => {
    const result = localStorage.getItem('store');

    if(!result) {
        localStorage.setItem('store', JSON.stringify(state));
        return state;
    }

    return JSON.parse(result);
};

const add = (state, value) => {
    let cart;

    if(state.cart.some(item => item.product.id === value.product.id)) {
        cart = state.cart.map(item => {
            if(item.product.id === value.product.id) {
                const quantity = item.quantity + value.quantity;
                return { ...item, quantity};
            }
    
            return item;
        })
    } else {
        cart = state.cart.concat([ value ]);
    }
    
    const newState = { ...state ,  cart };
    localStorage.setItem('store', JSON.stringify(newState))
    return newState;
};

const changeItem = (state, value) => {
    let cart;

    if(state.cart.some(item => item.product.id === value.product.id)) {
        cart = state.cart.map(item => {
            if(item.product.id === value.product.id) {
                return { ...value };
            }
    
            return item;
        })
    } else {
        cart = state.cart.concat([ value ]);
    }
    
    const newState = { ...state ,  cart };
    localStorage.setItem('store', JSON.stringify(newState));
    return newState;
};

const remove = (state, value) => {
    let cart = state.cart.filter(item => item.product.id !== value.product.id);
    const newState = { ...state, cart };
    localStorage.setItem('store', JSON.stringify(newState));
    return newState;
};

const delectAll = state => {
    const newState = {...state, cart: []};
    localStorage.setItem('store', JSON.stringify(newState));
    return newState;
};

export const cartReducer = ( state = initialState, action ) => {
    switch(action.type) {
        case addItem().type: {
            return add(state, action.payload);
        }
        case updateItem().type: {
            return changeItem(state, action.payload);
        }
        case removeItem().type: {
            return remove(state, action.payload);
        }
        case removeAll().type: {
            return delectAll(state);
        }
        case getLocalStorageData().type: {
            return acessLocalStorage(state);
        }
        default:
            return state;
    }
};