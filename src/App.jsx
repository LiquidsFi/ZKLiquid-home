import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHome from "./AppHome";
import Video from "./components/Integration/video/Video";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import TermsOfService from "./pages/terms-of-service/TermsOfService";
import ScrollToTop from "./components/common/ScrollToTop";

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<Header />
			<Routes>
				<Route exact path="/" element={<AppHome />} />
				<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				<Route path="/terms-of-service" element={<TermsOfService />} />
				<Route path="/video" element={<Video />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
