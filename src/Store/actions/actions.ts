export const addToCart = "ADDINGTOCART";
export const deleteFromCart = 'DELETEFROMCART';

interface AddingAction {
    type: typeof addToCart;

}

interface DeletingAction {
    type: typeof deleteFromCart;
}

export type ActionTypes = AddingAction | DeletingAction;