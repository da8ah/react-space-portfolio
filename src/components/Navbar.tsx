import logo from "@/assets/logo.svg";

export default function Navbar() {
	return (
		<nav className="w-full bg-transparent text-white p-5 flex flex-row justify-between items-center">
			<div>
				<a href="">
					<img src={logo} alt="logo" />
				</a>
			</div>
			<div>Pestañas</div>
		</nav>
	);
}
