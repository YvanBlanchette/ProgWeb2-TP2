const SupplierCard = ({ supplier }) => {
	const { nom, siteWeb, categorie, logo } = supplier;

	return (
		<article className="bg-white shadow-md">
			<div className="w-[225px] h-[100px] px-2 py-4 flex items-center justify-center">
				<img src={`${logo}`} alt={nom} className="max-w-full max-h-full object-cover" />
			</div>
			<hr />
			<div className="py-4 px-6">
				<div className="text-center mb-2">
					<h4 className=" uppercase font-semibold leading-none">{nom}</h4>
					<small className="italic mb-2">{categorie}</small>
				</div>
				<div>
					<a
						href={siteWeb}
						target="_blank"
						className="flex items-center justify-center mx-auto px-4 py-1 rounded-sm gap-2 bg-blue-900 hover:bg-blue-900/80 text-white transition-all duration-300"
					>
						Visiter le site web
					</a>
				</div>
			</div>
		</article>
	);
};
export default SupplierCard;
