import meter1 from "@/assets/skills-meter1.svg";
import meter2 from "@/assets/skills-meter2.svg";
import meter3 from "@/assets/skills-meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
			items: 3,
		},
		mobile: {
			breakpoint: { max: 464, min: 0 },
			items: 1,
		},
	};

	return (
		<section
			id="skills"
			className="w-full h-full md:py-10 md:pb-20 flex items-center bg-fixed bg-[url(@/assets/bg-banner.png)] lg:px-24 lg:bg-top md:px-5 md:bg-center bg-cover bg-no-repeat text-white"
		>
			<div className="md:rounded-[90px] w-full lg:px-40 py-10 flex flex-col justify-center items-center bg-[#0f0f0f]">
				<h2 className="text-7xl font-bold">Skills</h2>
				<p className="my-5 text-gray-400 tracking-widest text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.<br></br> Lorem Ipsum has been the industry's standard dummy
					text.
				</p>
				<Carousel
					responsive={responsive}
					infinite
					autoPlay
					autoPlaySpeed={3000}
					transitionDuration={500}
					className="z-10 w-full mt-16 owl-carousel owl-theme text-center"
				>
					<div className="flex flex-col justify-center items-center">
						<img
							className="mb-5 lg:w-2/4 w-2/6"
							src={meter1}
							alt="95% meter backend development"
						/>
						<h5>Backend Development</h5>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img
							className="mb-5 lg:w-2/4 w-2/6"
							src={meter2}
							alt="80% meter brand identity"
						/>
						<h5>Brand Identity</h5>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img
							className="mb-5 lg:w-2/4 w-2/6"
							src={meter3}
							alt="90% meter logo design"
						/>
						<h5>Logo Design</h5>
					</div>
					<div className="flex flex-col justify-center items-center">
						<img
							className="mb-5 lg:w-2/4 w-2/6"
							src={meter1}
							alt="95% meter frontend development"
						/>
						<h5>Frontend Development</h5>
					</div>
				</Carousel>
			</div>
		</section>
	);
}
