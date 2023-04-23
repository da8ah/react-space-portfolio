import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function App() {
	return (
		<>
			<Navbar />
			<Banner />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
