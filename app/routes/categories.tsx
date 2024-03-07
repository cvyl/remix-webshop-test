import { Link, Outlet, useLoaderData } from '@remix-run/react'
import { getAllCategories } from 'prisma/category'
import type { Category } from './categories.enum'

export const loader = async () => {
    const categoryList = await getAllCategories()
    return categoryList
}

export default function Categories() {
    const categoryList = useLoaderData<Category[]>()

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8">Categories</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {categoryList.map((category) => (
                    <Link to={`/category/${category.id}`} key={category.id}>
                        <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transform transition duration-300">
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-2">
                                    {category.name}
                                </h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <Outlet />
        </div>
    )
}
