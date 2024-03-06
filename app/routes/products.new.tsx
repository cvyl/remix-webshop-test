import type { CreateProduct } from "app/routes/products.enum";
//import type { Category } from "app/routes/categories.enum";
//import { getAllCategories } from "prisma/category";
import { Form } from "@remix-run/react";
import type { ActionFunction } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { _createProduct } from "prisma/product"

export const action : ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const data: CreateProduct = {
    id: 0,
    name: formData.get("name") as string,
    description: formData.get("description") as string,
    price: Number(formData.get("price")),
    image: formData.get("image") as string,
    categoryId: Number(formData.get("categoryId")),
  };

  await _createProduct(data);

    return redirect("/products");
}

export default function Create() {
    //const data = useActionData<CreateProduct>();
    return (
      <div>
        <h1>Create Contact</h1>
        <Form method="post">
            <label>Name <input type="text" name="name" required /></label>
            <label>Description <input type="text" name="description" required /></label>
            <label>Price <input type="number" name="price" required /></label>
            <label>Image <input type="text" name="image" required /></label>
            <label>Category
                <select name="categoryId" required>
                    <option value="">Select a category</option>
                    <option value="1">Category 1</option>
                    <option value="2">Category 2</option>
                    <option value="3">Category 3</option>
                </select>
            </label>
            <button type="submit">Create</button>
        </Form>
        </div>
    );
}