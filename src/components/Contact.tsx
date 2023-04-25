import contact from "@/assets/contact-img.svg";
import { useState } from "react";

export default function Contact() {
	const formInitialDetails = {
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
	};
	const [formDetails, setFormDetails] = useState(formInitialDetails);
	const [buttonText, setButtonText] = useState("Send");

	const onFormUpdate = (category: string, value: string) => {
		setFormDetails({
			...formDetails,
			[category]: value,
		});
	};

	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setButtonText("Sending...");
		setTimeout(() => {
			setButtonText("Send");
		}, 1000);
	};

	return (
		<section
			id="contact"
			className="w-full py-20 pb-40 flex flex-col md:flex-row justify-between items-center bg-fixed bg-gradient-to-r from-[#AA367C] to-[#4A2FBD] lg:px-24 md:px-5 px-1 text-white"
		>
			<div className="lg:w-[50%] md:w-[40%] py-5 md:py-0 flex justify-center items-center">
				<img
					className="w-[90%] animate-[zoom-in-out_3s_ease-in-out_infinite]"
					src={contact}
					alt="a graphic of a person surrounded with devices and multimedia resources"
				/>
			</div>
			<div className="lg:w-[50%] md:w-[60%] flex flex-col items-center md:flex-none">
				<h2 className="text-5xl font-bold">Get In Touch</h2>
				<form
					className="my-10 flex flex-row flex-wrap md:justify-between justify-around"
					onSubmit={handleSubmit}
				>
					<input
						className="w-[49%] rounded-2xl my-2 p-5 bg-white bg-opacity-10 placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white"
						type="text"
						value={formDetails.firstName}
						placeholder="First Name"
						onChange={(e) => onFormUpdate("firstName", e.target.value)}
					/>
					<input
						className="w-[49%] rounded-2xl my-2 p-5 bg-white bg-opacity-10 placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white"
						type="text"
						value={formDetails.lastName}
						placeholder="Last Name"
						onChange={(e) => onFormUpdate("lastName", e.target.value)}
					/>
					<input
						className="w-[49%] rounded-2xl my-2 p-5 bg-white bg-opacity-10 placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white"
						type="email"
						value={formDetails.email}
						placeholder="Email Address"
						onChange={(e) => onFormUpdate("email", e.target.value)}
					/>
					<input
						className="w-[49%] rounded-2xl my-2 p-5 bg-white bg-opacity-10 placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white"
						type="tel"
						value={formDetails.phone}
						placeholder="Phone No."
						onChange={(e) => onFormUpdate("phone", e.target.value)}
					/>
					<textarea
						className="resize-none w-full rounded-2xl my-2 p-5 bg-white bg-opacity-10 placeholder:text-white focus:outline-none focus:ring-1 focus:ring-white"
						rows={6}
						value={formDetails.message}
						placeholder="Message"
						onChange={(e) => onFormUpdate("message", e.target.value)}
					/>
					<button
						className="w-2/4 md:w-1/4 rounded-md mt-10 py-3 bg-white text-2xl text-black font-extrabold focus:outline-none focus:shadow-lg focus:shadow-black"
						type="submit"
					>
						<span>{buttonText}</span>
					</button>
				</form>
			</div>
		</section>
	);
}
