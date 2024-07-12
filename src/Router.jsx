import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Products from "./pages/Products";
import Suppliers from "./pages/Suppliers";
import AddProduct from "./pages/AddProduct";
import EditProduct from "./pages/EditProduct";

export const Router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/produits",
				element: <Products />,
			},
			{
				path: "/produits/modifier/:id",
				element: <EditProduct />,
			},
			{
				path: "/produits/ajouter",
				element: <AddProduct />,
			},

			{
				path: "/fournisseurs",
				element: <Suppliers />,
			},
			// Error Page
			{
				path: "*",
				element: <ErrorPage />,
			},
		],
	},
]);
