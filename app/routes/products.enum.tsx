export type ProductCategory = {
    id: number
    name: string
    description: string
    image: string
}
export type Product = {
    id: number
    name: string
    description: string
    price: number
    image: string
    category: ProductCategory
}
export type ProductListInterface = {
    id: number
    name: string
    description: string
    price: number
    image: string
    categoryId: number
}

export type CreateProduct = {
    id: number
    name: string
    description: string
    price: number
    image: string
    categoryId: number
}

export type UpdateProduct = {
    id: number
    name: string
    description: string
    price: number
    image: string
    categoryId: number
}
