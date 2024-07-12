import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div className="flex flex-col items-center justify-center h-[calc(100vh-160px)] gap-4">
			<h1 className="mt-20 text-2xl lg:text-5xl flex items-center gap-4">
				<FaTriangleExclamation className="text-secondary text-7xl" /> Erreur 404 - Page introuvable...
			</h1>
			<Link to="/" className="lg:text-2xl mt-2 hover:bg-slate-200 w-fit px-4 py-1 rounded-sm transition-all duration-300">
				Retour vers la page d'accueil
			</Link>
		</div>
	);
}

export default ErrorPage;
