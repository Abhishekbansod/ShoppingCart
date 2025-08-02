import React from 'react'
import { useSelector } from 'react-redux'

const BillingPage = () => {

    const carts = useSelector((state) => state.carts)
    const subTotal = carts.reduce((acc, items) => acc + (items.price * items.quantity), 0)
    const tax = subTotal * 0.1

    const totalBilling = subTotal + tax

    return (
        <div className='mt-6 rounded-lg bg-white p-6 shadow-md md:mt-0' >
            <div className='mb-2 flex space-x-6 justify-between'>
                <p className='text-gray-700'>Subtotal</p>
                <p className='text-gray-700'>${subTotal.toFixed(2)}</p>
            </div>

            <div className='mb-2 flex space-x-6 justify-between'>
                <p className='text-gray-700'>Shipping</p>
                <p className='text-gray-700'>${tax.toFixed(2)}</p>
            </div>

            <div className='mb-2 flex space-x-6 justify-between'>
                <p className='text-gray-700'>Total</p>
                <p className='text-gray-700'>${totalBilling.toFixed(2)}</p>
            </div>

        </div>
    )
}

export default BillingPage
