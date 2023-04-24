import logo from "@/assets/logo.svg";
import navicon1 from "@/assets/nav-icon1.svg";
import navicon2 from "@/assets/nav-icon2.svg";
import navicon3 from "@/assets/nav-icon3.svg";
import NavBubble from "@/components/ui/NavBubble";
import NavButton from "@/components/ui/NavButton";
import NavLink from "@/components/ui/NavLink";
import { useState } from "react";

export default function Navbar() {
	const [isFloating, setPositionToFloating] = useState<boolean>(false);

	return (
		<nav
			id="navbar"
			className="absolute top-7 w-full lg:px-24 md:px-5 bg-transparent text-white flex flex-row justify-between items-center"
		>
			<div className="lg:w-[40%] flex">
				<a
					href="https://www.youtube.com/watch?v=hYv6BM2fWd8"
					target="_blank"
					rel="noopener"
				>
					<img
						src={logo}
						alt="logo with link to space portfolio video tutorial"
						className="w-32 p-2"
					/>
				</a>
			</div>
			<div className="lg:w-[60%] flex flex-row justify-between items-center">
				<div className="lg:w-[45%] flex justify-around">
					<NavLink href="#banner">Home</NavLink>
					<NavLink href="#skills">Skills</NavLink>
					<NavLink href="#projects">Projects</NavLink>
				</div>
				<div className="lg:w-[55%] flex justify-end items-center">
					<div>
						<NavBubble className="mx-1 h-9 w-9">
							<img
								className="w-[40%] h-[40%]"
								src={navicon1}
								alt="linkedin icon with link to my github"
							/>
						</NavBubble>
						<NavBubble className="mx-1 h-9 w-9">
							<img
								className="w-[40%] h-[40%]"
								src={navicon2}
								alt="facebook icon with link to my github"
							/>
						</NavBubble>
						<NavBubble className="mx-1 h-9 w-9">
							<img
								className="w-[40%] h-[40%]"
								src={navicon3}
								alt="instagram icon with link to my github"
							/>
						</NavBubble>
					</div>
					<NavButton href="#contact" className="mr-1 ml-12 px-9 py-4">
						Let's Connect
					</NavButton>
				</div>
			</div>
		</nav>
	);
}
