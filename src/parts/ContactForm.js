import React from "react";
import Fade from "react-reveal/Fade";

export default function ContactForm() {
	return (
		<Fade bottom>
			<section className="w-full bg-white">
				<div className="mx-auto max-w-7xl">
					<div className="flex flex-col lg:flex-row">
						<div className="relative w-full bg-cover lg:w-6/12 xl:w-6/12">
							<Fade top delay={300}>
								<div className="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
									<div className="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
										<div className="relative">
											<h2 className="text-5xl font-bold text-gray-900 xl:text-6xl">
												I always open for consultation
											</h2>
										</div>
										<p className="text-2xl text-gray-700">
											Don't worry, if you still confused about your
											idea, send to me to get your solution!
										</p>
									</div>
								</div>
							</Fade>
						</div>

						<div className="w-full bg-white lg:w-6/12 xl:w-6/12">
							<Fade right delay={500}>
								<div className="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
									<h4 className="w-full text-3xl font-bold">
										Send me a Message!
									</h4>
									<div className="relative w-full mt-10 space-y-8">
										<div className="relative">
											<label className="font-medium text-gray-900">
												Name
											</label>
											<input
												type="text"
												className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50"
												placeholder="Enter Your Name"
											/>
										</div>
										<div className="relative">
											<label className="font-medium text-gray-900">
												Email
											</label>
											<input
												type="text"
												className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100  rounded-sm focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50"
												placeholder="Enter Your Email Address"
											/>
										</div>
										<div className="relative">
											<label className="font-medium text-gray-900">
												Subject
											</label>
											<input
												type="text"
												className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100  rounded-sm focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50"
												placeholder="Enter Your Email Address"
											/>
										</div>
										<div className="relative">
											<label className="font-medium text-gray-900">
												Message
											</label>
											<textarea
												className="block w-full px-4 py-4 mt-2 text-xl placeholder-gray-400 bg-gray-100  rounded-sm focus:outline-none focus:ring-1 focus:ring-green-600 focus:ring-opacity-50"
												placeholder="Message"
											></textarea>
										</div>
										<div className="relative">
											<button className="inline-block w-full px-5 py-4 text-lg font-medium text-center text-white transition duration-200 bg-green-600 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
												Send
											</button>
										</div>
										<div classNameName="relative">
											<p classNameName="font-medium text-center text-md text-gray-600">
												Or you can send me an email if any error
												here.{" "}
												<a
													href="mailto:coderaulia@gmail.com"
													classNameName="text-gray-400 italic hover:underline"
												>
													Email me
												</a>
											</p>
										</div>
									</div>
								</div>
							</Fade>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
