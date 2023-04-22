type ProjectCardType = {
	className: string;
	title: string;
	description: string;
	imgURL: string;
};

export default function ProjectCard({
	className,
	title,
	description,
	imgURL,
}: ProjectCardType) {
	return (
		<div
			style={{ backgroundImage: `url(${imgURL})` }}
			className={`rounded-3xl bg-cover bg-no-repeat ${className}`}
		>
			<div className="rounded-3xl hover:animate-[updown_0.4s_ease-in-out] w-full h-full flex flex-col justify-center items-center bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)]">
				<h4 className="my-1 text-2xl font-bold">{title}</h4>
				<span className="italic tracking-wider">{description}</span>
			</div>
		</div>
	);
}
