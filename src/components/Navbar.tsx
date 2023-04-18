import logo from "@/assets/logo.svg";
import NavLink from "@/components/ui/NavLink";
import NavBubble from "@/components/ui/NavBubble";

export default function Navbar() {
	return (
		<nav className="w-full bg-transparent text-white p-5 flex flex-row justify-between items-center">
			<div>
				<a href="">
					<img src={logo} alt="logo" className="w-32 p-2" />
				</a>
			</div>
			<div>
				<NavLink href="#home">Home</NavLink>
				<NavLink>Skills</NavLink>
				<NavLink>Projects</NavLink>
				<NavBubble>D</NavBubble>
			</div>
		</nav>
	);
}
