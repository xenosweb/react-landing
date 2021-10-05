import React from "react";
import Fade from "react-reveal/Fade";

export default function MiniHero({ title, subtitle }) {
	return (
		<div>
			<section className="px-2 pt-24 pb-28 bg-green-50 md:px-0 shadow-inner shadow-xl drop-shadow-xl">
				<div className="container items-center max-w-6xl px-8 mx-auto xl:px-5">
					<div className="flex flex-col col-span-12 items-center sm:-mx-3">
						<div className="w-full sm:max-w-md lg:max-w-lg text-center md:pb-0">
							<Fade bottom>
								<h1 className="text-3xl font-extrabold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3">
									{title}
								</h1>
							</Fade>
							<Fade bottom delay={300}>
								<h2 className="text-gray-700 tracking-tight text-2xl pl-1">
									{subtitle}
								</h2>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
