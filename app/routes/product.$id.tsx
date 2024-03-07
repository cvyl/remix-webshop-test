import type {
    ActionFunction,
    LoaderFunction,
    LoaderFunctionArgs,
} from '@remix-run/node'
import { deleteProduct, getProductById } from 'prisma/product'
import { ProductListInterface } from './products.enum'
import { Form, redirect, useLoaderData, useParams } from '@remix-run/react'

export const loader: LoaderFunction = async ({
    params,
}: LoaderFunctionArgs) => {
    const productId = await getProductById(Number(params.id))
    return productId
}

export default function ProductDetailData() {
    const product = useLoaderData<ProductListInterface>()
    const params = useParams() // Add this line to get the params

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-2xl p-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center">
                    <img
                        className="w-1/2 h-auto mr-4 rounded-lg"
                        src={product.image}
                        alt={product.name}
                    />

                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">
                                {product.name}
                            </h1>
                            <p className="mb-4">{product.description}</p>
                            <p className="mb-4">${product.price}</p>
                            <p className="mb-4">Product Number: {params.id}</p>
                        </div>

                        <div className="flex items-center">
                            <Form>
                                <a
                                    href={`/product/edit/${params.id}`}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md mr-4 hover:shadow-lg transform transition duration-300"
                                >
                                    Edit
                                </a>
                            </Form>

                            <Form method="post">
                                <button
                                    type="submit"
                                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:shadow-lg transform transition duration-300"
                                >
                                    Delete
                                </button>
                            </Form>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <Form>
                        <button
                            onClick={() => window.history.back()}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:shadow-lg transform transition duration-300"
                        >
                            Back
                        </button>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export const action: ActionFunction = async ({ params }) => {
    await deleteProduct(Number(params.id))
    return redirect('/products')
}
