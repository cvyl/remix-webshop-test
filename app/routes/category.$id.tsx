import type {
    //ActionFunction,
    LoaderFunction,
    LoaderFunctionArgs,
} from '@remix-run/node'
import {
    Form,
    //redirect,
    Link,
    useParams,
    useLoaderData,
} from '@remix-run/react'
import { getCategoryById } from 'prisma/category'
import type { Product } from './products.enum'
//import { CategoryListInterface } from './categories.enum'

export const loader: LoaderFunction = async ({
    params,
}: LoaderFunctionArgs) => {
    const categoryId = await getCategoryById(Number(params.id))
    return categoryId
}

export default function Category() {
    const category = useLoaderData<{
        id: number
        name: string
        products: Product[]
    }>()

    const params = useParams()

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-2xl p-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center">
                    <div className="flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">
                                {category.name}
                            </h1>
                            <p className="mb-4">
                                Total Products: {category.products.length}
                            </p>
                        </div>
                    </div>
                </div>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {category.products.map((product) => (
                        <li key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-300">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold mb-2">
                                            {product.name}
                                        </h2>
                                        <p className="text-gray-700 mb-2">
                                            ${product.price}
                                        </p>
                                        <p className="text-gray-600 line-clamp-3">
                                            {product.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
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
                    <Form>
                        <a
                            href={'/'}
                            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:shadow-lg transform transition duration-300"
                        >
                            Back to Home
                        </a>
                    </Form>
                </div>
            </div>
        </div>
    )
}
