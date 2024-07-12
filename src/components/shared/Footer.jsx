const Footer = () => {
	return (
		<footer className="w-full min-h-[10vh] bg-slate-300/50 py-6 flex flex-col items-center">
			<p className="text-center font-medium mb-1">
				&copy; Copyright {new Date().getFullYear()} -{" "}
				<a href="https://yvanblanchette.com" className="text-secondary opacity-80 hover:opacity-100 font-semibold transition-all duration-300">
					Yvan jr Blanchette
				</a>{" "}
				- Tous droits réservés
			</p>
			<p className="text-sm text-gray-600">Dans le cadre de l'AEC en développement web du cégep de Trois-Rivières</p>
		</footer>
	);
};
export default Footer;
