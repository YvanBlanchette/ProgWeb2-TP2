import { Outlet, useOutletContext } from "react-router-dom";
import Sidebar from "./components/shared/Sidebar";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import listeProduits from "/data/listeProduits";
import listeFournisseurs from "/data/listeFournisseurs";
import { useState } from "react";

function App() {
	const [data, setData] = useState([listeProduits, listeFournisseurs]);
	const context = useOutletContext();

	return (
		<div className="min-h-screen w-screen flex">
			<Sidebar />
			<div className="flex-1 bg-gray-50 min-h-screen max-w-[100vw] md:max-w-[80vw] md:ml-[20vw] flex flex-col">
				<Header />
				<main className="flex-1">
					<Outlet context={{ data, setData }} />
				</main>
				<Footer />
			</div>
		</div>
	);
}

export default App;
