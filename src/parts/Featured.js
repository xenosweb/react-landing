import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Featured() {
	return (
		<Fade bottom>
			<section className="relative w-full bg-white">
				<div className="absolute w-full h-32 pt-15 bg-gradient-to-b from-gray-100 to-white"></div>
				<div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
					<h1 className="mb-1 text-4xl font-extrabold leading-none text-gray-900 lg:text-4xl xl:text-5xl sm:mb-3">
						<a href="#_">Our Latest Works</a>
					</h1>
					<p className="text-lg font-medium text-gray-500 sm:text-2xl">
						Here are some cool projects we've been working on.
					</p>
					<div className="flex flex-row h-full pb-10 mt-8 sm:mt-16">
						<div className="grid grid-cols-12 col-span-12 gap-7">
							<Fade bottom delay={300}>
								<div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
									<a
										href="#_"
										className="block transition duration-200 ease-out transform hover:scale-110"
									>
										<img
											className="object-cover w-full shadow-sm"
											src={
												process.env.PUBLIC_URL +
												"/images/matapena.jpg"
											}
										/>
									</a>
									<div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
										<div className="bg-blue-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
											<span>Website</span>
										</div>
										<h2 className="text-base font-bold sm:text-lg md:text-xl">
											<a href="#_">News website</a>
										</h2>
										<p className="mt-2 text-sm text-gray-500">
											Local news portal website
										</p>
									</div>
								</div>
							</Fade>
							<Fade bottom delay={600}>
								<div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
									<a
										href="#_"
										className="block transition duration-200 ease-out transform hover:scale-110"
									>
										<img
											className="object-cover w-full shadow-sm"
											src={
												process.env.PUBLIC_URL +
												"/images/assessment.jpg"
											}
										/>
									</a>
									<div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
										<div className="bg-red-500 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
											<span>Web-App</span>
										</div>
										<h2 className="text-base font-bold sm:text-lg md:text-xl">
											<a href="#_">Web app</a>
										</h2>
										<p className="mt-2 text-sm text-gray-500">
											Web app for Assessment
										</p>
									</div>
								</div>
							</Fade>
							<Fade bottom delay={900}>
								<div className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
									<a
										href="#_"
										className="block transition duration-200 ease-out transform hover:scale-110"
									>
										<img
											className="object-cover w-full items-center shadow-sm"
											src={
												process.env.PUBLIC_URL +
												"/images/roydanrekan.jpg"
											}
										/>
									</a>
									<div className="relative flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
										<div className="bg-blue-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
											<span>Website</span>
										</div>
										<h2 className="text-base font-bold sm:text-lg md:text-xl">
											<a href="#_">Profile website</a>
										</h2>
										<p className="mt-2 text-sm text-gray-500">
											Lawyer company profile
										</p>
									</div>
								</div>
							</Fade>
							<Fade bottom delay={900}>
								<div className="flex flex-col items-center col-span-12">
									<Link
										to="/portfolio"
										className="flex items-center px-6 py-3 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
									>
										See other works
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-5 h-5 ml-1"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
										>
											<line x1="5" y1="12" x2="19" y2="12"></line>
											<polyline points="12 5 19 12 12 19"></polyline>
										</svg>
									</Link>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
