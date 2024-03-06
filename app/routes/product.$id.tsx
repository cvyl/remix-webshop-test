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
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <img src={product.image} alt={product.name} />
      <p>Product Number: {params.id}</p>

    <Form>
      <a href={`/product/edit/${params.id}`}><button>Edit</button></a>
    </Form>

    <Form method="post">
      <button type="submit">Delete</button>
    </Form>
    </div>
  );
}

export const action: ActionFunction = async ({params}) => {
  await deleteProduct(Number(params.id));
  return redirect("/products");
}

