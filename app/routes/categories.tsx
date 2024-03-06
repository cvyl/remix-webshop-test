import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getAllCategories } from "prisma/category";
import type { Category } from "./categories.enum";
export const loader = async () => {
 const categoryList = await getAllCategories();
 return categoryList;
};

export default function Categories() {
 const categoryList = useLoaderData<Category[]>();
 return (
   <div>
     <h1>Categories</h1>
     <ul>
       {categoryList.map((category) => (
         <li key={category.id}>
           <Link to={`/category/${category.id}`}>{category.name}</Link>
         </li>
       ))}
     </ul>
     <Outlet />
   </div>
 );
}