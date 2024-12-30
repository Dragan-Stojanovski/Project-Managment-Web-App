import { Route, Routes, useLocation } from "react-router";
import HomePage from "./presentation/pages/home-page";
import NavBar from "./presentation/components/nav-bar";
import RegisterPage from "./presentation/pages/register-page";
import GetStarted from "./presentation/pages/get-started-page";
import LoginPage from "./presentation/pages/login-page";
import Import from "./presentation/pages/import-page/Import";
import { useSelector } from "react-redux";
import JobDetails from "./presentation/pages/job-details-page";
import Footer from "./presentation/components/footer";
import SolarMap from "./presentation/pages/career-map-page/SolarMap";
import WindMap from "./presentation/pages/career-map-page/WindMap";
import SolarJobProfile from "./presentation/pages/job-role-profile/SolarJobProfile";
import WindJobProfile from "./presentation/pages/job-role-profile/WindJobProfile";

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
				<Route path="/maps">
					<Route path="solar-pv-development" element={<SolarMap />} />
					<Route path="wind-power-development" element={<WindMap />} />
					<Route path="energy-management-optimization" element={<></>} />
					<Route path="minerals-metals-extraction" element={<></>} />
					<Route path="clean-steel-aluminium" element={<></>} />
					<Route path="clean-cement-concrete" element={<></>} />
				</Route>
				<Route
					path="/maps/solar-pv-development/job/:id"
					element={<SolarJobProfile />}
				/>
				<Route
					path="/maps/wind-power-development/job/:id"
					element={<WindJobProfile />}
				/>
				{/*
				<Route
					path="/maps/wind-power-development/job/:id"
					element={<WindJobProfile />}
				/>
				<Route
					path="/maps/wind-power-development/job/:id"
					element={<WindJobProfile />}
				/>
				*/}
				<Route path="/getstarted" element={<GetStarted />} />
				<Route path="/import" element={<Import />} />
				<Route path="/job-details" element={<JobDetails />} />
			</Routes>
			{location.pathname === "/signup" ||
			location.pathname === "/signin" ? null : (
				<Footer />
			)}
		</>
	);
}

export default App;
