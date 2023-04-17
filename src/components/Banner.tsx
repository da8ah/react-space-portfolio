import Navbar from "@/components/Navbar";

export default function Banner() {
	return (
		<section
			id="home"
			className="w-full h-screen px-20 bg-[url(@/assets/bg-banner.png)] bg-top bg-cover bg-no-repeat"
		>
			<Navbar />
			<div>¡Hola Mundo!</div>
		</section>
	);
}
