import meter1 from "@/assets/skills-meter1.svg";
import meter2 from "@/assets/skills-meter2.svg";
import meter3 from "@/assets/skills-meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TrackVisibility from "react-on-screen";

export default function Skills() {
	const responsive = {
		superLargeDesktop: {
			// the naming can be any, depends on you.
			breakpoint: { max: 4000, min: 3000 },
			items: 5,
		},
		desktop: {
			breakpoint: { max: 3000, min: 1024 },
			items: 3,
		},
		tablet: {
			breakpoint: { max: 1024, min: 464 },
			items: 2,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<TrackVisibility>
			{({ isVisible }) => (
				<section
					id="skills"
					className={`w-full h-screen flex pt-20 items-center transition-all bg-fixed bg-black lg:px-24 lg:bg-top md:px-5 md:bg-center bg-cover bg-no-repeat text-white
					${
						isVisible
							? "bg-[url(@/assets/bg-skills.png)]"
							: "bg-[url(@/assets/bg-banner.png)]"
					}`}
				>
					<div className="rounded-[90px] top-64 w-full px-40 py-10 flex flex-col justify-center items-center bg-[#0f0f0f]">
						<h2 className="text-7xl font-bold">Skills</h2>
						<p className="my-5 text-gray-400 tracking-widest text-center">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.<br></br> Lorem Ipsum has been the industry's standard
							dummy text.
						</p>
						<Carousel
							responsive={responsive}
							infinite
							autoPlay
							autoPlaySpeed={3000}
							transitionDuration={500}
							className="w-full mt-16 owl-carousel owl-theme text-center"
						>
							<div className="flex flex-col justify-center items-center">
								<img className="w-2/4 mb-5" src={meter1} alt="Image" />
								<h5>Backend Development</h5>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img className="w-2/4 mb-5" src={meter2} alt="Image" />
								<h5>Brand Identity</h5>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img className="w-2/4 mb-5" src={meter3} alt="Image" />
								<h5>Logo Design</h5>
							</div>
							<div className="flex flex-col justify-center items-center">
								<img className="w-2/4 mb-5" src={meter1} alt="Image" />
								<h5>Frontend Development</h5>
							</div>
						</Carousel>
					</div>
				</section>
			)}
		</TrackVisibility>
	);
}
