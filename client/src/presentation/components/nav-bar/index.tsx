import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { IoMdMenu } from "react-icons/io";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = (): JSX.Element => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
	const [isDropdownVisible, setIsDropdownVisible] = useState(
		isMobile ? false : true
	);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};
	const handleCareerMapsClick = (
		e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
	) => {
		e.preventDefault(); // Prevent default navigation behavior
		toggleDropdown(); // Toggle dropdown visibility
	};

	const navItems = [
		{ label: "Home", path: "/" },
		{ label: "Job Details", path: "/job-details" },
		{ label: "Career Maps", path: "/maps" },
		{ label: "Import", path: "/import" },
		{ label: "Sign In", path: "/signin" },
	];

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className={styles.nav_bar__wrapper}>
			<div className={styles.mobile_logo_overview}>
				<div className={styles.main_header_logo__place}>
					<Link to="/">
						<img
							src="../../../../assets/images/oman_labor_market_intelligence_analysis_logo.png"
							alt="Brand Logo"
						/>
					</Link>
				</div>
				{isMobile && (
					<button onClick={() => setIsDropdownVisible(!isDropdownVisible)}>
						{" "}
						{isDropdownVisible ? <IoClose /> : <IoMdMenu />}
					</button>
				)}
			</div>
			{isDropdownVisible && (
				<div>
					<ul className={styles.menu}>
						{navItems.map((item) => (
							<li
								key={item.label}
								className={item.label === "Career Maps" ? styles.dropdown : ""}
							>
								<Link
									to={item.path}
									onClick={
										item.label === "Career Maps"
											? handleCareerMapsClick
											: undefined
									}
								>
									{item.label}
								</Link>
								{/* Show dropdown if it's Career Maps and dropdown is open */}
								{item.label === "Career Maps" && isDropdownOpen && (
									<ul className={styles.dropdownMenu}>
										<li>
											<Link to="/maps/solar-pv-development">
												Solar PV Development
											</Link>
										</li>
										<li>
											<Link to="/maps/wind-power-development">
												Wind Power Development
											</Link>
										</li>
										<li>
											<Link to="/maps/energy-management-optimization">
												Energy Management & System Optimization
											</Link>
										</li>
										<li>
											<Link to="/maps/minerals-metals-extraction">
												Minerals & Metals Extraction
											</Link>
										</li>
										<li>
											<Link to="/maps/clean-steel-aluminium">
												Clean Steel and Aluminium
											</Link>
										</li>
										<li>
											<Link to="/maps/clean-cement-concrete">
												Clean Cement and Concrete
											</Link>
										</li>
									</ul>
								)}
							</li>
						))}
						<li className={styles.get_started}>
							<Link to="/signup">Sign up</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavBar;
