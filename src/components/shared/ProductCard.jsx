import { FaPenToSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { nom, id, description, fournisseur, prix, stock } = product;

	return (
		<article className="bg-white shadow-md py-4 px-6 w-[225px]">
			<div className="text-center mb-2">
				<h4 className="text-xl uppercase font-semibold leading-none">{nom}</h4>
				<small className="italic mb-2">{id}</small>
				<p className="">{description}</p>
			</div>

			<ul className="text-sm mb-3">
				<li className="flex justify-between items-center">
					<span className="font-semibold">Fournisseur: </span>
					<span>{fournisseur}</span>
				</li>
				<li className="flex justify-between items-center">
					<span className="font-semibold">Prix: </span>
					<span>${prix},00</span>
				</li>
				<li className="flex justify-between items-center">
					<span className="font-semibold">Quantité en stock: </span>
					<span>{stock}</span>
				</li>
			</ul>

			<div>
				<Link
					to={`/produits/modifier/${id}`}
					className="flex items-center justify-center mx-auto px-4 py-1 rounded-sm gap-2 bg-blue-900 hover:bg-blue-900/80 text-white transition-all duration-300"
				>
					<FaPenToSquare />
					Modifier
				</Link>
			</div>
		</article>
	);
};
export default ProductCard;
