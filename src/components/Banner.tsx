import banner from "@/assets/banner-img.svg";
import Button from "@/components/ui/Button";
import "animate.css";
import { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

export default function Banner() {
	const [isVisible, setVisibility] = useState(false);
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Full-Stack Developer", "Web Designer", "UI/UX Designer"];
	const period = 2000;

	useEffect(() => {
		setVisibility(true);
	}, []);

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => clearInterval(ticker);
	}, [text]);

	const tick = () => {
		let i = loopNum % toRotate.length;
		let fullText = toRotate[i];
		let updatedText = isDeleting
			? fullText.substring(0, text.length - 1)
			: fullText.substring(0, text.length + 1);

		setText(updatedText);

		if (isDeleting) {
			setDelta((prevDelta) => prevDelta / 2);
		}

		if (!isDeleting && updatedText === fullText) {
			setIsDeleting(true);
			setIndex((prevIndex) => prevIndex - 1);
			setDelta(period);
		} else if (isDeleting && updatedText === "") {
			setIsDeleting(false);
			setLoopNum(loopNum + 1);
			setIndex(1);
			setDelta(500);
		} else {
			setIndex((prevIndex) => prevIndex + 1);
		}
	};

	return (
		<section
			id="banner"
			className="w-full md:h-[120vh] min-[390px]:h-[140vh] h-[115vh] md:bg-fixed bg-[url(@/assets/bg-banner.png)] lg:px-24 lg:bg-top md:px-5 px-1 md:bg-center bg-cover bg-no-repeat text-white"
		>
			<div
				id="hero"
				className="relative lg:top-64 md:top-52 top-20 flex md:flex-row flex-col-reverse items-start"
			>
				<div className="md:w-[55%]">
					<div
						className={`${
							isVisible ? "animate__animated animate__fadeIn" : ""
						} flex flex-col items-center md:items-start`}
					>
						<span className="shadow-lg shadow-purple-500 lg:text-2xl md:text-xl font-bold font tracking-wide p-2 ring-1 ring-white bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]">
							Welcome to my Portfolio
						</span>
						<h1 className="self-start md:self-auto my-5 py-1 lg:text-7xl text-5xl font-bold drop-shadow-[0_1px_0_rgba(0,0,0,0.2)]">
							Hi! I'm{" "}
							<span className="animate-[pulse_2s_linear_infinite] text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
								Tiber{" "}
							</span>
							<span className="drop-shadow-[1px_5px_0_rgb(145,47,179)]">
								{text}
							</span>
						</h1>
						<p className="text-gray-400 tracking-widest text-justify md:text-left">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
						<Button className="mt-3 md:mt-10">
							<a href="#contact" className="flex flex-row text-white font-bold">
								Let’s Connect <BsArrowRightCircle size={25} className="ml-2" />
							</a>
						</Button>
					</div>
				</div>
				<div className="md:w-[45%] animate-[updown_5s_linear_infinite]">
					<div
						className={`flex justify-center lg:items-start md:items-center ${
							isVisible ? "animate__animated animate__zoomIn" : ""
						}`}
					>
						<img
							className="w-[90%] ml-10"
							src={banner}
							alt="astronaut floating in the space"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
