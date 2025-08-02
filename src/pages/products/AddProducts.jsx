import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/features/products/productSlice'

const AddProducts = () => {

    // pre-requisite for useForm hook 
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    // const onSubmit = (data) => console.log(data) to check if form is submitted or not in console

    const dispatch = useDispatch()
    const onSubmit = (data) => {
        dispatch(addProduct(data))
    }

    return (
        <div className='max-w-md mx-auto bg-white shadow-lg rounded-lg p-6' >
            <h2 className='text-sl font-semibold text-gray-700 mb-2' >Add New Product</h2>

            <form onSubmit={handleSubmit(onSubmit)} className='space-y-2'>

                {/* for name */}
                <div>
                    <label className='block text-sm font-medium text-gray-600'>Product Name </label>
                    <input
                        className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        type="text"
                        name="name"
                        id="name"
                        placeholder='Enter Product Name'
                        {...register("name", { required: true })} />
                </div>

                {/* for category */}
                <div>
                    <label className='block text-sm font-medium text-gray-600'>Category </label>
                    <select {...register("category", { required: true })} name="category" id="category" className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500' >
                        <option value="Choose a Category">Choose a Category</option>
                        <option value="clothing">Clothing</option>
                        <option value="gadgets">Gadgets</option>
                        <option value="beauty">Beauty</option>
                        <option value="food">Food</option>
                    </select>
                </div>

                {/* product image URL */}
                <div>
                    <label className='block text-sm font-medium text-gray-600'>Image URL </label>
                    <input
                        className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500'
                        type="text"
                        name="image"
                        id="image"
                        placeholder='Paste the image URL'
                        {...register("image", { required: true })} />
                </div>

                {/* for price and date */}
                <div className='grid grid-cols-2 gap-4' >
                    {/* for price */}
                    <div>
                        <label className='block text-sm font-medium text-gray-600'>Price </label>
                        <input
                            className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500'
                            type="number"
                            name="price"
                            id="price"
                            placeholder='Enter Price'
                            {...register("price", { required: true })} />
                    </div>

                    {/* for date */}
                    <div>
                        <label className='block text-sm font-medium text-gray-600'>Date </label>
                        <input
                            className='w-full bg-gray-50 text-black mt-1 p-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder:text-black'
                            type="date"
                            name="date"
                            id="date"
                            {...register("date", { required: true })} />
                    </div>

                </div>


                <button type='submit'
                    className='w-full bg-blue-600 py-2 rounded-lg text-white font-semibold 
                hover:bg-blue-500' >Add Product</button>

            </form>
        </div>
    )
}

export default AddProducts
