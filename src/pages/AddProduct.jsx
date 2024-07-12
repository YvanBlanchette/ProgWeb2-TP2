import { Link, useOutletContext } from "react-router-dom";

function AddProduct() {
	const context = useOutletContext();
	console.log(context.data[1]);

	const handleSubmit = (e) => {
		e.preventDefault();
		setData([
			...data,
			{
				id: e.target.id.value,
				nom: e.target.nom.value,
				description: e.target.description.value,
				prix: e.target.prix.value,
				stock: e.target.stock.value,
				categorie: e.target.categorie.value,
				fournisseur: e.target.fournisseur.value,
			},
		]);
	};

	return (
		<div className="flex flex-col p-10">
			<h3 className="text-2xl lg:text-5xl text-center mb-6 font-semibold">Ajouter un Produit</h3>

			<form className="w-full">
				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="id">
							ID du produit
						</label>
						<input type="text" id="id" name="id" placeholder="ex: SB-070" className="w-full px-3 py-1 shadow" />
					</div>
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="nom">
							Nom du produit
						</label>
						<input type="text" id="nom" name="nom" placeholder="ex: Baignoire" className="w-full px-3 py-1 shadow" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="prix">
							Prix du produit
						</label>
						<input type="number" id="prix" name="prix" placeholder="ex: 500" className="w-full px-3 py-1 shadow" />
					</div>
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="stock">
							Quantité en stock
						</label>
						<input type="number" id="stock" name="stock" placeholder="ex: 10" className="w-full px-3 py-1 shadow" />
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="categorie">
							Catégorie
						</label>
						<select name="categorie" id="categorie" className="w-full px-3 py-1 shadow">
							<option value="Salle de bain">Salle de bain</option>
							<option value="Cuisine">Cuisine</option>
						</select>
					</div>
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="fournisseur">
							Fournisseur
						</label>
						<select name="fournisseur" id="fournisseur" className="w-full px-3 py-1 shadow">
							{" "}
							{context.data[1].map((supplier) => (
								<option key={supplier.nom} value={supplier.nom}>
									{supplier.nom}
								</option>
							))}
						</select>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="description">
							Description du produit
						</label>
						<textarea
							id="description"
							rows={3}
							name="description"
							className="w-full px-3 py-1 shadow"
							placeholder="ex: Ceci est une courte description pour aider les utilisateurs à trouver le produit le mieux adapté à leurs besoins."
						></textarea>
					</div>
				</div>
				<div className="flex justify-end items-center gap-4 -mb-4 ">
					<input
						type="submit"
						className=" mt-2 bg-blue-900 text-white font-semibold hover:bg-blue-900/80 cursor-pointer w-fit px-4 py-1 shadow rounded-sm transition-all duration-300"
						value={"Ajouter le produit"}
					/>
					<Link to="/produits" className=" mt-2 font-semibold bg-slate-300 hover:bg-slate-300/80 w-fit px-4 py-1 shadow rounded-sm transition-all duration-300">
						Annuler
					</Link>
				</div>
			</form>
		</div>
	);
}

export default AddProduct;
