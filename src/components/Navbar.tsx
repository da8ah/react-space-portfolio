import logo from "@/assets/logo.svg";
import navicon1 from "@/assets/nav-icon1.svg";
import navicon2 from "@/assets/nav-icon2.svg";
import navicon3 from "@/assets/nav-icon3.svg";
import NavBubble from "@/components/ui/NavBubble";
import NavButton from "@/components/ui/NavButton";
import NavLink from "@/components/ui/NavLink";
import { useEffect, useState } from "react";
import { RxLayers, RxStack } from "react-icons/rx";

export default function Navbar() {
	const [isMenuOpen, setMenuState] = useState<boolean>(false);
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
					? "fixed w-full md:pt-5 md:opacity-50 md:hover:opacity-100 md:hover:transition-opacity hover:bg-[#121212]"
					: "fixed md:absolute p-0 md:pt-7 md:bg-transparent"
			} ${
				isMenuOpen ? "h-screen opacity-100 bg-[#121212]" : "h-auto"
			} z-[100] w-full lg:px-24 md:px-5 md:pb-3 text-white flex md:flex-row flex-col md:justify-between md:items-center`}
		>
			<div className="min-[1215px]:w-[40%] md:px-0 pr-2 flex flex-row justify-between items-center">
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
				{isMenuOpen ? (
					<RxLayers
						focusable={false}
						className="cursor-pointer md:hidden"
						size={35}
						onClick={() => setMenuState(false)}
					/>
				) : (
					<RxStack
						focusable={false}
						className="cursor-pointer md:hidden"
						size={35}
						onClick={() => setMenuState(true)}
					/>
				)}
			</div>
			<div
				className={`${
					isMenuOpen ? "block" : "hidden"
				} min-[1215px]:w-[60%] pt-20 md:pt-0 md:flex md:flex-row flex-col justify-between items-center`}
			>
				<div className="min-[1215px]:w-[45%] flex md:flex-row flex-col justify-around">
					<NavLink href="#banner" onClick={() => setMenuState(false)}>
						Home
					</NavLink>
					<NavLink href="#skills" onClick={() => setMenuState(false)}>
						Skills
					</NavLink>
					<NavLink href="#projects" onClick={() => setMenuState(false)}>
						Projects
					</NavLink>
				</div>
				<div className="min-[1215px]:w-[55%] w-full flex md:flex-row flex-col-reverse md:justify-end items-center">
					<div className="py-2 md:py-0 flex flex-row">
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
					<NavButton
						href="#contact"
						className="whitespace-nowrap md:my-0 md:mr-1 md:ml-12 md:px-9 md:py-4 my-5 p-2"
						onClick={() => setMenuState(false)}
					>
						Let's Connect
					</NavButton>
				</div>
			</div>
		</nav>
	);
}
