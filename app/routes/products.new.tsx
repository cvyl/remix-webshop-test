/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form } from '@remix-run/react'
import type { CreateProduct } from 'app/routes/products.enum'
import type { ActionFunction } from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { _createProduct } from 'prisma/product'

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData()
    const data: CreateProduct = {
        id: 0,
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: Number(formData.get('price')),
        image: formData.get('image') as string,
        categoryId: Number(formData.get('categoryId')),
    }

    await _createProduct(data)

    return redirect('/products')
}

export default function Create() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-lg p-4 bg-white rounded-lg shadow-lg w-full">
                <h1 className="text-3xl font-bold mb-4">Create Product</h1>

                <Form method="post" className="space-y-6">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <label className="block text-gray-700">Description</label>
                    <input
                        type="text"
                        name="description"
                        required
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        required
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <label className="block text-gray-700">Image</label>
                    <input
                        type="text"
                        name="image"
                        required
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <label className="block text-gray-700">Category</label>
                    <select
                        name="categoryId"
                        required
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    >
                        <option value="">Select a category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:shadow-lg transform transition duration-300"
                    >
                        Create
                    </button>
                </Form>
            </div>
        </div>
    )
}
