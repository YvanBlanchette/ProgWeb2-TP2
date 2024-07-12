import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
	const pathname = useLocation().pathname;
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		// To update the time every minute I use an interval
		const interval = setInterval(() => {
			setTime(new Date());
		}, 60000);

		return () => clearInterval(interval);
	}, []);

	const formatTime = (date) => {
		// Function ormat time to exclude the seconds from the date
		return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	};

	const getMainSlug = (path) => {
		const sections = path.split("/").filter(Boolean);
		return sections.length > 0 ? sections[0].toUpperCase() : "ACCUEIL";
	};

	return (
		<header className="w-full bg-white shadow-xl min-h-[10vh]">
			<div className=" flex justify-between items-center px-[5vw] py-4">
				<h2 className="text-2xl text-blue-900 font-bold">{getMainSlug(pathname)}</h2>
				<div className="text-center">
					<p className="text-lg text-gray-700 font-semibold tracking-wide">{time.toLocaleDateString()}</p>
					<p className="text-slate-500 font-medium trancking-wide">{formatTime(time)}</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
