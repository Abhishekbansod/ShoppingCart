import {createSlice, nanoid} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'carts',
    initialState: [],
    reducers: {
        
        // add to cart
        addToCart: (state, action) => {
            // checking if product is already in cart or not 
            const existingProduct = state.find((product) => product.productId === action.payload.id)
            if(existingProduct){
                alert('Product is already added to cart!')
            }else{
                state.push({
                    id: nanoid(),
                    ...action.payload,
                    productId: action.payload.id,
                    quantity: 1
                });
            }
        },

        // increase quantity of added product(in cart)
        increaseQuantity : (state, action) => {
            const product = state.find((product) => product.id === action.payload)
            if(product){
                product.quantity++
            }
        },

        // decrease quantity of added product(in cart)
        decreaseQuantity : (state, action) => {
            const product = state.find((product) => product.id === action.payload)

            if(product && product.quantity > 1){
                product.quantity--
            }
        },

        // remove from cart
        removeFromCart : (state, action) => {
            return state.filter((product) => product.id !== action.payload)
        }
    }
})


export const {addToCart, increaseQuantity, decreaseQuantity, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer

