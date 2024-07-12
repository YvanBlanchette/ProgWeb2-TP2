import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate, useOutletContext } from "react-router-dom";

function EditProduct() {
	// Get the id from the URL with useParams
	const { id } = useParams();

	// Get the data form the context with useOutletContext
	const { data, setData } = useOutletContext();

	// Prepare the useNavigate hook
	const navigate = useNavigate();

	// Extract the register, handleSubmit, formState and setValue from the useForm hook
	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
	} = useForm();

	// Find the product using the id and set the default values
	useEffect(() => {
		const product = data[0].find((prod) => prod.id === id);
		if (product) {
			// Prefill the form with the product's data using the setValue
			setValue("id", product.id);
			setValue("nom", product.nom);
			setValue("description", product.description);
			setValue("prix", product.prix);
			setValue("stock", product.stock);
			setValue("categorie", product.categorie);
			setValue("fournisseur", product.fournisseur);
		}
	}, [id, data, setValue]);

	const onSubmit = (formData) => {
		// Create an updated product object from the form data
		const updatedProduct = {
			id: formData.id,
			nom: formData.nom,
			description: formData.description,
			prix: formData.prix,
			stock: formData.stock,
			categorie: formData.categorie,
			fournisseur: formData.fournisseur,
		};

		// Update the products list
		const updatedProducts = data[0].map((prod) => (prod.id === id ? updatedProduct : prod));

		// Set the updated data to the context using setData
		setData([updatedProducts, data[0]]);

		// Display a success message in the form of an alert
		alert("Le produit a bien été modifié");

		// Navigate back to the products page
		navigate("/produits");
	};

	return (
		<div className="flex flex-col p-10">
			{/* Title */}
			<h3 className="text-2xl lg:text-4xl uppercase text-center mb-6">
				Modifier <span className="text-blue-900 font-bold">un Produit</span>
			</h3>

			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					{/* ID input field - DISABLED */}
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="id">
							ID du produit<span className="text-sm text-red-500 font-medium"> *</span>
						</label>
						<input
							type="text"
							id="id"
							name="id"
							placeholder="ex: SB-070"
							className="w-full px-3 py-1 shadow  text-gray-400"
							disabled
							{...register("id", {
								required: { value: true, message: "Veuillez entrer un ID" },
								minLength: { value: 5, message: "Votre ID doit contenir 5 caractères" },
								maxLength: { value: 6, message: "Votre ID doit contenir 5 caractères" },
								pattern: { value: /^[A-Za-z]{2}-\d{3}$/, message: "Format invalide: doit commencer par 2 lettres, suivi d'un tiret et de 3 chiffres" },
							})}
						/>
						{errors.id && <span className="text-xs text-red-500 font-medium tracking-wide">{errors.id.message}</span>}
					</div>

					{/* Name input field */}
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="nom">
							Nom du produit<span className="text-sm text-red-500 font-medium"> *</span>
						</label>
						<input
							type="text"
							id="nom"
							name="nom"
							placeholder="ex: Baignoire"
							className="w-full px-3 py-1 shadow"
							{...register("nom", {
								required: { value: true, message: "Veuillez entrer un nom de produit" },
								minLength: { value: 5, message: "Votre nom de produit doit contenir au moins 5 caractères" },
							})}
						/>
						{errors.nom && <span className="text-xs text-red-500 font-medium tracking-wide">{errors.nom.message}</span>}
					</div>
				</div>

				{/* Price input field */}
				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="prix">
							Prix du produit<span className="text-sm text-red-500 font-medium"> *</span>
						</label>
						<input
							type="number"
							id="prix"
							name="prix"
							placeholder="ex: 500"
							className="w-full px-3 py-1 shadow"
							{...register("prix", {
								required: { value: true, message: "Veuillez entrer un prix" },
							})}
						/>
						{errors.prix && <span className="h-6 text-xs text-red-500 font-medium tracking-wide">{errors.prix.message}</span>}
					</div>

					{/* Stock input field */}
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="stock">
							Quantité en stock<span className="text-sm text-red-500 font-medium"> *</span>
						</label>
						<input
							type="number"
							id="stock"
							name="stock"
							placeholder="ex: 10"
							className="w-full px-3 py-1 shadow"
							{...register("stock", {
								required: { value: true, message: "Veuillez entrer une quantité" },
							})}
						/>
						{errors.stock && <span className="text-xs text-red-500 font-medium tracking-wide">{errors.stock.message}</span>}
					</div>
				</div>

				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					{/* Categorie input field - DISABLED */}
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="categorie">
							Catégorie<span className="text-sm text-red-500 font-medium"> *</span>
						</label>
						<select
							name="categorie"
							id="categorie"
							className="w-full px-3 py-1 shadow  text-gray-400"
							disabled
							{...register("categorie", {
								required: { value: true, message: "Veuillez sélectionner une catégorie" },
							})}
						>
							<option value="Salle de bain">Salle de bain</option>
							<option value="Cuisine">Cuisine</option>
						</select>
						{errors.categorie && <span className="text-xs text-red-500 font-medium tracking-wide">{errors.categorie.message}</span>}
					</div>

					{/* Fournisseur input field - DISABLED */}
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="fournisseur">
							Fournisseur<span className="text-sm text-red-500 font-medium"> *</span>
						</label>
						<select
							name="fournisseur"
							id="fournisseur"
							className="w-full px-3 py-1 shadow text-gray-400"
							disabled
							{...register("fournisseur", {
								required: { value: true, message: "Veuillez sélectionner un fournisseur" },
							})}
						>
							{data[1].map((supplier) => (
								<option key={supplier.nom} value={supplier.nom}>
									{supplier.nom}
								</option>
							))}
						</select>
						{errors.fournisseur && <span className="text-xs text-red-500 font-medium tracking-wide">{errors.fournisseur.message}</span>}
					</div>
				</div>

				{/* Description input field */}
				<div className="flex flex-col lg:flex-row justify-between gap-10 mb-5">
					<div className="flex flex-col w-full gap-1">
						<label className="font-medium" htmlFor="description">
							Description du produit<span className="text-sm text-red-500 font-medium"> *</span>
						</label>
						<textarea
							id="description"
							rows={3}
							name="description"
							className="w-full px-3 py-1 shadow"
							placeholder="ex: Ceci est une courte description pour aider les utilisateurs à trouver le produit le mieux adapté à leurs besoins."
							{...register("description", {
								required: { value: true, message: "Veuillez entrer une description" },
								minLength: { value: 5, message: "Votre description doit contenir au moins 5 caractères" },
							})}
						></textarea>
						{errors.description && <span className="text-xs text-red-500 font-medium tracking-wide">{errors.description.message}</span>}
						<small className="text-red-500 text-xs">* champs obligatoires</small>
					</div>
				</div>

				{/* Submit and Cancel buttons */}
				<div className="flex justify-end items-center gap-4 ">
					<input
						type="submit"
						className=" mt-2 bg-blue-900 text-white font-semibold hover:bg-blue-900/80 cursor-pointer w-fit px-4 py-1 shadow rounded-sm transition-all duration-300"
						value={"Modifier le produit"}
					/>
					<Link to="/produits" className="mt-2 font-semibold bg-slate-300 hover:bg-slate-300/80 w-fit px-4 py-1 shadow rounded-sm transition-all duration-300">
						Annuler
					</Link>
				</div>
			</form>
		</div>
	);
}

export default EditProduct;
