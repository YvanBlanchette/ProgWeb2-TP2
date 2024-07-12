import { GiFlowerTwirl } from "react-icons/gi";
import { links, socials } from "/data/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
	const pathname = useLocation().pathname;
	const navigate = useNavigate();

	return (
		<aside className="fixed top-0 bottom-0 left-0 min-h-screen w-full md:w-[20vw] text-black bg-slate-300 flex flex-col">
			<Link to="/">
				<h1 className="flex items-center justify-center gap-2 py-10">
					<GiFlowerTwirl className="text-blue-900 text-5xl font-semibold" />
					<div className="text-3xl font-normal">
						Perfect<span className="text-blue-900 font-bold">Flow</span>
					</div>
				</h1>
			</Link>
			<nav className="flex-1">
				<ul className="flex flex-col items-center justify-start">
					{links.map((link) => {
						const IconComponent = link.icon;
						return (
							<li
								onClick={() => navigate(link.path)}
								key={link.name}
								className={`hidden lg:block font-semibold text-lg w-full py-4 border-l-[6px] cursor-pointer ${
									pathname === link.path
										? "bg-slate-400 border-blue-900 pointer-events-none"
										: "border-transparent hover:bg-slate-400/50 hover:border-blue-900 text-gray-900 transition-all duration-200"
								}`}
							>
								<p className="flex items-center gap-2 text-start mx-auto w-[80%]">
									<IconComponent />
									{link.name}
								</p>
							</li>
						);
					})}
				</ul>
			</nav>
			<nav>
				<ul className="flex items-center justify-center gap-6 py-4">
					{socials.map((social) => {
						const IconComponent = social.icon;
						return (
							<li key={social.name} title={social.name}>
								<a href={social.href} target="_blank" className="text-2xl text-blue-900 hover:text-blue-900/60 transition-all duration-300">
									<IconComponent />
								</a>
							</li>
						);
					})}
				</ul>
			</nav>
		</aside>
	);
};
export default Sidebar;
