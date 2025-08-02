import React from 'react'
import {useDispatch} from 'react-redux'
import { addToCart } from '../../redux/features/carts/cartSlice'

const ProductCard = ({ product }) => {
    // console.log(product)
    const { id, name, price, category, image, date } = product || {}

    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(product))
    }

    return (
        <div className="card bg-base-100 w-80 shadow-xl">
            <figure className='h-44' >
                <img
                    src={image}
                    alt="image" />
            </figure>
            <div className="card-body bg-white">
                <h2 className="card-title text-gray-800 ">{name}</h2>
                <p className='text-gray-600' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, totam.</p>
                <div className="card-actions justify-end items-center">
                    <p className='text-blue-600 font-semibold'>${price}</p>


                    <button onClick={handleAddToCart} className="btn btn-primary bg-blue-500 text-white 
                    hover:bg-blue-600">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
