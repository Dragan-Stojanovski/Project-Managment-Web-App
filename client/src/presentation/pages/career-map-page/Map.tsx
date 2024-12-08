import { useEffect } from "react";
import { getJobRoles } from "../../../infra/http/api-calls/job-details/getJobRoles";

const Map = (): JSX.Element => {
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
	}, []);

	const getRoles = async () => {
		const response = await getJobRoles();
		console.log(response.data);
	};

	useEffect(() => {
		void getRoles();
	}, []);

	return (
		<main id="main">
			<div className="container map">
				<h1 style={{ fontSize: "40px", marginBottom: "40px" }}>Career Map</h1>
				<div className="row">
					<div id="map" className="col-md-9 clear">
						<div className="routes">
							<ul className="tabs clear vert-match">
								<li className="tab">
									<a
										href="#"
										data-slug="advancement-routes"
										data-type="freeform"
										className="route-item active vert-match-box-1"
									>
										<div className="vcenter">Advancement Routes</div>
									</a>
								</li>
								<li className="tab">
									<a
										href="#"
										data-slug="sample-multi-sector-routes"
										data-type="routeParent"
										className="route-item vert-match-box-1"
									>
										<div className="vcenter">Sample Multi-Sector Routes</div>
									</a>
								</li>
								<li className="tab">
									<a
										href="#"
										data-slug="new-collar-jobs"
										data-type="jobList"
										data-joblist="building-automation-systems-technician|building-automation-systems-trainee|building-engineer|building-maintenance-technician|building-maintenance-worker|building-operator|building-performance-contractor-commercial|building-performance-crew-leader|building-performance-installer|certified-home-energy-rater-assessor-home-inspector|chief-engineer|commercial-building-code-official-with-green-building-expertise|commercial-construction-foreperson|commercial-construction-mgr-with-green-building-expertise|commercial-energy-auditor|draftsperson|energy-efficiency-program-assistant-coordinator|energy-efficiency-sales-representative|energy-efficiency-technician-commercial|energy-efficiency-technician-residential|hvac-contractor-with-heat-pump-design-expertise|insulation-apprentice|insulation-journeyperson-mechanic|insulation-air-sealing-technician|product-sales-specialist|real-estate-agent-with-green-building-expertise|real-estate-appraiser-with-green-building-expertise|residential-energy-auditor|sustainable-construction-supervisor-leed-ap|building-home-performance-contractor"
										className="route-item vert-match-box-1"
									>
										<div className="vcenter">New-Collar Jobs</div>
									</a>
								</li>
								<li className="tab">
									<a
										href="#"
										data-slug="weatherization-assistance-program"
										data-type="jobList"
										data-joblist="residential-energy-auditor|qc-inspector|building-performance-crew-leader|building-performance-installer|building-operator|multifamily-construction-manager-qci|multifamily-retrofit-project-manager"
										className="route-item vert-match-box-1"
									>
										<div className="vcenter">
											Weatherization Assistance Program
										</div>
									</a>
								</li>
							</ul>
							<div className="description">
								<div
									className="row tab-content active"
									data-slug="advancement-routes"
								>
									<div className="text col-md-12">
										<p>
											The green buildings and energy efficiency industry is
											exploding with jobs and opportunities; this map explores
											55 of them. An ambitious worker could progress
											<em>within</em> any of these occupations, or seek the
											skills and credentials to advance <em>between</em> them.
											Click any dot to find out more.
										</p>
									</div>
								</div>
								<div
									className="row tab-content"
									data-slug="sample-multi-sector-routes"
								>
									<div className="text col-md-8">
										<p>
											There are many ways to pursue evolving interests or new
											opportunities in the green buildings and energy efficiency
											industry. These wide-ranging, sample career routes are
											intended to suggest affinity and possibility; each would
											entail significant intermediate sequences of work
											experience and training. Click a path on the right to
											explore the sample, multi-sector advancement routes.
										</p>
									</div>
									<div className="subroutes col-md-4">
										<ul>
											<li>
												<a
													href="#"
													data-slug="route-1"
													data-type="careerPath"
													data-careerpath="building-performance-installer|building-performance-crew-leader|product-sales-specialist|building-performance-diagnostician"
													data-tooltips="|||"
													className="route-item subroute"
												>
													Residential → Professional
												</a>
											</li>
											<li>
												<a
													href="#"
													data-slug="route-2"
													data-type="careerPath"
													data-careerpath="building-performance-installer|energy-efficiency-sales-representative|building-performance-diagnostician|energy-manager"
													data-tooltips="|||"
													className="route-item subroute"
												>
													Residential →Operations
												</a>
											</li>
											<li>
												<a
													href="#"
													data-slug="route-3"
													data-type="careerPath"
													data-careerpath="energy-efficiency-technician-commercial|commercial-energy-auditor|junior-engineer|heat-pump-system-design-engineer"
													data-tooltips="|||"
													className="route-item subroute"
												>
													Commercial → Professional
												</a>
											</li>
											<li>
												<a
													href="#"
													data-slug="route-4"
													data-type="careerPath"
													data-careerpath="draftsperson|residential-energy-auditor|commercial-energy-auditor|energy-manager"
													data-tooltips="|||"
													className="route-item subroute"
												>
													Professional → Operations
												</a>
											</li>
											<li>
												<a
													href="#"
													data-slug="route-5"
													data-type="careerPath"
													data-careerpath="building-automation-systems-trainee|building-automation-systems-technician|building-performance-diagnostician|mep-contractor-with-green-building-expertise"
													data-tooltips="|||"
													className="route-item subroute"
												>
													Operations → Commercial
												</a>
											</li>
										</ul>
									</div>
								</div>
								<div className="row tab-content" data-slug="new-collar-jobs">
									<div className="text col-md-12">
										<p>
											The Green Buildings Career Map identifies
											<strong>32 jobs</strong> in the Energy Efficiency industry
											that do not require a college degree. In fact, a recent
											study by a major job-recruiting company found that just
											21% of the jobs posted on its website specifically ask
											that candidates have a college degree. The U.S. Labor
											Department says the country is facing a significant
											shortfall of skilled workers. Many companies are no longer
											looking for white-collar or blue-collar workers, but
											instead{" "}
											<em>
												<u>new-collar</u>
											</em>{" "}
											workers: individuals who develop the technical and soft
											skills needed to work in jobs through nontraditional
											education paths. New-collar workers do not have a
											four-year degree from college. Instead, new-collar workers
											gain skills through on-the-job training, high school
											technical education, on-the-job apprenticeships,
											vocational schools, technical certification programs,
											community colleges, the military, and internships. The
											mid-level and advanced-level new-collar jobs identified in
											this career map typically require more experience or
											certification to advance.
										</p>
									</div>
								</div>
								<div
									className="row tab-content"
									data-slug="weatherization-assistance-program"
								>
									<div className="text col-md-12">
										<p>
											The U.S. Department of Energy
											<a href="https://greenbuildingscareermap.org/wap">
												Weatherization Assistance Program (WAP)
											</a>
											stands as a cornerstone in the national effort to address
											energy poverty, promote environmental sustainability, and
											create job opportunities. Through its multifaceted
											approach, the program not only reduces the energy burden
											on low-income households but also contributes to the
											economic and environmental well-being of communities
											across the United States. The program supports
											<strong>8,500 jobs</strong>, including the job roles
											highlighted here.
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="map-grid">
							<div className="guard"></div>
							<div
								className="point x40-residential x20-center y20-mid-advanced"
								data-slug="multifamily-retrofit-project-manager"
								data-routes="ee-program-director|mep-contractor-with-green-building-expertise|building-performance-contractor-commercial|building-home-performance-contractor"
								data-tooltips="|||"
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Multifamily Retrofit Project Manager
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Multifamily Retrofit Project Manager
										</div>
										<p>
											As a Multifamily Retrofit Project Manager, you will play a
											pivotal role in overseeing and managing the implementation
											of energy efficiency and sustainability retrofit projects
											in multifamily housing complexes.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/multifamily-retrofit-project-manager"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x30-right y10-high-advanced"
								data-slug="ee-program-director"
								data-routes="building-performance-contractor-commercial|building-scientist|building-science-instructor|hvac-contractor-with-heat-pump-design-expertise|building-home-performance-contractor"
								data-tooltips="This move requires significant experience and obtaining state licensing and certification.|A bachelor's degree in engineering or related field and in-depth knowledge of building sytems.|Strong knowledge of building systems, certification, leadership and management skills are needed.|This advancement may require specialized training and certification.|This move requires significant experience and obtaining state licensing and certification."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Energy Efficiency Program Director</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Energy Efficiency Program Director
										</div>
										<p>
											Energy Efficiency Program Directors lead the
											implementation of local, state, regional, or federal
											programs designed to increase the energy efficiency of
											residential buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/ee-program-director"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x20-center y10-high-advanced"
								data-slug="hvac-contractor-with-heat-pump-design-expertise"
								data-routes="heat-pump-system-design-engineer|building-engineer|building-operator|mep-contractor-with-green-building-expertise|junior-engineer|building-home-performance-contractor"
								data-tooltips="A bachelor's degree in engineering or related field and in-depth knowledge of building sytems.|Post-secondary training and knowledge of building management systems are needed for this move.|Knowledge of building management systems and training are likely needed for this move.|Strong knowledge of building systems, management skills, and license and certification are needed.|A Bachelor’s Degree in engineering is typically needed to advance.|Strong knowledge of building systems, management skills, and license and certification are needed."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									HVAC Contractor with heat pump design expertise
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											HVAC Contractor with heat pump design expertise
										</div>
										<p>
											HVAC Contractors with heat pump design expertise run
											businesses that design and install high performance
											mechanical systems for heating, cooling, and ventilation
											in residential homes, with a specialization in heat pump
											technology and energy diagnostics for HVAC systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/hvac-contractor-with-heat-pump-design-expertise"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x10-left y10-high-advanced"
								data-slug="building-home-performance-contractor"
								data-routes="building-performance-contractor-commercial|building-scientist|building-science-instructor|building-commissioning-professional|mep-contractor-with-green-building-expertise|hvac-contractor-with-heat-pump-design-expertise"
								data-tooltips="Strong knowledge of building systems, management skills, and license and certification are needed.|A bachelor's degree in engineering or related field and in-depth knowledge of building sytems.|Strong knowledge of building systems, certification, leadership and management skills are needed.|This advancement might require additional Certification.|This move requires significant experience and obtaining state licensing and certification.|This advancement may require specialized training and certification."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Building / Home Performance Contractor
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building / Home Performance Contractor
										</div>
										<p>
											Building / Home Performance Contractors run businesses
											that design and install whole-house energy measures to
											increase the thermal performance of residential buildings,
											often with a specialization in blower door-guided air
											sealing and insulation of the building enclosure.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-home-performance-contractor"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x10-left y20-mid-advanced"
								data-slug="residential-building-code-official-with-green-building-expertise"
								data-routes="building-commissioning-professional|commercial-building-code-official-with-green-building-expertise"
								data-tooltips="This advancement might require additional Certification.|Additional experience and certification is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Residential Building Code Official (with green building
									expertise)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Residential Building Code Official (with green building
											expertise)
										</div>
										<p>
											Residential Building Code Officials with green building
											expertise review plans and engineering calculations,
											process permit requests, and conduct site inspections to
											ensure code compliance for residential construction
											projects with significant energy measures included in the
											scope of work.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/residential-building-code-official-with-green-building-expertise"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x10-left y30-low-advanced"
								data-slug="multifamily-construction-manager-qci"
								data-routes="multifamily-retrofit-project-manager|facilities-manager|building-commissioning-professional|energy-manager|commercial-construction-mgr-with-green-building-expertise|sustainable-construction-supervisor-leed-ap"
								data-tooltips="|In-depth knowledge of building automation systems would support this move.|This advancement might require additional Certification.|A bachelor's degree in engineering or related field and in-depth knowledge of building sytems.|Strong knowledge of building systems and leadership and management skills are needed for this move.|Excellent leadership skills would support this advance."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Multifamily Quality Control Inspector
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Multifamily Quality Control Inspector
										</div>
										<p>
											Multifamily Quality Control Inspectors use their advanced
											understanding of the green buildings and energy efficiency
											industry to ensure all energy retrofit work was done
											properly and the multifamily building is performing as
											expected.
											<br />
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/multifamily-construction-manager-qci"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x30-right y40-high-midlevel"
								data-slug="multifamily-energy-auditor"
								data-routes="multifamily-retrofit-project-manager|sustainability-specialist|ee-program-director|building-science-instructor|energy-manager|product-sales-specialist|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|facilities-manager|building-operator|commercial-energy-auditor|commercial-lighting-auditor|commercial-construction-mgr-with-green-building-expertise|indoor-environmental-health-specialist|multifamily-construction-manager-qci"
								data-tooltips="|This advancement might require additional Certification.|A Bachelor’s Degree is typically needed to advance.|Strong knowledge of building systems, certification, leadership and management skills are needed.|A bachelor's degree in engineering or related field and in-depth knowledge of building sytems.|This advancement requires specialized manufacturer training.|Certification and licensing is most likely needed to advance here.|State licensing is required for this advancement.|Post-secondary training and additional experience would likely support this advancement.|Knowledge of building management systems and training are likely needed for this move.|This advancement might require additional Certification.|A Bachelor’s Degree and lighting design experience is typically needed to advance.|Strong knowledge of building systems and leadership and management skills are needed for this move.|This advancement might require additional Certification.|This advancement might require additional Certification."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Multifamily Energy Auditor</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Multifamily Energy Auditor
										</div>
										<p>
											Multifamily Energy Auditors conduct onsite energy audits
											and assessments and perform energy modeling to determine
											the current and desired energy performance, safety, and
											durability of multifamily buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/multifamily-energy-auditor"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x20-center y50-mid-midlevel"
								data-slug="healthy-home-evaluator"
								data-routes="ee-program-director|indoor-environmental-health-specialist|building-home-performance-contractor|real-estate-agent-with-green-building-expertise|real-estate-appraiser-with-green-building-expertise|building-performance-diagnostician"
								data-tooltips="A Bachelor’s Degree and more experience is typically needed to advance.|Additional experience and industry certification is typically needed for this advancement.|Additional experience is required for this advancement.|State licensing is required for this advancement.|Certification and licensing is most likely needed to advance here.|Additional experience is required for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Healthy Home Evaluator</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Healthy Home Evaluator
										</div>
										<p>
											Healthy Home Evaluators assess home-based environmental
											health and safety hazards and provide recommendations to
											remediate those hazards.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/healthy-home-evaluator"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x30-right y60-low-midlevel"
								data-slug="building-performance-crew-leader"
								data-routes="residential-energy-auditor|multifamily-retrofit-project-manager|ee-program-director|commercial-construction-mgr-with-green-building-expertise|multifamily-construction-manager-qci|building-maintenance-technician|product-sales-specialist|insulation-air-sealing-technician|building-home-performance-contractor|real-estate-agent-with-green-building-expertise|real-estate-appraiser-with-green-building-expertise|certified-home-energy-rater-assessor-home-inspector|draftsperson"
								data-tooltips="||A Bachelor’s Degree is typically needed to advance.|A Bachelor’s Degree and/or extensive building system design experience is typically needed.|This advancement might require additional Certification.|No additional requirements are needed for this advancement.|This advancement requires specialized manufacturer training.|No additional requirements are needed for this advancement.|Extensive experience in building design, sustainable design and green construction is required.|State licensing is required for this advancement.|Certification and licensing is most likely needed to advance here.|This advancement might require additional Certification.|This advancement may require specialized training."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Performance Crew Leader</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Performance Crew Leader
										</div>
										<p>
											Building Performance Crew Leaders supervise the
											installation of energy efficiency upgrades, closely
											monitoring crew performance, work quality, safety, and
											customer needs.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-performance-crew-leader"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x10-left y40-high-midlevel"
								data-slug="qc-inspector"
								data-routes="ee-program-director|energy-manager|multifamily-construction-manager-qci|building-performance-diagnostician|commercial-construction-mgr-with-green-building-expertise|real-estate-agent-with-green-building-expertise|real-estate-appraiser-with-green-building-expertise|residential-building-code-official-with-green-building-expertise|certified-home-energy-rater-assessor-home-inspector|healthy-home-evaluator"
								data-tooltips="A Bachelor’s Degree is typically needed to advance.|A bachelor's degree in engineering or related field and knowledge of building systems is required.|This advancement might require additional Certification.|This move requires significant experience and industry certification.|Extensive experience in building design, sustainable design and green construction is required.|State licensing is required for this advancement.|Certification and licensing is most likely needed to advance here.|This move requires significant experience and industry certification.|This advancement might require additional Certification.|This advancement might require additional Certification."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Residential Quality Control Inspector
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Residential Quality Control Inspector
										</div>
										<p>
											Quality Control Inspectors verify the compliance of energy
											retrofit work based on applicable installation standards
											and codes using visual and diagnostic data and specify
											corrective actions where necessary to achieve the intended
											performance of installed measures.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/qc-inspector"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x10-left y50-mid-midlevel"
								data-slug="residential-energy-auditor"
								data-routes="junior-engineer|junior-architect|building-home-performance-contractor|ee-program-director|building-science-instructor|energy-manager|residential-building-code-official-with-green-building-expertise|building-performance-diagnostician|commercial-lighting-auditor|commercial-energy-auditor|multifamily-energy-auditor|real-estate-agent-with-green-building-expertise|real-estate-appraiser-with-green-building-expertise|certified-home-energy-rater-assessor-home-inspector|qc-inspector"
								data-tooltips="This move requires an engineering degree to advance.|This move requires an architectural degree to advance.|In-depth knowledge in building and sustainable design, and green construction is typically required.|This advancement typically requires a bachelor’s degree in a related fieldand more experience.|Strong knowledge of building systems, certification, leadership and management skills are needed.|A bachelor's degree in engineering or related field and knowledge of building design is required.|Additional building system experience and certification would support this move.|In-depth knowledge in building and sustainable design, and green construction is typically required.|This move requires a bachelor’s degree and/or significant lighting design experience.|Additional experience and industry certification is typically needed for this advancement.|Additional experience and industry certification is typically needed for this advancement.|State licensing is required for this advancement.|Certification and licensing is most likely needed to advance here.|Additional experience and industry certification is typically needed for this advancement.|Additional experience and industry certification is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Residential Energy Auditor</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Residential Energy Auditor
										</div>
										<p>
											Residential Energy Auditors conduct onsite energy audits
											and assessments and perform energy modeling to determine
											the current and desired energy performance, safety, and
											durability of single family buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/residential-energy-auditor"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x30-right y70-high-entry"
								data-slug="energy-efficiency-sales-representative"
								data-routes="certified-home-energy-rater-assessor-home-inspector|residential-energy-auditor|energy-efficiency-technician-commercial|draftsperson|building-automation-systems-technician|building-automation-systems-trainee|building-performance-diagnostician|product-sales-specialist"
								data-tooltips="This advancement may require specialized training and certification.|This advancement might require additional Certification.|No additional requirements are needed for this advancement.|This advancement may require specialized training.|Post-secondary training and knowledge of building management systems is likely needed for this move.|No additional requirements are needed for this advancement.|Industry certification and additional experience would facilitate this advancement.|This advancement requires specialized manufacturer training."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Energy Efficiency Sales Representative
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Energy Efficiency Sales Representative
										</div>
										<p>
											Energy Efficiency Sales Representatives generate leads and
											sales and provide preliminary technical support for
											residential building performance equipment and materials.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/energy-efficiency-sales-representative"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x30-right y80-mid-entry"
								data-slug="energy-efficiency-program-assistant-coordinator"
								data-routes="draftsperson|real-estate-agent-with-green-building-expertise|real-estate-appraiser-with-green-building-expertise|energy-efficiency-sales-representative|energy-efficiency-technician-commercial"
								data-tooltips="This advancement may require specialized training.|State licensing is required for this advancement.|Certification and licensing is most likely needed to advance here.|Being highly motivated and a self-starter would facilitate this move.|Additional experience is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Energy Efficiency Program Assistant</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Energy Efficiency Program Assistant
										</div>
										<p>
											Energy Efficiency Program Assistants provide
											administrative support for energy efficiency programs.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/energy-efficiency-program-assistant-coordinator"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x20-center y80-mid-entry"
								data-slug="energy-efficiency-technician-residential"
								data-routes="building-home-performance-contractor|real-estate-agent-with-green-building-expertise|real-estate-appraiser-with-green-building-expertise|building-automation-systems-trainee|building-performance-diagnostician|multifamily-energy-auditor|healthy-home-evaluator|residential-energy-auditor|certified-home-energy-rater-assessor-home-inspector|energy-efficiency-sales-representative"
								data-tooltips="Extensive experience in building design, sustainable design and green construction is required.|State licensing is required for this advancement.|Certification, licensing, and additional experience is most likely needed to advance here.|Additional experience is typically needed for this advancement.|Post-secondary training, certification, and additional experience would support this advancement.|Post-secondary training, certification, and additional experience would support this advancement.|This advance typically requires 1-2 years of experience and industry Certifications.|This advance typically requires 1-2 years of experience and industry Certifications.|This advance typically requires 1-3 years of experience and industry Certifications.|Being highly motivated and a self-starter would facilitate this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Energy Efficiency Technician (Residential)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Energy Efficiency Technician (Residential)
										</div>
										<p>
											Residential Energy Efficiency Technicians install building
											performance measurements and collect a range of technical
											data to support the energy audit and home energy upgrade
											process.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/energy-efficiency-technician-residential"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x40-residential x10-left y90-low-entry"
								data-slug="building-performance-installer"
								data-routes="building-performance-diagnostician|energy-efficiency-sales-representative|energy-efficiency-technician-commercial|energy-efficiency-technician-residential|building-maintenance-worker|building-performance-crew-leader|insulation-apprentice|insulation-air-sealing-technician"
								data-tooltips="Additional experience and industry certification would facilitate this advancement.|Being highly motivated and a self-starter would facilitate this move.|Additional experience is required for this advancement.|Additional experience is required for this advancement.|No additional requirements are needed for this advancement.|Additional experience is required for this advancement.|Willingness to participate in an approved apprenticeship training program is required for this move.|Additional experience is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Performance Installer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Performance Installer
										</div>
										<p>
											Building Performance Installers perform upgrades to
											residential homes to reduce heat loss and air leakage and
											to increase the efficiency and safety of mechanical
											systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-performance-installer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x20-center y10-high-advanced"
								data-slug="mep-contractor-with-green-building-expertise"
								data-routes="building-scientist|building-science-instructor"
								data-tooltips="No additional requirements are needed for this advancement.|Strong knowledge of building systems and leadership skills will facilitate this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Mechanical, Electrical, Plumbing (MEP) Contractor (with green
									building expertise)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Mechanical, Electrical, Plumbing (MEP) Contractor (with
											green building expertise)
										</div>
										<p>
											MEP Contractors (mechanical, electrical and plumbing) with
											green building expertise run businesses that design and
											install energy efficient, high-performance HVAC and
											electrical systems in commercial buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/mep-contractor-with-green-building-expertise"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x10-left y10-high-advanced"
								data-slug="building-performance-contractor-commercial"
								data-routes="building-scientist|building-science-instructor"
								data-tooltips="A bachelor's degree in engineering or related field and in-depth knowledge of building sytems.|Strong knowledge of building systems, certification, leadership and management skills are needed."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Building Performance Contractor (Commercial)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Performance Contractor (Commercial)
										</div>
										<p>
											Commercial Building Performance Contractors run businesses
											that design and install energy-efficient building
											assemblies, lighting, and equipment to increase the energy
											performance and durability of commercial buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-performance-contractor-commercial"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x20-center y20-mid-advanced"
								data-slug="commercial-construction-mgr-with-green-building-expertise"
								data-routes="multifamily-retrofit-project-manager|commercial-building-code-official-with-green-building-expertise|facilities-manager|energy-manager|building-science-instructor|senior-operations-manager|mep-contractor-with-green-building-expertise|building-performance-contractor-commercial"
								data-tooltips="|Industry certification would facilitate this advancement.|In-depth knowledge of building automation systems would support this move.|Industry certification would facilitate this advancement.|Strong knowledge of building systems, certification, leadership and management skills are needed.|In-depth knowledge of building automation systems would support this move.|Certification and licensing is most likely needed to advance here.|Certification and licensing is most likely needed to advance here."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Commercial Construction Manager (with green building
									expertise)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Commercial Construction Manager (with green building
											expertise)
										</div>
										<p>
											Commercial Construction Managers with green building
											expertise oversee project planning, scheduling,
											construction, and quality control for high-performance
											commercial construction projects.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/commercial-construction-mgr-with-green-building-expertise"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x10-left y20-mid-advanced"
								data-slug="commercial-building-code-official-with-green-building-expertise"
								data-routes="sustainability-specialist|building-science-instructor|energy-manager"
								data-tooltips="This move requires a bachelor’s degree and/or significant building system design experience.|Strong knowledge of building systems, certification, leadership and management skills are needed.|A bachelor's degree in engineering or related field and knowledge of building systems is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Commercial Building Code Official (with green building
									expertise)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Commercial Building Code Official (with green building
											expertise)
										</div>
										<p>
											Building Code Officials with green building expertise
											review plans and engineering calculations, process permit
											requests, and conduct site inspections to ensure code
											compliance for commercial construction projects with
											significant energy efficiency measures included in the
											scope of work.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/commercial-building-code-official-with-green-building-expertise"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x20-center y30-low-advanced"
								data-slug="indoor-environmental-health-specialist"
								data-routes="building-science-instructor|facilities-manager|building-scientist|building-performance-contractor-commercial|building-performance-diagnostician"
								data-tooltips="Strong knowledge of building systems, certification, leadership and management skills are needed.|This advance requires extensive knowledge of building automation systems.|In-depth knowledge in building and sustainable design, and green construction is typically required.|Strong knowledge of building systems and strong leadership skills would facilitate this move.|Industry certification would facilitate this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Indoor Environmental Health Specialist
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Indoor Environmental Health Specialist
										</div>
										<p>
											Indoor Environmental Health Specialists assess a wide
											variety of commercial and industrial buildings to identify
											health and safety risks such as indoor air quality,
											environmental contaminants, and safety hazards and propose
											remediation measures.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/indoor-environmental-health-specialist"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x10-left y30-low-advanced"
								data-slug="sustainable-construction-supervisor-leed-ap"
								data-routes="multifamily-retrofit-project-manager|building-scientist|commercial-building-code-official-with-green-building-expertise|building-performance-contractor-commercial|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|building-science-instructor|energy-manager|building-commissioning-professional|commercial-construction-mgr-with-green-building-expertise|registered-architect"
								data-tooltips="|A Bachelor’s Degree in a related field is typically needed to advance.|Industry certification would support this advancement.|Strong knowledge of building systems and strong leadership skills would facilitate this move.|Certification and licensing is most likely needed to advance here.|State licensing is required for this advancement.|Strong knowledge of building systems, certification, leadership and management skills are needed.|A Bachelor’s Degree in a related field is typically needed to advance.|Industry certification would support this advancement.|Strong knowledge of building systems, certification, leadership and management skills are needed.|An architectural degree and extensive experience in sustainable building design is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Sustainable Construction Supervisor / LEED AP
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Sustainable Construction Supervisor / LEED AP
										</div>
										<p>
											Sustainable Construction Supervisors oversee the elements
											of commercial construction projects that impact the
											installation of high-performance building assemblies and
											mechanical systems, with a focus on the requirements of
											green building certification and credentialing schemes.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/sustainable-construction-supervisor-leed-ap"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x30-right y40-high-midlevel"
								data-slug="commercial-construction-foreperson"
								data-routes="building-science-instructor|commercial-building-code-official-with-green-building-expertise|building-operator|multifamily-energy-auditor|lighting-designer|commercial-lighting-auditor|commercial-energy-auditor|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|building-performance-contractor-commercial|mep-contractor-with-green-building-expertise|commercial-construction-mgr-with-green-building-expertise|sustainable-construction-supervisor-leed-ap"
								data-tooltips="Strong knowledge of building systems, certification, leadership and management skills are needed.|Industry certification would support this advancement.|Certification and knowledge of building management systems are likely needed for this move.|This advancement might require additional Certification.|A Bachelor’s Degree and specialized training is typically needed to advance.|This advancement might require additional Certification.|This advancement might require additional Certification.|Certification and licensing is most likely needed for this job.|State licensing is required for this advancement.|Strong knowledge of building systems, certification, leadership and management skills are needed.|Strong knowledge of building systems, management skills, and license and certification are needed.|This advance will likely require a bachelor’s degree and/or significant building systems experience.|Strong knowledge of building systems, certification, leadership and management skills are needed."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Commercial Construction Foreperson</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Commercial Construction Foreperson
										</div>
										<p>
											Commercial Construction Forepersons oversee all operations
											and workers on a commercial construction site and ensure
											that relevant safety standards and building codes are met.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/commercial-construction-foreperson"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x20-center y40-high-midlevel"
								data-slug="commercial-energy-auditor"
								data-routes="building-performance-diagnostician|junior-architect|junior-engineer|sustainable-construction-supervisor-leed-ap|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|building-science-instructor|energy-manager|commercial-building-code-official-with-green-building-expertise|sustainability-specialist"
								data-tooltips="Additional experience and industry certification would facilitate this advancement.|A bachelor's degree in architecture is required.|A bachelor's degree in engineering is required.|Strong knowledge of building systems, certification, leadership and management skills are needed.|Certification and licensing in most likely needed to advance here.|State licensing is required for this advancement.|Strong knowledge of building systems, certification, leadership and management skills are needed.|A Bachelor’s Degree and additional industry experience is typically needed to advance.|Experience in sustainable building design and industry certification would support this move.|A Bachelor’s Degree and industry certification is typically needed to advance."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Commercial Energy Auditor</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Commercial Energy Auditor
										</div>
										<p>
											Commercial Energy Auditors collect and analyze energy
											usage data for commercial buildings and then provide an
											audit report to outline energy performance,
											recommendations, and cost savings potential.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/commercial-energy-auditor"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x10-left y40-high-midlevel"
								data-slug="commercial-lighting-auditor"
								data-routes="real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|building-performance-contractor-commercial|lighting-designer"
								data-tooltips="Certification and licensing in most likely needed to advance here.|State licensing is required for this advancement.|Strong knowledge of building systems and strong leadership skills would facilitate this move.|A bachelor's degree in a related field and in-depth knowledge of lighting systems is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Commercial Lighting Auditor</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Commercial Lighting Auditor
										</div>
										<p>
											Commercial Lighting Auditors conduct assessments of
											lighting systems and conditions in existing commercial,
											industrial, multifamily, healthcare and educational
											facilities.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/commercial-lighting-auditor"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x10-left y50-mid-midlevel"
								data-slug="insulation-journeyperson-mechanic"
								data-routes="real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|building-home-performance-contractor|building-performance-contractor-commercial|building-performance-diagnostician|sustainable-construction-supervisor-leed-ap|commercial-construction-foreperson"
								data-tooltips="Certification and licensing in most likely needed to advance here.|State licensing is required for this advancement.|Strong knowledge of building systems and strong leadership skills would facilitate this move.|Strong knowledge of building systems and strong leadership skills would facilitate this move.|Industry certification would facilitate this advancement.|Strong knowledge of building systems, certification, leadership and management skills are needed.|Strong knowledge of building systems and strong leadership skills would facilitate this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Insulation Journeyperson / Mechanic</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Insulation Journeyperson / Mechanic
										</div>
										<p>
											Insulation Journeypersons are unionized, experienced
											installers of insulating products that increase the
											thermal efficiency and performance of commercials
											buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/insulation-journeyperson-mechanic"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x20-center y50-mid-midlevel"
								data-slug="product-sales-specialist"
								data-routes="energy-manager|sustainable-construction-supervisor-leed-ap|multifamily-energy-auditor|commercial-energy-auditor|commercial-lighting-auditor|building-automation-systems-technician|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|building-science-instructor|building-performance-diagnostician"
								data-tooltips="A Bachelor’s Degree is typically needed to advance.|Extensive experience in building design, sustainable design and green construction is required.|Industry certification would facilitate this advancement.|Industry certification would facilitate this advancement.|A Bachelor’s Degree is typically needed to advance.|Knowledge of building automation systems would support this move.|Certification and licensing in most likely needed to advance here.|State licensing is required for this advancement.|Certification and licensing in most likely needed to advance here.|This advancement might require additional Certification."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Product Sales Specialist</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Product Sales Specialist
										</div>
										<p>
											Product Sales Specialists generate leads and sales
											opportunities for commercial energy efficient equipment
											and provide advanced technical support for the equipment.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/product-sales-specialist"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x20-center y80-mid-entry"
								data-slug="insulation-air-sealing-technician"
								data-routes="commercial-construction-foreperson|draftsperson|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|energy-efficiency-sales-representative|building-maintenance-technician|insulation-journeyperson-mechanic|insulation-apprentice"
								data-tooltips="Strong knowledge of building systems and strong leadership skills would facilitate this move.|This advancement may require specialized training.|Certification and licensing in most likely needed to advance here.|State licensing is required for this advancement.|Being highly motivated and a self-starter would facilitate this move.|Additional experience is typically needed for this advancement.|Additional experience and training is required for this advancement.|Willingness to participate in an approved apprenticeship training program is required for this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Insulation/Air Sealing Technician</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Insulation/Air Sealing Technician
										</div>
										<p>
											Insulation/Air Sealing Technicians install products that
											reduce heat loss and air leakage in commercial buildings
											and mechanical systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/insulation-air-sealing-technician"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x10-left y80-mid-entry"
								data-slug="insulation-apprentice"
								data-routes="real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|product-sales-specialist|commercial-construction-foreperson|insulation-air-sealing-technician|building-maintenance-technician|insulation-journeyperson-mechanic"
								data-tooltips="Certification and licensing in most likely needed to advance here.|State licensing is required for this advancement.|Being highly motivated and possessing 1-2 years of sales experience would facilitate this move.|Strong knowledge of building systems and strong leadership skills would facilitate this move.|Additional experience is typically needed for this advancement.|This advancement may require additional experience.|Additional experience and training is required for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Insulation Apprentice</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Insulation Apprentice
										</div>
										<p>
											Insulation Apprentices is usually a unionized, entry-level
											installer of insulating products that increase the thermal
											efficiency and performance of commercials buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/insulation-apprentice"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x30-commercial x10-left y90-low-entry"
								data-slug="energy-efficiency-technician-commercial"
								data-routes="commercial-construction-foreperson|building-performance-diagnostician|multifamily-energy-auditor|commercial-lighting-auditor|commercial-energy-auditor|energy-efficiency-technician-residential|product-sales-specialist|draftsperson|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise|building-operator|building-automation-systems-technician|commercial-construction-mgr-with-green-building-expertise|insulation-apprentice|insulation-air-sealing-technician|building-automation-systems-trainee"
								data-tooltips="Strong knowledge of building systems and strong leadership skills would facilitate this move.|Additional experience and industry certification would facilitate this advancement.|Additional experience and industry certification would facilitate this advancement.|A Bachelor’s Degree is typically needed to advance.|This advancement may require specialized training and certification.|No additional experience is needed for this advancement.|Being highly motivated and possessing 1-2 years of sales experience would facilitate this move.|This advancement may require specialized training.|Additional training and certification would support this advancement.|State licensing is required for this advancement.|This advancement may require specialized training and certification.|A degree in Building Automation Systems Technology would support this move.|Substantial work experience and/or additional technical training would support this move.|Willingness to participate in an approved apprenticeship training program is required for this move.|Additional experience is typically needed for this advancement.|More experience would support this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Energy Efficiency Technician (Commercial)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Energy Efficiency Technician (Commercial)
										</div>
										<p>
											Commercial Energy Efficiency Technicians assist with data
											collection for energy audits and installation of energy
											efficiency upgrades to commercial buildings and mechanical
											systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/energy-efficiency-technician-commercial"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x30-right y10-high-advanced"
								data-slug="chief-engineer"
								data-routes="building-science-instructor|building-commissioning-professional|senior-operations-manager|energy-engineer"
								data-tooltips="Strong knowledge of building systems and strong leadership skills would facilitate this move.|This advancement might require additional Certification.|Strong knowledge of building systems and strong leadership skills would facilitate this move.|A bachelor's degree in engineering or related field and in-depth knowledge of building sytems."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Chief Engineer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Chief Engineer</div>
										<p>
											Chief Engineers oversee entire engineering departments,
											leading a team as they complete various building projects.
											Working alongside other engineers and technicians, they
											approve designs, calculate costs, negotiate contracts, and
											execute work plans safely and efficiently.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/chief-engineer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x20-center y10-high-advanced"
								data-slug="senior-operations-manager"
								data-routes="building-science-instructor|building-commissioning-professional|energy-engineer|chief-engineer"
								data-tooltips="Strong knowledge of building systems and strong leadership skills would facilitate this move.|This advancement might require additional Certification.|Strong knowledge of building systems would facilitate this move.|Additional experience is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Senior Operations Manager</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Senior Operations Manager
										</div>
										<p>
											Senior Operations Managers manage the daily activities of
											a business and provide supervision and training to a team
											of employees to ensure business operations run efficiently
											and safely.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/senior-operations-manager"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x10-left y10-high-advanced"
								data-slug="energy-engineer"
								data-routes="mep-contractor-with-green-building-expertise|building-scientist|senior-operations-manager|chief-engineer"
								data-tooltips="Experience in building design, sustainable design and green construction would support this move.|Extensive experience in building design, sustainable design and green construction is required.|Significant experience would support this move.|Additional experience is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Energy Engineer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Energy Engineer</div>
										<p>
											Energy Engineers design, develop, and evaluate
											energy-related projects or programs to reduce energy costs
											of new and existing buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/energy-engineer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x20-center y20-mid-advanced"
								data-slug="energy-manager"
								data-routes="building-science-instructor|facilities-manager|building-scientist|chief-engineer|energy-engineer"
								data-tooltips="Strong knowledge of building systems and strong leadership skills would facilitate this move.|Additional experience is typically needed for this advancement.|Extensive experience in building design, sustainable design and green construction is required.|Additional experience is typically needed for this advancement.|Additional experience is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Energy Manager</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Energy Manager</div>
										<p>
											Energy Managers oversee, analyze, and evaluate energy use
											in buildings, determine energy-related settings and system
											controls, and plan for upgrades to energy-related systems
											to optimize building efficiency and performance and reduce
											energy costs.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/energy-manager"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x10-left y20-mid-advanced"
								data-slug="facilities-manager"
								data-routes="indoor-environmental-health-specialist|senior-operations-manager"
								data-tooltips="This advancement might require additional Certification.|A bachelor's degree in engineering or related field and in-depth knowledge of building sytems."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Facilities Manager</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Facilities Manager</div>
										<p>
											Facility Managers provide overall direction, coordination,
											and supervision related to the operations and maintenance
											of building systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/facilities-manager"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x10-left y30-low-advanced"
								data-slug="building-engineer"
								data-routes="building-science-instructor|chief-engineer|senior-operations-manager"
								data-tooltips="Strong knowledge of building systems and strong leadership  skills would facilitate this move.|Additional experience and industry certification would facilitate this advancement.|This advance requires extensive knowledge of building automation systems."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Engineer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Building Engineer</div>
										<p>
											Building Engineers are responsible for overseeing all
											building maintenance and preventative maintenance
											schedules in larger buildings and they directly supervise
											building maintenance employees.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-engineer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x10-left y40-high-midlevel"
								data-slug="building-operator"
								data-routes="building-commissioning-professional|building-science-instructor|building-performance-diagnostician|chief-engineer|energy-engineer|facilities-manager|senior-operations-manager|building-engineer"
								data-tooltips="Additional experience and Certifications would support this move.|Strong knowledge of HVAC/R and strong leadership and management skills would facilitate this move.|No additional requirements are needed for this advancement.|Substantial work experience and/or additional technical training would support this move.|Post-secondary training and additional experience would likely support this advancement.|Substantial work experience and/or additional technical training would support this move.|This advance requires extensive knowledge of building automation systems.|Post-secondary training and additional experience would likely support this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Operator</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Building Operator</div>
										<p>
											Building Operators ensure that a building's heating,
											cooling, mechanical and electrical equipment is running
											effectively. The exact duties of the building operator
											depend on the type of structure or structures under the
											operator's oversight.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-operator"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x30-right y50-mid-midlevel"
								data-slug="building-automation-systems-technician"
								data-routes="energy-manager|building-engineer|building-science-instructor|building-operator|building-performance-diagnostician"
								data-tooltips="A bachelor’s degree in engineering with HVAC/R expertise or related field is needed.|Post-secondary training and knowledge of building management systems are needed for this move.|Strong knowledge of HVAC/R and strong leadership and management skills would facilitate this move.|Additional experience is typically needed for this advancement.|Post-secondary training and additional experience would likely support this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Building Automation Systems Technician
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Automation Systems Technician
										</div>
										<p>
											Building Automation Systems Technicians install, repair,
											and maintain computer-based systems that control and
											monitor a building's mechanical and electrical equipment
											including heating, ventilation, and air conditioning
											(HVAC), and energy management systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-automation-systems-technician"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x10-left y70-high-entry"
								data-slug="building-maintenance-technician"
								data-routes="draftsperson|energy-efficiency-technician-residential|building-performance-installer|multifamily-energy-auditor|insulation-journeyperson-mechanic|product-sales-specialist|building-automation-systems-technician|building-operator"
								data-tooltips="This advancement might require additional Certification.|No additional experience is needed for this advancement.|No additional experience is needed for this advancement.|Additional experience and industry certification would facilitate this advancement.|No additional experience is needed for this advancement.|This advancement requires specialized training and excellent customer service skills.|Additional post-secondary training would support this move.|Substantial work experience and/or additional technical training would support this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Maintenance Technician</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Maintenance Technician
										</div>
										<p>
											Building Maintenance Technicians perform routine and
											emergency maintenance tasks, using a wide range of skills
											and knowledge in carpentry, electrical systems, heating,
											ventilation, and air conditioning (HVAC), and plumbing.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-maintenance-technician"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x10-left y80-mid-entry"
								data-slug="building-automation-systems-trainee"
								data-routes="draftsperson|product-sales-specialist|multifamily-energy-auditor|building-performance-diagnostician|building-automation-systems-technician"
								data-tooltips="This advancement might require additional Certification.|This advancement requires specialized training and excellent customer service skills.|Additional training and certification would support this advancement.|Extensive experience in building design, sustainable design and green construction is required.|Additional post-secondary training would support this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Automation Systems Trainee</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Automation Systems Trainee
										</div>
										<p>
											Working under the supervision of a Building Automations
											Systems Technician, the Trainee assists with the
											installation, troubleshooting, and commissioning of
											building automation systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-automation-systems-trainee"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x20-operations x10-left y90-low-entry"
								data-slug="building-maintenance-worker"
								data-routes="building-performance-installer|draftsperson|energy-efficiency-technician-commercial|energy-efficiency-technician-residential|insulation-apprentice|building-automation-systems-trainee|building-maintenance-technician"
								data-tooltips="No additional experience is needed for this advancement.|Technical training would support this move.|Additional experience is typically needed for this advancement.|No additional experience is needed for this advancement.|Willingness to participate in an approved apprenticeship training program is required for this move.|Additional training and certification would support this advancement.|Additional experience is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Maintenance Worker</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Maintenance Worker
										</div>
										<p>
											Building Maintenance Workers perform general and
											preventative maintenance work on buildings to keep all
											systems in good repair.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-maintenance-worker"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x30-right y10-high-advanced"
								data-slug="building-scientist"
								data-routes="registered-architect|building-performance-contractor-commercial|mep-contractor-with-green-building-expertise"
								data-tooltips="This move requires significant experience and obtaining state licensing.|Extensive experience in building design, sustainable design and green construction is required.|Extensive experience in building design, sustainable design and green construction is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Scientist</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Building Scientist</div>
										<p>
											Building Scientists conduct scientific research to better
											understand the lifecycle of buildings from construction to
											operation and maintenance to demolition or reuse.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-scientist"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x30-new y10-high-advanced"
								data-slug="scientist"
								data-routes="registered-architect|building-performance-contractor-commercial|mep-contractor-with-green-building-expertise"
								data-tooltips="This move requires significant experience and obtaining state licensing.|Extensive experience in building design, sustainable design and green construction is required.|Extensive experience in building design, sustainable design and green construction is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Scientist</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Building Scientist</div>
										<p>
											Building Scientists conduct scientific research to better
											understand the lifecycle of buildings from construction to
											operation and maintenance to demolition or reuse.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-scientist"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x30-right y20-mid-advanced"
								data-slug="architectural-engineer"
								data-routes="multifamily-retrofit-project-manager|mechanical-engineer|registered-architect|sustainable-construction-supervisor-leed-ap|commercial-construction-mgr-with-green-building-expertise|commercial-building-code-official-with-green-building-expertise|building-performance-contractor-commercial|building-scientist|building-performance-diagnostician|energy-engineer|facilities-manager|energy-manager"
								data-tooltips="|Significant HVAC/R experience would support this move.|Certification and licensing in most likely needed to advance here.|This move requires excellent leadership skills.|Extensive experience in building design, sustainable design and green construction is required.|This advancement might require additional Certification.|Extensive experience in building design, sustainable design and green construction is required.|In-depth knowledge in building and sustainable design, and green construction is typically required.|This advancement might require additional Certification.|Knowledge of building automation systems would support this move.|Additional experience is typically needed for this advancement.|Strong knowledge of building systems and strong leadership skills would facilitate this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Architectural Engineer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Architectural Engineer
										</div>
										<p>
											Architectural Engineers use mathematical and scientific
											principles in building design to test, evaluate, and
											improve the structural integrity of buildings and building
											systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/architectural-engineer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x20-center y10-high-advanced"
								data-slug="building-commissioning-professional"
								data-routes="commercial-building-code-official-with-green-building-expertise|building-scientist|mep-contractor-with-green-building-expertise"
								data-tooltips="This advancement might require additional Certification.|In-depth knowledge in building and sustainable design, and green construction is typically required.|Extensive experience in building design, sustainable design and green construction is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Commissioning Professional</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Commissioning Professional
										</div>
										<p>
											Building Commissioning Professionals ensure that building
											and mechanical systems meet operational and design
											requirements in new construction and analyze and design
											for the optimization of systems in existing buildings to
											improve building performance and energy efficiency.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-commissioning-professional"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x20-center y20-mid-advanced"
								data-slug="registered-architect"
								data-routes="multifamily-retrofit-project-manager|architectural-engineer|commercial-building-code-official-with-green-building-expertise|sustainable-construction-supervisor-leed-ap|commercial-construction-mgr-with-green-building-expertise|building-performance-contractor-commercial|building-scientist"
								data-tooltips="|Certification and licensing in most likely needed to advance here.|This advancement might require additional Certification.|Extensive experience in building design, sustainable design and green construction is required.|Extensive experience in building design, sustainable design and green construction is required.|Extensive experience in building design, sustainable design and green construction is required.|In-depth knowledge in building and sustainable design, and green construction is typically required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Registered Architect</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Registered Architect
										</div>
										<p>
											Registered Architects plan and design building projects,
											ensuring all work is carried out to client specifications
											as well as specific standards, building codes, guidelines
											and regulations.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/registered-architect"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x10-left y20-mid-advanced"
								data-slug="mechanical-engineer"
								data-routes="sustainable-construction-supervisor-leed-ap|commercial-construction-mgr-with-green-building-expertise|commercial-building-code-official-with-green-building-expertise|building-commissioning-professional|mep-contractor-with-green-building-expertise|building-scientist"
								data-tooltips="Experience in building design, sustainable design and green construction would support this move.|Extensive experience in building design, sustainable design and green construction is required.|In-depth knowledge in building and sustainable design, and green construction is typically required.|This advancement may require specialized training and certification.|Additional experience is required for this advancement.|Extensive experience in building design, sustainable design and green construction is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Mechanical Engineer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Mechanical Engineer</div>
										<p>
											Mechanical Engineers research, design, develop, build, and
											test power-producing machines, such as electric
											generators, internal combustion engines, and steam and gas
											turbines, as well as power-using machines, such as
											heating, air-conditioning, and refrigeration systems.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/mechanical-engineer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x20-center y30-low-advanced"
								data-slug="building-science-instructor"
								data-routes="ee-program-director|sustainability-specialist|energy-manager|building-scientist"
								data-tooltips="This move requires a Bachelor’s Degree and excellent leadership skills.|In-depth knowledge in building and sustainable design, and green construction is typically required.|This advancement may require specialized training and certification.|Extensive experience in building design, sustainable design and green construction is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Science Instructor</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Science Instructor
										</div>
										<p>
											Instructors in building science and energy efficient
											technology bring subject matter expertise to classNameroom
											and laboratory instruction in a range of building science
											courses as part of professional training and education
											curricula.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-science-instructor"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x30-right y30-low-advanced"
								data-slug="heat-pump-system-design-engineer"
								data-routes="product-sales-specialist|hvac-contractor-with-heat-pump-design-expertise|mep-contractor-with-green-building-expertise|building-science-instructor|building-scientist|building-commissioning-professional|mechanical-engineer"
								data-tooltips="Being highly motivated and possessing 1-2 years of sales experience would facilitate this move.|Additional HVAC/R experience and Certifications would support this move.|Additional experience is typically needed for this advancement.|This advancement might require additional Teaching Certification.|Extensive experience in building design, sustainable design and green construction is required.|This advancement may require specialized training and certification.|No additional requirements are needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Heat Pump System Design Engineer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Heat Pump System Design Engineer
										</div>
										<p>
											Heat Pump System Design Engineers design new or
											replacement high-performance heating, cooling, and
											refrigeration systems that utilize heat pump technology to
											meet customer needs and building specifications.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/heat-pump-system-design-engineer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x10-left y30-low-advanced"
								data-slug="lighting-designer"
								data-routes="building-automation-systems-technician|commercial-lighting-auditor|product-sales-specialist|building-science-instructor|building-performance-contractor-commercial"
								data-tooltips="Knowledge of building automation systems would support this move.|This advancement might require additional Certification.|Being highly motivated and possessing 1-2 years of sales experience would facilitate this move.|Experience in building design, sustainable design and green construction would support this move.|Substantial work experience and/or additional technical training would support this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Lighting Designer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Lighting Designer</div>
										<p>
											Lighting Designers design and plan high-efficiency
											lighting and control systems for residential, multifamily,
											institutional, commercial or industrial spaces.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/lighting-designer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x20-center y40-high-midlevel"
								data-slug="building-performance-diagnostician"
								data-routes="product-sales-specialist|building-scientist|building-commissioning-professional|energy-manager"
								data-tooltips="Being highly motivated and possessing 1-2 years of sales experience would facilitate this move.|Extensive experience in building design, sustainable design and green construction is required.|This advance requires extensive knowledge of building automation systems.|Experience using a computerized maintenance management system would help facilitate this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Building Performance Diagnostician</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Building Performance Diagnostician
										</div>
										<p>
											Building Performance Diagnosticians are consultants with
											building sustainability, diagnostics, and data analysis
											expertise who guide clients and partners in planning,
											designing, and operating high-performance building systems
											that improve the efficiency of the building and quality of
											life for the occupants.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/building-performance-diagnostician"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x10-left y40-high-midlevel"
								data-slug="sustainability-specialist"
								data-routes="sustainable-construction-supervisor-leed-ap|ee-program-director|mep-contractor-with-green-building-expertise|facilities-manager|building-performance-contractor-commercial|building-scientist"
								data-tooltips="More experience would support this move.|This move requires excellent leadership skills.|In-depth knowledge in building and sustainable design, and green construction is typically required.|This advancement may require specialized training and certification.|Substantial work experience and/or additional technical training would support this move.|Extensive experience in building design, sustainable design and green construction is required."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Sustainability Specialist</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Sustainability Specialist
										</div>
										<p>
											Sustainability Specialists support and implement programs
											that focus on improving the environment and green building
											practices, saving money for their employer, and helping
											their local community and the environment.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/sustainability-specialist"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x20-center y50-mid-midlevel"
								data-slug="junior-engineer"
								data-routes="architectural-engineer|sustainable-construction-supervisor-leed-ap|building-science-instructor|building-scientist|energy-engineer|energy-manager|mechanical-engineer|building-commissioning-professional|heat-pump-system-design-engineer|commercial-energy-auditor|building-performance-diagnostician"
								data-tooltips="More experience and licensing in most likely needed to advance here.|3-5 years of experience and industry recognized certifications would facilitate this move.|Significantly more experience would support this move.|Experience in building design, sustainable design and green construction would support this move.|An in-depth knowledge of HVAC/R and building automation systems would facilitate this move.|3-5 years of experience is typically needed to advance.|A bachelor’s degree in mechanical engineering is needed.|An in-depth knowledge of HVAC/R and building automation systems would facilitate this move.|A mechanical engineering degree and significant HVAC/R experience is typically required.|Additional experience and industry certification would facilitate this advancement.|Substantial work experience would support this move."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Junior Engineer</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Junior Engineer</div>
										<p>
											Junior Engineers work under the direct supervision of an
											Engineer, providing design and development support for new
											building construction and retrofits, making calculations,
											preparing plans, and providing project reports.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/junior-engineer"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x10-left y50-mid-midlevel"
								data-slug="junior-architect"
								data-routes="architectural-engineer|sustainable-construction-supervisor-leed-ap|sustainability-specialist|building-home-performance-contractor|building-science-instructor|building-scientist|commercial-energy-auditor|building-performance-diagnostician|registered-architect"
								data-tooltips="Substantial experience and industry certification would facilitate this advancement.|Substantial work experience and/or additional technical training would support this move.|This advancement might require additional Certification.|Substantial work experience and/or additional technical training would support this move.|Additional experience is required for this advancement.|In-depth knowledge in building and sustainable design, and green construction is typically required.|Additional experience and industry certification would facilitate this advancement.|Additional experience and certification is required for this advancement.|Additional experience is required for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Junior Architect</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Junior Architect</div>
										<p>
											Junior Architects work under the direct supervision of an
											Architect or Lead Designer, helping to prepare designs,
											complete construction documents, write up building plans,
											and assist in the presentation of materials.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/junior-architect"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x30-right y60-low-midlevel"
								data-slug="real-estate-appraiser-with-green-building-expertise"
								data-routes="product-sales-specialist|energy-efficiency-sales-representative|residential-energy-auditor|certified-home-energy-rater-assessor-home-inspector"
								data-tooltips="A Bachelor’s Degree and 3-5 years of experience is typically needed to advance.|Being highly motivated and a self-starter would facilitate this move.|No additional experience is needed for this advancement.|This advancement may require specialized training and certification."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Real Estate Appraiser (with green building expertise)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Real Estate Appraiser (with green building expertise)
										</div>
										<p>
											Real Estate Appraisers with green building expertise
											analyze and prepare reports on a property's value,
											inspecting and documenting the condition and type of
											building assemblies and systems and take into account the
											market value of energy efficient and high-performance
											features.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/real-estate-appraiser-with-green-building-expertise"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x20-center y60-low-midlevel"
								data-slug="real-estate-agent-with-green-building-expertise"
								data-routes="product-sales-specialist|energy-efficiency-sales-representative|commercial-energy-auditor|certified-home-energy-rater-assessor-home-inspector"
								data-tooltips="A Bachelor’s Degree and 3-5 years of experience is typically needed to advance.|No additional experience is needed for this advancement.|Additional training and certification would support this advancement.|Additional experience is typically needed for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Real Estate Agent (with green building expertise)
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Real Estate Agent (with green building expertise)
										</div>
										<p>
											Real Estate Agents with green building expertise help
											clients purchase, rent, or sell property and they
											understand the market value and the features of energy
											efficient homes and buildings.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/real-estate-agent-with-green-building-expertise"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x10-left y60-low-midlevel"
								data-slug="certified-home-energy-rater-assessor-home-inspector"
								data-routes="ee-program-director|sustainable-construction-supervisor-leed-ap|commercial-lighting-auditor|commercial-energy-auditor|building-science-instructor|junior-engineer|junior-architect|building-home-performance-contractor|building-performance-diagnostician|sustainability-specialist|residential-building-code-official-with-green-building-expertise|residential-energy-auditor|real-estate-appraiser-with-green-building-expertise|real-estate-agent-with-green-building-expertise"
								data-tooltips="This move typically requires post-secondary training and strong management skills.|Experience in building design, sustainable design and green construction would support this move.|Additional training and certification would support this advancement.|Additional training and certification would support this advancement.|A two or four-year degree in a related field and additional experience is needed to advance.|A Bachelor’s Degree in a related field and additional experience is typically needed to advance.|A Bachelor’s Degree in a related field and additional experience is typically needed to advance.|Substantial work experience and/or additional technical training would support this move.|A Bachelor’s Degree in a related field and additional experience is typically needed to advance.|A Bachelor’s Degree in a related field and additional experience is typically needed to advance.|Post-secondary training and additional experience would likely support this advancement.|No additional requirements are needed for this advancement.|A Real Estate Appraiser License/Certification is required for advancement.|A Real Estate license is required for this advancement."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">
									Certified Home Energy Rater/Assessor/Home Inspector
								</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">
											Certified Home Energy Rater/Assessor/Home Inspector
										</div>
										<p>
											Certified Home Energy Raters/Assessors/Home Inspectors
											collects and analyzes building data and tests building
											functions to determine the energy performance/rating,
											safety, and durability of a home.
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/certified-home-energy-rater-assessor-home-inspector"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
							<div
								className="point x10-architecture x10-left y70-high-entry"
								data-slug="draftsperson"
								data-routes="insulation-apprentice|insulation-air-sealing-technician|energy-efficiency-technician-commercial|building-performance-installer|residential-energy-auditor|energy-efficiency-technician-residential|certified-home-energy-rater-assessor-home-inspector|junior-engineer|junior-architect"
								data-tooltips="Willingness to participate in an approved apprenticeship training program is required for this move.|No additional experience is needed for this advancement.|No additional experience is needed for this advancement.|No additional experience is needed for this advancement.|Additional experience and industry certification would facilitate this advancement.|No additional experience is needed for this advancement.|Additional experience and industry certification would facilitate this advancement.|A Bachelor’s Degree is typically needed to advance.|A Bachelor’s Degree is typically needed to advance."
							>
								<a href="#" className="square">
									<span className="border"></span>
									<span className="dot"></span>
								</a>
								<div className="title">Draftsperson</div>
								<div className="description">
									<div className="description-screen"></div>
									<div className="description-box">
										<div className="description-title">Draftsperson</div>
										<p>
											Draftspersons creates technical drawings based on given
											specifications and calculations using computer-aided
											design (CAD).
										</p>
										<a
											href="https://greenbuildingscareermap.org/jobs/draftsperson"
											className="button"
										>
											Job Detail
										</a>
										<a href="#" className="close"></a>
										<div className="arrow"></div>
										<div className="arrow border"></div>
									</div>
								</div>
							</div>
						</div>
						<div className="map-row">
							<div className="row-label advanced">
								<div className="title">
									<span>Advanced</span>
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
									<span>Mid-Level</span>
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
									<span>Entry</span>
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
									<span>Test</span>
								</div>
							</div>
							<div className="block entry architecture"></div>
							<div className="block entry operations"></div>
							<div className="block entry commercial"></div>
							<div className="block entry residential"></div>
						</div>
						<div className="map-row vert-match">
							<div className="axis-label">
								<div
									className="axis-info tooltipped vert-match-box-1"
									data-slug="axis-info"
								>
									<a href="#" className="tooltip-toggle vcenter">
										<i className="icon icon-help-circle"></i>
									</a>
									<div className="tooltip">
										<div className="tooltip-box">
											<div className="close-float"></div>
											<p dir="ltr">
												Along the y-axis, jobs sit at three skill levels:
												<strong>ENTRY LEVEL</strong> (requiring a high school
												diploma or equivalent, and no specialized training or
												work experience); <strong>MID LEVEL</strong> (requiring
												a minimum of 1-4 years’ experience with post-secondary
												training preferred); <strong>ADVANCED</strong> (5+
												years’ experience, journey-level training, or bachelor's
												level education).
											</p>
											<p dir="ltr">
												Along the x-axis, jobs fall into four broad sectors:
												Architecture, Engineering &amp; Other Professional
												Services; Building Operations/Facility Management;
												Commercial &amp; Institutional Construction &amp;
												Retrofitting; and Residential &amp; Multifamily
												Construction &amp; Retrofitting. There is much overlap
												and conversation between these linked segments of the
												Green Buildings Career Map value chain.
												<br />
											</p>
											<a href="#" className="close"></a>
											<div className="arrow"></div>
											<div className="arrow border"></div>
										</div>
									</div>
								</div>
							</div>
							<div className="col-label architecture">
								<div className="tail left"></div>
								<div className="tail right"></div>
								<div className="title vert-match-box-1">
									<div className="vcenter">
										Architecture, Engineering &amp; Other Professional Services
									</div>
								</div>
							</div>
							<div className="col-label operations">
								<div className="tail left"></div>
								<div className="tail right"></div>
								<div className="title vert-match-box-1">
									<div className="vcenter">
										Building Operations/Facility Management
									</div>
								</div>
							</div>
							<div className="col-label commercial">
								<div className="tail left"></div>
								<div className="tail right"></div>
								<div className="title vert-match-box-1">
									<div className="vcenter">
										Commercial &amp; Institutional Construction &amp;
										Retrofitting
									</div>
								</div>
							</div>
							<div className="col-label residential">
								<div className="tail left"></div>
								<div className="tail right"></div>
								<div className="title vert-match-box-1">
									<div className="vcenter">
										Residential &amp; Multifamily Construction &amp;
										Retrofitting
									</div>
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
