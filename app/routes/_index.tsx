import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

    import { Link } from "react-router-dom";

    export default function Index() {
      return (
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/categories">Categories</Link>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  