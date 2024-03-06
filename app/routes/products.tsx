import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getAllProducts } from "prisma/product";
import type { Product } from "./products.enum";
export const loader = async () => {
 const productList = await getAllProducts();
 return productList;
};

export default function Products() {
 const productList = useLoaderData<Product[]>();
 return (
   <div>
     <h1>Products</h1>
     <ul>
       {productList.map((product) => (
         <li key={product.id}>
           <Link to={`/product/${product.id}`}>{product.name}</Link>
         </li>
       ))}
     </ul>
     <Outlet />
   </div>
 );
}