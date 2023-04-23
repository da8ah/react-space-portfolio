import logo from "@/assets/logo.svg";
import navicon1 from "@/assets/nav-icon1.svg";
import navicon2 from "@/assets/nav-icon2.svg";
import navicon3 from "@/assets/nav-icon3.svg";
import NavBubble from "@/components/ui/NavBubble";
import { useState } from "react";

export default function Footer() {
	const [buttonText, setButtonText] = useState("Submit");
	const [email, setEmail] = useState("");

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		e.preventDefault();
		setButtonText("Done!");
		setTimeout(() => {
			setButtonText("Submit");
		}, 2000);
	};

	return (
		<section
			id="footer"
			className="relative w-full flex flex-col items-center bg-[url(@/assets/bg-footer.png)] lg:px-24 md:px-5 text-black"
		>
			<div className="absolute -mt-32 w-full flex justify-center bg-transparent">
				<div className="rounded-[70px] w-4/5 px-32 py-20 flex flex-row justify-around bg-white">
					<h3 className="w-[30%] text-2xl font-bold">
						Subscribe to our Newsletter<br></br> & Never miss latest updates 👋
					</h3>
					<form className="w-[50%]" onSubmit={handleSubmit}>
						<div className="bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] rounded-2xl p-[2px]">
							<div className="flex flex-row justify-between rounded-[15px] pl-3 pr-1 py-1 bg-white">
								<input
									className="w-3/5 focus:outline-none animate-pulse focus:animate-none"
									value={email}
									type="email"
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Email Address"
								/>
								<button
									type="submit"
									className="rounded-lg w-36 py-3 bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] text-white focus:outline-none focus:shadow-lg focus:shadow-purple-500"
								>
									{buttonText}
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="w-full pt-60 pb-20 flex flex-row justify-between">
				<div className="flex">
					<a className="flex" href="">
						<img src={logo} alt="logo" className="w-40 p-2" />
					</a>
				</div>
				<div className="flex flex-col items-end">
					<div>
						<NavBubble className="mx-1 h-9 w-9 hover:animate-[spin_3s_ease] hover:bg-white">
							<img
								className="footer-icons w-[40%] h-[40%]"
								src={navicon1}
								alt=""
							/>
						</NavBubble>
						<NavBubble className="mx-1 h-9 w-9 hover:animate-[spin_3s_ease] hover:bg-white">
							<img
								className="footer-icons w-[40%] h-[40%]"
								src={navicon2}
								alt=""
							/>
						</NavBubble>
						<NavBubble className="mx-1 h-9 w-9 hover:animate-[spin_3s_ease] hover:bg-white">
							<img
								className="footer-icons w-[40%] h-[40%]"
								src={navicon3}
								alt=""
							/>
						</NavBubble>
					</div>
					<p className="mt-5 text-white">
						Copyright {new Date().getFullYear()}. All Rights Reserved
					</p>
				</div>
			</div>
		</section>
	);
}
