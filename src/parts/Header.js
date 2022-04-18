import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
import "./header.css";

export default function Header() {
	return (
		<Fade>
			<section className="h-full w-full border-box transition-all duration-500 linear lg:px-24 md:px-20 px-8 py-6 bg-gray-700 text-white shadow-lg">
				<header className="container mx-auto flex flex-wrap flex-row items-center justify-between">
					<img
						src={(process.PUBLIC_URL, "logo-transparent.png")}
						alt="Aulia Satrio Wibowo"
						className="w-14 mr-2"
					/>
					<Link
						to="/"
						className="flex p-0 lg:w-1/5 text-xl font-bold title-font items-center lg:items-start"
					>
						Aulia
					</Link>
					<nav className="lg:flex hidden flex-wrap items-center text-base md:ml-auto lg:space-y-0 space-y-6 lg:space-x-12 space-x-0">
						<Link to="/" className="nav-link">
							Home
						</Link>
						<Link to="/about" className="nav-link">
							About
						</Link>
						<Link to="/portfolio" className="nav-link">
							Portfolio
						</Link>
						<Link to="/contact" className="nav-link">
							Contact
						</Link>
					</nav>
					<label
						for="menu-toggle"
						className="cursor-pointer lg:hidden block"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="#ffffff"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h16M4 18h16"
							></path>
						</svg>
					</label>
					<input className="hidden" type="checkbox" id="menu-toggle" />
					<div
						className="hidden w-full flex-wrap items-center text-base justify-center"
						id="menu"
					>
						<nav className="lg:space-x-12 space-x-0 lg:flex items-center justify-between text-base pt-8 lg:pt-0 lg:space-y-0 space-y-6">
							<Link to="/" className="nav-link block">
								Home
							</Link>
							<Link to="/about" className="nav-link block">
								About
							</Link>
							<Link to="/portfolio" className="nav-link block">
								Portfolio
							</Link>
							<Link to="/contact" className="nav-link block">
								Contact
							</Link>
						</nav>
					</div>
				</header>
			</section>
		</Fade>
	);
}
