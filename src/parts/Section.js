import React from "react";
import Fade from "react-reveal/Fade";

export default function Section({ heading, subheading }) {
	return (
		<Fade bottom>
			<section className="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
				<div className="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">
					<div className="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
						<Fade bottom delay={500}>
							<h2 className="m-0 text-xl pb-2 font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
								{heading}
							</h2>
							<p className="pt-4 pb-8 m-0 leading-7 text-gray-500 border-0 border-gray-300 sm:pr-10 lg:text-lg">
								{subheading}
							</p>
						</Fade>
					</div>
					<div className="box-border relative w-full max-w-md mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
						<Fade bottom delay={600}>
							<p className="pb-6 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
								I am comfortable to using several technologies,
								including:
							</p>
							<ul className="p-0 m-0 leading-6 border-0 border-gray-300">
								<li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
									<span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
										<span className="text-sm font-bold">✓</span>
									</span>{" "}
									Frontend (HTML, CSS, JS, React JS, Bootstrap,
									Tailwind).
								</li>
								<li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
									<span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
										<span className="text-sm font-bold">✓</span>
									</span>{" "}
									Backend (PHP, Laravel, Firebase).
								</li>
								<li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
									<span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
										<span className="text-sm font-bold">✓</span>
									</span>{" "}
									Design (Figma, Photoshop).
								</li>
								<li className="box-border relative py-1 pl-0 text-left text-gray-500 border-solid">
									<span className="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-green-300 rounded-full">
										<span className="text-sm font-bold">✓</span>
									</span>{" "}
									SEO and Social Media Marketing.
								</li>
							</ul>
						</Fade>
					</div>
				</div>
			</section>
		</Fade>
	);
}
