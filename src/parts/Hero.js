import React from "react";
import Fade from "react-reveal/Fade";

export default function Hero() {
	return (
		<section className="px-2 pt-20 pb-28 bg-green-50 md:px-0 shadow-inner shadow-xl drop-shadow-xl">
			<div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
				<div className="flex flex-wrap items-center sm:-mx-3">
					<div className="w-full md:w-1/2 md:px-3">
						<div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
							<Fade bottom>
								<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
									<span className="block">Coderaulia &lt;/&gt;</span>
									<span className="block text-green-700">
										Web Developer
									</span>
								</h1>
							</Fade>
							<Fade bottom delay={300}>
								<p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">
									I design and build beautiful websites for
									individuals, community &amp; businesses around the
									globe.
								</p>
							</Fade>
							<Fade bottom delay={500}>
								<div className="relative flex flex-col sm:flex-row sm:space-x-4">
									<a
										href="mailto:coderaulia@gmail.com"
										className="flex items-center w-full px-6 py-3 mb-3 text-lg text-white bg-green-700 rounded-md sm:mb-0 hover:bg-green-800 sm:w-auto"
									>
										Try It Free
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5 ml-1"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<line x1={5} y1={12} x2={19} y2={12} />
											<polyline points="12 5 19 12 12 19" />
										</svg>
									</a>
									<a
										href="/portfolio"
										className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
									>
										See my Works
									</a>
								</div>
							</Fade>
						</div>
					</div>

					<Fade bottom delay={300}>
						<div className="w-full md:w-1/2">
							<div className="w-full h-auto overflow-hidden">
								<img
									src={process.env.PUBLIC_URL + "/images/vector.svg"}
									alt="Coderaulia"
								/>
							</div>
						</div>
					</Fade>
				</div>
			</div>
		</section>
	);
}
