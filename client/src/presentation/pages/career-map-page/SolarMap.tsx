import { useEffect, useState } from "react";
import { JobRolePoints } from "./JobRolePoints";
import HeadingSection from "./HeadingSection";

const SolarMap = (): JSX.Element => {
	const [loadAgain, setLoadAgain] = useState(false);

	useEffect(() => {
		const loadScripts = () => {
			const jqueryScript = document.createElement("script");
			jqueryScript.src = "/jquery-1.11.3.min.js";
			jqueryScript.onload = () => {
				const functionsScript = document.createElement("script");
				functionsScript.src = "/functionsWind.js";
				document.head.appendChild(functionsScript);
			};
			document.head.appendChild(jqueryScript);
		};
		loadScripts();
	}, [loadAgain]);

	setTimeout(() => {
		setLoadAgain(true);
	}, 500);

	return (
		<main id="main">
			<HeadingSection title="Solar PV Development" sector="solar.webp" />
			<div className="container map test">
				<h1 style={{ fontSize: "32px", marginBottom: "34px" }}>Career Map</h1>
				<div className="row">
					<div id="map" className="col-md-9 clear">
						<div className="map-grid">
							<div className="guard"></div>
							<JobRolePoints />
						</div>
						<div className="map-row">
							<div className="row-label advanced">
								<div className="title">
									<span>Management & Leadership</span>
								</div>
							</div>
							<div className="block five advanced manufacturing"></div>
							<div className="block five advanced architecture"></div>
							<div className="block five advanced operations"></div>
							<div className="block five advanced commercial"></div>
							<div className="block five advanced residential"></div>
						</div>
						<div className="map-row">
							<div className="row-label midlevel">
								<div className="title">
									<span>Engineering & Technology</span>
								</div>
							</div>
							<div className="block five midlevel manufacturing"></div>
							<div className="block five midlevel architecture"></div>
							<div className="block five midlevel operations"></div>
							<div className="block five midlevel commercial"></div>
							<div className="block five midlevel residential"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Safety, Health Environment Security</span>
								</div>
							</div>
							<div className="block five safety manufacturing"></div>
							<div className="block five safety planning"></div>
							<div className="block five safety construction"></div>
							<div className="block five safety connection"></div>
							<div className="block five safety maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Supporting</span>
								</div>
							</div>
							<div className="block five supporting manufacturing"></div>
							<div className="block five supporting planning"></div>
							<div className="block five supporting construction"></div>
							<div className="block five supporting connection"></div>
							<div className="block five supporting maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Quality Assurance & Control</span>
								</div>
							</div>
							<div className="block five quality manufacturing"></div>
							<div className="block five quality planning"></div>
							<div className="block five quality construction"></div>
							<div className="block five quality connection"></div>
							<div className="block five quality maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Operation & Maintenance</span>
								</div>
							</div>
							<div className="block five operations manufacturing"></div>
							<div className="block five operations planning"></div>
							<div className="block five operations construction"></div>
							<div className="block five operations connection"></div>
							<div className="block five operations maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Planning & Project Development</span>
								</div>
							</div>
							<div className="block five entry manufacturing"></div>
							<div className="block five entry architecture"></div>
							<div className="block five entry operations"></div>
							<div className="block five entry commercial"></div>
							<div className="block five entry residential"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Construction & Installation</span>
								</div>
							</div>
							<div className="block five constr manufacturing"></div>
							<div className="block five constr planning"></div>
							<div className="block five constr construction"></div>
							<div className="block five constr connection"></div>
							<div className="block five constr maintenance"></div>
						</div>

						<div className="map-row vert-match">
							<div className="axis-label"></div>
							<div className="col-label five">
								<div className="title vert-match-box-1">
									<div className="vcenter">Manufacturing</div>
								</div>
							</div>
							<div className="col-label five architecture">
								<div className="title vert-match-box-1">
									<div className="vcenter">
										Project Planning &amp; Development
									</div>
								</div>
							</div>
							<div className="col-label five operations">
								<div className="title vert-match-box-1">
									<div className="vcenter">Construction &amp; Installation</div>
								</div>
							</div>
							<div className="col-label five commercial">
								<div className="title vert-match-box-1">
									<div className="vcenter">Grid Connection</div>
								</div>
							</div>
							<div className="col-label five residential">
								<div className="title vert-match-box-1">
									<div className="vcenter">Operations And Maintenance</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default SolarMap;
