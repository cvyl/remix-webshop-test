import {prisma} from "~/lib/prisma"

import { CategoryListInterface  } from "../app/routes/categories.enum"; // Replace "~/routes/products.enum" with the correct file path

const db = prisma;

export const getAllCategories = async () => {
    return await db.category.findMany();
   };


export const getCategoryById = async (categoryId: number) => {
    return await db.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        products: true,
      },
    });
  };
  

export const createCategory = async (category: CategoryListInterface) => {
    return await db.category.create({
        data: {
            name: category.name,
            description: category.description,
            products: { connect: { id: category.id } }
        }
    });
};

export const updateCategory = async (category: CategoryListInterface) => {
    return await db.category.update({
        where: {
            id: category.id
        },
        data: {
            name: category.name,
            description: category.description,
            products: { connect: { id: category.id } }
        }
    });
};

export const deleteCategory = async (categoryId: number) => {
    return await db.category.delete({
        where: {
            id: categoryId
        }
    });
};

export const getCategoryProducts = async (categoryId: number) => {
    return await db.product.findMany({
        where: {
            id: categoryId

        }
    });
};

export const getCategoryProductsCount = async (categoryId: number) => {
    return await db.product.count({
        where: {
            id: categoryId
        }
    });
};

export const getCategoryProductsPrice = async (categoryId: number) => {
    return await db.product.aggregate({
        where: {
            id: categoryId
        },
        _sum: {
            price: true
        }
    });
};
