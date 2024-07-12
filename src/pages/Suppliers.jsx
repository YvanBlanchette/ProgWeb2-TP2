import SupplierCard from "@/components/SupplierCard";
import { useOutletContext } from "react-router-dom";

const Suppliers = () => {
	const context = useOutletContext();
	console.log(context);

	return (
		<div className="flex flex-col p-12">
			<h2 className="text-5xl uppercase text-center mb-10">
				Nos <span className="text-blue-900 font-bold">Fournisseurs</span>
			</h2>

			<div className="mb-4">
				<h3 className="text-3xl font-bold mb-6 uppercase">Salle de Bain</h3>
				<div className="w-full flex flex-wrap items-center justify-between gap-8">
					{context.data[1]
						.filter((supplier) => supplier.categorie === "Salle de bain")
						.map((supplier) => (
							<SupplierCard key={supplier.nom} supplier={supplier} />
						))}
				</div>
			</div>

			<hr className="my-16 border-slate-400 w-[80%] mx-auto" />

			<div className="mb-4">
				<h3 className="text-3xl font-bold mb-6 uppercase">Cuisine</h3>
				<div className="w-full flex flex-wrap items-center justify-between gap-8">
					{context.data[1]
						.filter((supplier) => supplier.categorie === "Cuisine")
						.map((supplier) => (
							<SupplierCard key={supplier.nom} supplier={supplier} />
						))}
				</div>
			</div>
		</div>
	);
};
export default Suppliers;
