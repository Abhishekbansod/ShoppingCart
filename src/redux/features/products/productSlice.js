import { createSlice } from '@reduxjs/toolkit'

// this represents initial value in state
const initialState = [
    {
        id: 1,
        name: 'Iphone 16',
        price: 140,
        category: 'Gadgets',
        image: "https://images.unsplash.com/photo-1616410011236-7a42121dd981?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: '21-01-2024'
    },
    {
        id: 2,
        name: 'Polo T-shirt',
        price: 23,
        category: 'Clothing',
        image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: '19-03-2025'
    },
    {
        id: 3,
        name: 'Veg Paratha',
        price: 8,
        category: 'Food',
        image: "https://images.unsplash.com/photo-1683533743190-89c9b19f9ea6?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: '19-12-2024'
    },
    {
        id: 4,
        name: 'Makeup Brush',
        price: 15,
        category: 'Beauty',
        image: "https://images.unsplash.com/photo-1487412840181-f63f62e6a0ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: '15-01-2025'
    }

]

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addProduct : (state, action) => {
            state.push({
                id : state.length > 0 ? state[state.length - 1].id : 1,
                ...action.payload
            })
        }
    }
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer
