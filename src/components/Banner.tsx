import banner from "@/assets/banner-img.svg";
import "animate.css";
import { useEffect, useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import TrackVisibility from "react-on-screen";

export default function Banner() {
	const [loopNum, setLoopNum] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [text, setText] = useState("");
	const [delta, setDelta] = useState(300 - Math.random() * 100);
	const [index, setIndex] = useState(1);
	const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
	const period = 2000;

	useEffect(() => {
		let ticker = setInterval(() => {
			tick();
		}, delta);

		return () => {
			clearInterval(ticker);
		};
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
			id="home"
			className="w-full h-screen bg-fixed bg-[url(@/assets/bg-banner.png)] lg:px-24 lg:bg-top md:px-5 md:bg-center bg-cover bg-no-repeat text-white"
		>
			<div id="hero" className="relative top-64 flex flex-row items-start">
				<TrackVisibility className="w-[55%]">
					{({ isVisible }) => (
						<div
							className={isVisible ? "animate__animated animate__fadeIn" : ""}
						>
							<span className="text-2xl font-bold tracking-wide p-2 ring-1 ring-white bg-gradient-to-r from-[#AA367C] to-[#4A2FBD]">
								Welcome to my Portfolio
							</span>
							<h1 className="my-5 text-7xl font-bold">
								Hi! I'm{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
									Tiber{" "}
								</span>
								<span
									className=""
									data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
								>
									<span className="wrap">{text}</span>
								</span>
							</h1>
							<p className="text-gray-400 tracking-widest">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book.
							</p>
							<button className="flex flex-row">
								Let’s Connect <BsArrowRightCircle size={25} />
							</button>
						</div>
					)}
				</TrackVisibility>
				<TrackVisibility className="w-[45%]">
					{({ isVisible }) => (
						<div
							className={`flex justify-center animate-[bounce_5s_linear_infinite] ${
								isVisible ? "animate__animated animate__zoomIn" : ""
							}`}
						>
							<img
								className="w-[80%] ml-10"
								src={banner}
								alt="astronaut floating in space"
							/>
						</div>
					)}
				</TrackVisibility>
			</div>
		</section>
	);
}
