import { Link } from "react-router-dom";

function EditProduct() {
	return (
		<div className="flex flex-col items-center justify-center h-[calc(100vh-160px)] gap-4">
			<h3 className="mt-20 text-2xl lg:text-5xl">Modifier un Produit</h3>
			<Link to="/" className="lg:text-2xl mt-2 hover:bg-slate-200 w-fit px-4 py-1 rounded-sm transition-all duration-300">
				Retour vers la page d'accueil
			</Link>
		</div>
	);
}

export default EditProduct;
