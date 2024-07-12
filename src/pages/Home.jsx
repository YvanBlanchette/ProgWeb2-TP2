import { GiFlowerTwirl } from "react-icons/gi";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div className="relative w-[100vw] md:w-[80vw]  grid grid-cols-12">
			<div className="col-span-12 lg:col-span-6">
				<img src="/assets/images/hero.jpg" alt="robinet" />
			</div>
			<div className="col-span-12 lg:col-span-6 px-12">
				<h1 className="flex items-center justify-center gap-2 mt-10 mb-6">
					<GiFlowerTwirl className="text-blue-900 text-7xl font-semibold" />
					<div className="text-5xl font-normal">
						Perfect<span className="text-blue-900 font-bold">Flow</span>
					</div>
				</h1>
				<p className="text-justify text-gray-800 mb-4">
					Votre destination pour des solutions de plomberie haut de gamme spécialement conçues pour sublimer les cuisines et salles de bains. Chez PerfectFlow,
					nous mettons un point d'honneur à sélectionner une collection exquise de produits alliant fonctionnalité et élégance inégalée.
				</p>
				<p className="text-justify text-gray-800 mb-4">
					De robinetterie innovante redéfinissant le débit d'eau à des éviers et accessoires méticuleusement conçus, chaque article de notre catalogue reflète
					notre engagement envers la qualité et l'innovation. Que vous rénoviez une maison ou conceviez un espace commercial, PerfectFlow offre une combinaison
					parfaite de style et de performance, où chaque détail contribue à une expérience d'eau sans compromis.
				</p>
				<p className="text-justify text-gray-800 mb-4">
					Découvrez l'essence de la sophistication avec PerfectFlow, où le luxe rencontre l'utilité dans une harmonie parfaite.
				</p>
				<Link
					to={`/produits/`}
					className="flex items-center justify-center mx-auto px-8 py-2 rounded-sm gap-2 bg-blue-900 hover:bg-blue-900/80 text-white transition-all duration-300 uppercase font-semibold w-fit"
				>
					Découvrir notre Collection
				</Link>
			</div>
		</div>
	);
};
export default Home;
