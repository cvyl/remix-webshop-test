/* eslint-disable jsx-a11y/label-has-associated-control */
import { Form, useLoaderData } from '@remix-run/react'
import type { UpdateProduct } from './products.enum'
import type {
    ActionFunction,
    LoaderFunctionArgs,
    LoaderFunction,
} from '@remix-run/node'
import { redirect } from '@remix-run/node'
import { getProductById, updateProduct } from 'prisma/product'

export const loader: LoaderFunction = async ({
    params,
}: LoaderFunctionArgs) => {
    const productId = await getProductById(Number(params.id))
    return productId
}

export const action: ActionFunction = async ({ request, params }) => {
    const formData = await request.formData()
    const data: UpdateProduct = {
        id: Number(params.id),
        name: formData.get('name') as string,
        description: formData.get('description') as string,
        price: Number(formData.get('price')),
        image: formData.get('image') as string,
        categoryId: Number(formData.get('categoryId')),
    }
    await updateProduct(data)
    return redirect('/products')
}

export default function Edit() {
    const product = useLoaderData<UpdateProduct>()

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-lg p-4 bg-white rounded-lg shadow-lg w-full">
                <h1 className="text-3xl font-bold mb-4">Edit Product</h1>

                <Form method="post" className="space-y-6">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        defaultValue={product.name}
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <label className="block text-gray-700">Description</label>
                    <input
                        type="text"
                        name="description"
                        required
                        defaultValue={product.description}
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <label className="block text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        required
                        defaultValue={product.price}
                        className="w-full px-4 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring focus:border-blue-300"
                    />

                    <label className="block text-gray-700">Image</label>
                    <input
                        type="text"
                        name="image"
                        required
                        defaultValue={product.image}
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
                        Update
                    </button>
                </Form>
            </div>
        </div>
    )
}
