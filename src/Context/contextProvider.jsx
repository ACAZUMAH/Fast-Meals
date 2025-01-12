
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        const updateAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingItem = state.items[existingItemIndex];
        let updateItems;
        if(existingItem){
            const updateItem = {
                ...existingItem,
                amount: existingItem.amount + action.item.amount
            };
            updateItems = [...state.items];
            updateItems[existingItemIndex] = updateItem; 
        }else{
            updateItems = state.items.concat(action.item);
        }
        return {
            items: updateItems,
            totalAmount: updateAmount
        };
    };
    if(action.type === 'REMOVE_ITEM'){
        const existingItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingItemIndex];
        let updateItems;
        if(existingItem.amount === 1){
            updateItems = state.items.filter(
                (item) => item.id !== action.id
            );
        }else{
            const updateItem = { ...existingItem, amount: existingItem.amount - 1 };
            updateItems = [...state.items];
            updateItems[existingItemIndex] = updateItem;
        };
        const updateAmount = state.totalAmount - existingItem.price;
        return {
            items: updateItems,
            totalAmount: updateAmount
        };
    }
    return defaultCartState;
};

const CartProvider = (props) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = (item) => {
        dispatchCart({ type: 'ADD_ITEM', item: item });   
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCart({ type: 'REMOVE_ITEM', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>; 
};

export default CartProvider;