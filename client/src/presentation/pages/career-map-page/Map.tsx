import { useEffect, useState } from "react";
import { JobRolePoints } from "./JobRolePoints";

const Map = (): JSX.Element => {
	const [loadAgain, setLoadAgain] = useState(false);

	useEffect(() => {
		const loadScripts = () => {
			const jqueryScript = document.createElement("script");
			jqueryScript.src = "/jquery-1.11.3.min.js";
			jqueryScript.onload = () => {
				const functionsScript = document.createElement("script");
				functionsScript.src = "/functions.js";
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
			<div className="container map">
				<h1 style={{ fontSize: "32px", marginBottom: "30px" }}>Career Map</h1>
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
							<div className="block advanced architecture"></div>
							<div className="block advanced operations"></div>
							<div className="block advanced commercial"></div>
							<div className="block advanced residential"></div>
						</div>
						<div className="map-row">
							<div className="row-label midlevel">
								<div className="title">
									<span>Engineering & Technology</span>
								</div>
							</div>
							<div className="block midlevel architecture"></div>
							<div className="block midlevel operations"></div>
							<div className="block midlevel commercial"></div>
							<div className="block midlevel residential"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Planning & Project Development</span>
								</div>
							</div>
							<div className="block entry architecture"></div>
							<div className="block entry operations"></div>
							<div className="block entry commercial"></div>
							<div className="block entry residential"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Safety, Health Environment Security</span>
								</div>
							</div>
							<div className="block safety planning"></div>
							<div className="block safety construction"></div>
							<div className="block safety connection"></div>
							<div className="block safety maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Supporting</span>
								</div>
							</div>
							<div className="block supporting planning"></div>
							<div className="block supporting construction"></div>
							<div className="block supporting connection"></div>
							<div className="block supporting maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Construction & Installation</span>
								</div>
							</div>
							<div className="block constr planning"></div>
							<div className="block constr construction"></div>
							<div className="block constr connection"></div>
							<div className="block constr maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Quality Assurance & Control</span>
								</div>
							</div>
							<div className="block quality planning"></div>
							<div className="block quality construction"></div>
							<div className="block quality connection"></div>
							<div className="block quality maintenance"></div>
						</div>
						<div className="map-row">
							<div className="row-label entry">
								<div className="title">
									<span>Operation & Maintenance</span>
								</div>
							</div>
							<div className="block operations planning"></div>
							<div className="block operations construction"></div>
							<div className="block operations connection"></div>
							<div className="block operations maintenance"></div>
						</div>

						<div className="map-row vert-match">
							<div className="axis-label"></div>
							<div className="col-label architecture">
								<div className="title vert-match-box-1">
									<div className="vcenter">
										Project Planning &amp; Development
									</div>
								</div>
							</div>
							<div className="col-label operations">
								<div className="title vert-match-box-1">
									<div className="vcenter">Construction &amp; Installation</div>
								</div>
							</div>
							<div className="col-label commercial">
								<div className="title vert-match-box-1">
									<div className="vcenter">Grid Connection</div>
								</div>
							</div>
							<div className="col-label residential">
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

export default Map;
