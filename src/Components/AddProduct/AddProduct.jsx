import React from 'react'

export default function AddProduct() {
  return <>
  <div className="w-75 mx-auto py-5">
            <h2>Add Product 2</h2>
            <form className='my-4'>
                <label htmlFor="first_name">Product Name</label>
                <input id='first_name' type="text" placeholder='Product Name ..' className='form-control mb-4 mt-1' />
                <label htmlFor="last_name">Product Price</label>
                <input id='last_name' type="text" placeholder='Price..' className='form-control mb-4 mt-1' />
                <label htmlFor="age">Category</label>
                <input id='age' type="text" placeholder='Category..' className='form-control mb-4 mt-1' />
                <label htmlFor="email">Upload image</label>
                <input id='email' type="file" className='form-control mb-4 mt-1' />
                <label htmlFor="email">Description</label>
                <textarea className='form-control' name="desc" id="" placeholder='Description..' rows="4"></textarea>
                <button className='btn btn-outline-info fw-bolder mt-3'>Add</button>
            </form>
        </div>
    </>
}