import type { ActionFunction, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { deleteProduct, getProductById } from "prisma/product";
import { ProductListInterface } from "./products.enum";
import { Form, redirect, useLoaderData, useParams } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }: LoaderFunctionArgs) => {
  const productId = await getProductById(Number(params.id));
  return productId;
};

export default function ProductDetailData() {
  const product = useLoaderData<ProductListInterface>();
  const params = useParams(); // Add this line to get the params

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <p className="mb-4">${product.price}</p>
      <img className="w-full h-auto mb-4" src={product.image} alt={product.name} />
      <p className="mb-4">Product Number: {params.id}</p>

      <Form>
        <a href={`/product/edit/${params.id}`} className="bg-blue-500 text-white py-2 px-4 rounded-md inline-block mb-4 hover:shadow-lg transform transition duration-300">
          Edit
        </a>
      </Form>

      <Form method="post">
        <button type="submit" className="bg-red-500 text-white py-2 px-4 rounded-md inline-block hover:shadow-lg transform transition duration-300">
          Delete
        </button>
      </Form>
    </div>
  );
}

export const action: ActionFunction = async ({ params }) => {
  await deleteProduct(Number(params.id));
  return redirect("/products");
}
