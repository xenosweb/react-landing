import React from "react";

export default function PortfolioItems() {
	return (
		<section class="relative w-full bg-white">
			<div class="relative w-full px-5 py-10 mx-auto sm:py-12 md:py-16 md:px-10 max-w-7xl">
				<h1 class="mb-1 text-4xl pt-10 font-extrabold leading-none text-gray-900 lg:text-4xl xl:text-5xl sm:mb-3">
					<a href="#_">Websites</a>
				</h1>
				<p class="text-lg font-medium text-gray-500 sm:text-2xl">
					Here are some cool websites we've been working on.
				</p>
				<div class="flex flex-row h-full pb-10 mt-8 sm:mt-16">
					<div class="grid grid-cols-12 col-span-12 gap-7">
						<div class="flex flex-col items-start col-span-12 overflow-hidden shadow-sm rounded-xl md:col-span-6 lg:col-span-4">
							<a
								href="#_"
								class="block transition duration-200 ease-out transform hover:scale-110"
							>
								<img
									class="object-cover w-full shadow-sm"
									src={process.env.PUBLIC_URL + "/images/langgeng.jpg"}
								/>
							</a>
							<div class="relative w-full flex flex-col items-start px-6 bg-white border border-t-0 border-gray-200 py-7 rounded-b-2xl">
								<div class="bg-blue-400 absolute top-0 -mt-3 flex items-center px-3 py-1.5 leading-none w-auto inline-block rounded-full text-xs font-medium uppercase text-white inline-block">
									<span>Company Profile</span>
								</div>
								<h2 class="text-base font-bold sm:text-lg md:text-xl">
									<a href="#_">Furniture Company</a>
								</h2>
								<p class="mt-2 text-sm text-gray-500">
									Company profile website
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
