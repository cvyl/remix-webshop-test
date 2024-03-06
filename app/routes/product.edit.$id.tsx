import { Form, useLoaderData } from "@remix-run/react";
import type { UpdateProduct } from "./products.enum";
import type { ActionFunction, LoaderFunctionArgs, LoaderFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { getProductById, updateProduct } from "prisma/product";

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const productId = await getProductById(Number(params.id));
  return productId;
};

export const action : ActionFunction = async ({ request, params }) => {
    const formData = await request.formData();
    const data: UpdateProduct = {
        id: Number(params.id),
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        price: Number(formData.get("price")),
        image: formData.get("image") as string,
        categoryId: Number(formData.get("categoryId")),
    };
    await updateProduct(data);
    return redirect("/products");
}

export default function Edit() {
    const product = useLoaderData<UpdateProduct>();
    return (
        <div>
            <h1>Edit Product</h1>
            <Form method="post">
                <label>Name <input type="text" name="name" required defaultValue={product.name} /></label>
                <label>Description <input type="text" name="description" required defaultValue={product.description} /></label>
                <label>Price <input type="number" name="price" required defaultValue={product.price} /></label>
                <label>Image <input type="text" name="image" required defaultValue={product.image} /></label>
                <label>Category
                    <select name="categoryId" required>
                        <option value="">Select a category</option>
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>
                </label>
                <button type="submit">Update</button>
            </Form>
        </div>
    );
}

