import React from "react";
import Fade from "react-reveal/Fade";

export default function PortfolioItems({ data }) {
	return data.map((type, index1) => {
		return (
			<section className="relative w-full bg-white" key={`type-${index1}`}>
				<div className="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
					<Fade bottom>
						<h1 className="mb-1 text-4xl pt-10 font-extrabold leading-none text-gray-900 lg:text-4xl xl:text-5xl sm:mb-3">
							{type.title}
						</h1>
						<p className="text-lg font-medium text-gray-500 sm:text-2xl">
							{type.subtitle}
						</p>
						<div className="flex flex-row h-full pb-10 mt-8 sm:mt-16">
							<div className="grid grid-cols-12 col-span-12 gap-7">
								{type.items.length === 0 ? (
									<div classNameName="flex flex-col text-center">
										<h1>Coming Soon!</h1>
									</div>
								) : (
									type.items.map((item, index2) => {
										return (
											<Fade bottom delay={200 * index2}>
												<div
													className="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4"
													key={`type-${index1}-item-${index2}`}
												>
													<a
														href={item.url}
														className="block transition duration-200 ease-out transform hover:scale-110"
														target="_blank"
													>
														<img
															className="object-cover w-full shadow-sm"
															src={
																(process.env.PUBLIC_URL,
																item.img)
															}
														/>
													</a>
													<div className="relative w-full flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
														<div
															className={
																item.color +
																" absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block"
															}
														>
															<span>{item.type}</span>
														</div>
														<h2 className="text-base font-bold sm:text-lg md:text-xl">
															<p>{item.name}</p>
														</h2>
														<p className="mt-2 text-sm text-gray-500">
															{item.text}
														</p>
													</div>
												</div>
											</Fade>
										);
									})
								)}
							</div>
						</div>
					</Fade>
				</div>
			</section>
		);
	});
}
