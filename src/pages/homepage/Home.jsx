import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../products/ProductCard'
import AddProducts from '../products/AddProducts'

const Home = () => {
    // getting the products from store with useSelector
    const products = useSelector(state => state.products)
    // console.log(products)

    return (
        <div className='py-8 max-w-7xl mx-auto px-6'>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>

                <div className='col-span-2'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-8' >
                        {
                            // conditional rendering for displaying products
                            products.length ? (products.map((product, index) => (
                                <ProductCard key={index} product={product} />
                            ))) : (<div>No Products Found!</div>)
                        }   
                    </div>
                </div>

                <div>
                    <AddProducts/>
                </div>

            </div>
        </div>
    )
}

export default Home
