import logo from "@/assets/logo.svg";
import navicon1 from "@/assets/nav-icon1.svg";
import navicon2 from "@/assets/nav-icon2.svg";
import navicon3 from "@/assets/nav-icon3.svg";
import NavBubble from "@/components/ui/NavBubble";
import NavButton from "@/components/ui/NavButton";
import NavLink from "@/components/ui/NavLink";
import { useEffect, useState } from "react";

export default function Navbar() {
	const [isFixed, setPositionToFixed] = useState<boolean>(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 10) {
				setPositionToFixed(true);
			} else {
				setPositionToFixed(false);
			}
		};

		window.addEventListener("scroll", onScroll);

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<nav
			id="navbar"
			className={`${
				isFixed
					? "fixed pt-5 opacity-50 hover:opacity-100 hover:transition-opacity hover:bg-[#121212]"
					: "absolute pt-7 bg-transparent"
			} z-[100] w-full pb-3 lg:px-24 md:px-5 text-white flex flex-row justify-between items-center`}
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
