import {createSelector} from 'reselect';
// type 1 of selector : input selector 

const selectCart = state =>state.cart;
 
export const selectCartItems = createSelector (
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumalatedQuantity, cartItem) => accumalatedQuantity + cartItem.quantity,   0)
)