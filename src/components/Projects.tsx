import ProjectCard from "@/components/ProjectCard";
import * as Tabs from "@radix-ui/react-tabs";

export default function Projects() {
	const projects = [
		{
			title: "Business Startup",
			description: "Design & Development",
			imgURL: "projects-img1.png",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgURL: "projects-img2.png",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgURL: "projects-img3.png",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgURL: "projects-img1.png",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgURL: "projects-img2.png",
		},
		{
			title: "Business Startup",
			description: "Design & Development",
			imgURL: "projects-img3.png",
		},
	];

	return (
		<section
			id="projects"
			className="w-full py-20 flex flex-col items-center bg-fixed bg-black lg:px-24 md:px-5 text-white"
		>
			<h2 className="text-5xl font-bold">Projects</h2>
			<p className="my-10 lg:px-60 md:px-20 text-gray-400 tracking-widest text-center">
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever
				since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book.
			</p>
			<Tabs.Root
				className="w-full h-full"
				defaultValue="tab1"
				orientation="vertical"
			>
				<Tabs.List
					className="w-full flex justify-center"
					aria-label="tabs example"
				>
					<Tabs.Trigger
						className="w-[30%] md:w-1/4 py-3 ring-1 ring-gray-500 rounded-tl-full rounded-bl-full bg-[#0f0f0f] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#AA367C] data-[state=active]:to-[#4A2FBD]"
						value="tab1"
					>
						One
					</Tabs.Trigger>
					<Tabs.Trigger
						className="w-[30%] md:w-1/4 py-3 ring-1 ring-gray-500 bg-[#0f0f0f] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#AA367C] data-[state=active]:to-[#4A2FBD]"
						value="tab2"
					>
						Two
					</Tabs.Trigger>
					<Tabs.Trigger
						className="w-[30%] md:w-1/4 py-3 ring-1 ring-gray-500 rounded-tr-full rounded-br-full bg-[#0f0f0f] data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#AA367C] data-[state=active]:to-[#4A2FBD]"
						value="tab3"
					>
						Three
					</Tabs.Trigger>
				</Tabs.List>
				<Tabs.Content
					className="w-full mt-10 flex flex-row flex-wrap justify-center"
					value="tab1"
				>
					{projects.map((project, index) => {
						return (
							<ProjectCard
								className="lg:w-1/4 md:w-[30%] w-full h-[200px] m-2"
								classNameHover="pb-12 lg:pl-10 pl-8"
								key={index}
								{...project}
							/>
						);
					})}
				</Tabs.Content>
				<Tabs.Content className="py-10 md:px-80 text-center" value="tab2">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						quam, quod neque provident velit, rem explicabo excepturi id illo
						molestiae blanditiis, eligendi dicta officiis asperiores delectus
						quasi inventore debitis quo.
					</p>
				</Tabs.Content>
				<Tabs.Content className="py-10 md:px-80 text-center" value="tab3">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
						quam, quod neque provident velit, rem explicabo excepturi id illo
						molestiae blanditiis, eligendi dicta officiis asperiores delectus
						quasi inventore debitis quo.
					</p>
				</Tabs.Content>
			</Tabs.Root>
		</section>
	);
}
