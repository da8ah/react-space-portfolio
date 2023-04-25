type ProjectCardType = {
	className: string;
	classNameHover: string;
	title: string;
	description: string;
	imgURL: string;
};

export default function ProjectCard({
	className,
	classNameHover,
	title,
	description,
	imgURL,
}: ProjectCardType) {
	return (
		<div
			id="card"
			style={{ backgroundImage: `url(${imgURL})` }}
			className={`relative rounded-3xl bg-cover bg-no-repeat ${className}`}
		>
			<div
				id="card-bg"
				className="absolute rounded-3xl w-full h-full bg-gradient-to-r from-[rgba(170,54,124,0.9)] to-[rgba(74,47,189,0.9)]"
			/>
			<div
				id="card-content"
				className={`absolute top-0 h-full text-center flex flex-col justify-end ${classNameHover}`}
			>
				<h4 className="my-1 text-2xl font-bold">{title}</h4>
				<span className="italic tracking-wider">{description}</span>
			</div>
		</div>
	);
}
