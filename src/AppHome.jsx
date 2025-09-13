import Hero from "./components/hero/Hero";
import Integration from "./components/Integration/Integration";
import Validator from "./components/Validator/Validator";
import Coming from "./components/ComingSoon/Coming";

function AppHome() {
	return (
		// <div className="bg-[#04131F] text-gray-100">
		<div className="bg-black text-gray-100">
			<Hero />
			<Validator />
			<Integration />
			{/* <Coming /> */}
		</div>
	);
}

export default AppHome;
