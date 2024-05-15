import { prisma } from "~/lib/prisma";
import { ProductListInterface } from "../app/routes/products.enum"; // Replace "~/routes/products.enum" with the correct file path

const db = prisma;

export const getAllProducts = async () => {
 return await db.product.findMany();
};

export const getAllCategories = async () => {
    return await db.category.findMany();
   };

   export const getProductById = async (Productid: number) => {
    if (!Productid) {
      throw new Error('Product ID is required');
    }
    return await db.product.findUnique({
      where: {
        id: Productid
      }
    });
   };

export const getProductsByCategory = async (categoryId: number) => {
 return await db.category.findMany({
   where: {
     id: categoryId
   }
 });
};

export const createProduct = async (product: ProductListInterface) => {
    return await db.product.create({
    data: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        category: {
        connect: {
            id: product.categoryId
        }
        }
    }
    });
    };

export const updateProduct = async (product: ProductListInterface) => {
    return await db.product.update({
    where: {
        id: product.id
    },
    data: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        category: {
        connect: {
            id: product.categoryId
        }
        }
    }
    });
    };

export const deleteProduct = async (productId: number) => {
    return await db.product.delete({
    where: {
        id: productId
    }
    });
    };

export const _createProduct = async (product: ProductListInterface) => {
    return await db.product.create({
    data: {
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
        category: {
        connect: {
            id: product.categoryId
        }
        }
    }
    });
    }