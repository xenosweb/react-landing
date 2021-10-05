import React from "react";
import Fade from "react-reveal/Fade";

export default function CTA({ heading, sub, call }) {
	return (
		<Fade bottom delay={100}>
			<section className="py-8 leading-7 bg-gray-800 sm:py-12 md:py-16 lg:py-24">
				<div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
					<div className="flex flex-col items-start leading-7 text-white border-0 border-gray-200 lg:items-center lg:flex-row">
						<Fade right delay={300}>
							<div className="box-border flex-1 text-center border-solid sm:text-left">
								<h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-white border-0 border-gray-200 sm:text-5xl">
									{heading}
								</h2>
								<p className="mt-2 text-xl text-left text-white border-0 border-gray-200 sm:text-2xl">
									{sub}
								</p>
							</div>
						</Fade>
						<Fade right delay={500}>
							<a
								href="mailto:coderaulia@gmail.com"
								className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-sans text-base leading-none text-black no-underline bg-white border border-white border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-gray-200 hover:border-gray-200 hover:text-gray-800 focus-within:bg-green-700 focus-within:border-green-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl"
							>
								{call}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5 ml-2"
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
							</a>
						</Fade>
					</div>
				</div>
			</section>
		</Fade>
	);
}
