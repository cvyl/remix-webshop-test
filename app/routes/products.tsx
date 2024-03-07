import { Link, Outlet, useLoaderData } from '@remix-run/react'
import { getAllProducts } from 'prisma/product'
import type { Product } from './products.enum'

export const loader = async () => {
    const productList = await getAllProducts()
    return productList
}

export default function Products() {
    const productList = useLoaderData<Product[]>()

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Products</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {productList.map((product) => (
                    <Link to={`/product/${product.id}`} key={product.id}>
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
                ))}
            </div>

            <Outlet />
        </div>
    )
}
