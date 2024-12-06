import { Route, Routes, useLocation } from "react-router";
import HomePage from "./presentation/pages/home-page";
import NavBar from "./presentation/components/nav-bar";
import RegisterPage from "./presentation/pages/register-page";
import GetStarted from "./presentation/pages/get-started-page";
import LoginPage from "./presentation/pages/login-page";
import Map from "./presentation/pages/career-map-page/Map";
import Import from "./presentation/pages/import-page/Import";
import { useSelector } from "react-redux";
import JobDetails from "./presentation/pages/job-details-page/JobDetails";
import Footer from "./presentation/components/footer";

function App() {
	const location = useLocation();

	const userData = useSelector((state: any) => state.user);

	console.log("userData", userData);

	return (
		<>
			{location.pathname === "/signup" ||
			location.pathname === "/signin" ? null : (
				<NavBar />
			)}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/signup" element={<RegisterPage />} />
				<Route path="/signin" element={<LoginPage />} />
				<Route path="/map" element={<Map />} />
				<Route path="/getstarted" element={<GetStarted />} />
				<Route path="/import" element={<Import />} />
				<Route path="/job-details" element={<JobDetails />} />
			</Routes>
			{location.pathname === "/signup" ||
			location.pathname === "/signin" ? null : (
			<Footer/>
		)}
		</>
	);
}

export default App;
