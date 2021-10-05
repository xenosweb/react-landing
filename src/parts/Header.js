import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

export default function Header() {
	return (
		<Fade>
			<section className="relative w-full px-8 text-gray-700 bg-white body-font">
				<div className="container flex flex-col flex-wrap items-center justify-between py-5 mx-auto md:flex-row max-w-7xl">
					<Link to="/">
						<p
							href="#"
							className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-black select-none"
						>
							.Coderaulia
						</p>
					</Link>

					<nav className="top-0 left-0 z-0 flex items-center justify-center w-full h-full py-5 -ml-0 space-x-5 text-base md:-ml-5 md:py-0 md:absolute">
						<Link
							to="/"
							className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
						>
							<span className="block">Home</span>
						</Link>
						<Link
							to="/about"
							className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
						>
							<span className="block">About</span>
						</Link>
						<Link
							to="/portfolio"
							className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
						>
							<span className="block">Portfolio</span>
						</Link>
						<Link
							to="/contact"
							className="relative font-medium leading-6 text-gray-600 transition duration-150 ease-out hover:text-gray-900"
							x-data="{ hover: false }"
						>
							<span className="block">Contact</span>
						</Link>
					</nav>

					<div className="relative z-10 inline-flex items-center space-x-3 md:ml-5 lg:justify-end">
						<span className="inline-flex rounded-md shadow-sm">
							<a
								href="mailto:coderaulia@gmail.com"
								className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
							>
								Get a Quote
							</a>
						</span>
					</div>
				</div>
			</section>
		</Fade>
	);
}
