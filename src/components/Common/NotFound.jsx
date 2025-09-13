import { Link } from "react-router-dom";
// import { EmojiSad } from "iconsax-react";

export default function NotFound() {
	return (
		<div className="overflow-x-hidden bg-gray-100 h-screen justify-center ">
			<section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0">
				<div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
					<div className="max-w-3xl mx-auto text-center">
						<div className="flex flex-row mt-5 justify-center text-center items-center gap-2 ">
							{/* <EmojiSad size="42" color="#000000" /> */}
							<h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-5xl lg:leading-tight font-pj">
								Page not found!!!
							</h1>
						</div>

						<div className="relative inline-flex mt-10 group">
							<div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>

							<Link
								to="./"
								className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl "
								role="button"
							>
								Return to homepage
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
