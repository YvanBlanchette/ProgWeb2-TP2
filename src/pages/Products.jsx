import ProductCard from "@/components/shared/ProductCard";
import { FaPlus } from "react-icons/fa6";
import { Link, useOutletContext } from "react-router-dom";

const Products = () => {
	const context = useOutletContext();
	console.log(context);

	return (
		<div className="flex flex-col p-12">
			<h2 className="text-5xl uppercase text-center mb-2">
				Nos <span className="text-blue-900 font-bold">Produit</span>
			</h2>
			<Link
				to="/produits/ajouter"
				className="flex justify-center items-center gap-2 mb-6 bg-slate-200 hover:bg-slate-300 w-fit mx-auto px-4 py-1 rounded-sm font-medium transition-all duration-300"
			>
				<FaPlus />
				Ajouter un Produit
			</Link>

			<div className="mb-4">
				<h3 className="text-3xl font-bold mb-6 uppercase">Salle de Bain</h3>
				<div className="w-full flex flex-wrap items-center justify-between gap-8">
					{context.data[0]
						.filter((product) => product.categorie === "Salle de bain")
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>

			<hr className="my-20 border-slate-400 w-[80%] mx-auto" />

			<div>
				<h3 className="text-3xl font-bold mb-6 uppercase">Cuisine</h3>
				<div className="w-full flex flex-wrap items-center justify-between gap-8">
					{context.data[0]
						.filter((product) => product.categorie === "Cuisine")
						.map((product) => (
							<ProductCard key={product.id} product={product} />
						))}
				</div>
			</div>
		</div>
	);
};
export default Products;
