import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function Header() {
	const isLargeScreen = useMediaQuery({ minWidth: 1024 });
	const [expanded, setExpanded] = useState(false);
	const toggleExpanded = () => {
		setExpanded((prevExpanded) => !prevExpanded);
	};

	useEffect(() => {
		if (isLargeScreen) {
			setExpanded(false);
		}
	}, [isLargeScreen]);
	return (
		<header
			className="py-4 md:py-6 bg-black text-gray-100"
			x-data="{expanded: false}"
		>
			<div className="container px-4 mx-auto sm:px-6 lg:px-8">
				<div className="flex items-center justify-between ">
					<div className="flex-shrink-0">
						<Link
							to="/"
							title=""
							className="flex rounded items-center outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 font-bold text-xl gap-1 text-white"
						>
							<div>
								<svg
									className="w-auto h-8 "
									width="61"
									height="61"
									viewBox="0 0 61 61"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M27.4126 57.8835C27.5657 58.0977 27.6448 58.3559 27.6379 58.6191C27.6311 58.8822 27.5387 59.136 27.3747 59.3419C27.2107 59.5479 26.984 59.6947 26.7291 59.7603C26.4741 59.8259 26.2047 59.8066 25.9617 59.7053C19.389 56.9181 11.709 50.8853 11.709 40.4999C11.709 27.7744 24.3963 22.9199 27.4999 13.0035C28.5174 9.89112 28.997 6.62803 28.9181 3.35445C28.9126 3.16617 28.9666 2.98094 29.0725 2.82517C29.1784 2.6694 29.3308 2.55104 29.5079 2.48695C29.6851 2.42287 29.8779 2.41634 30.059 2.46829C30.24 2.52024 30.4001 2.62802 30.5163 2.77627C34.135 7.25894 36.2038 12.7935 36.4126 18.5508C36.8217 27.3217 27.4345 34.369 24.3363 41.4599C21.549 47.9453 24.7726 54.229 27.4126 57.8835Z"
										fill="url(#paint0_linear_808_7799)"
									/>
									<path
										d="M49.9037 52.5998C49.9037 53.7457 49.4485 54.8446 48.6382 55.6549C47.8279 56.4651 46.729 56.9204 45.5831 56.9204C44.4372 56.9204 43.3382 56.4651 42.528 55.6549C41.7177 54.8446 41.2625 53.7457 41.2625 52.5998C41.2635 52.2538 41.3092 51.9095 41.3983 51.5752L34.9298 48.3533C34.1378 49.0984 33.0915 49.5134 32.0041 49.5137C30.8583 49.5137 29.7593 49.0585 28.949 48.2482C28.1388 47.4379 27.6836 46.339 27.6836 45.1931C27.6836 44.0472 28.1388 42.9482 28.949 42.138C29.7593 41.3277 30.8583 40.8725 32.0041 40.8725C33.0915 40.8728 34.1378 41.2878 34.9298 42.0329L41.3983 38.811C41.3092 38.4767 41.2635 38.1323 41.2625 37.7864C41.2625 36.9319 41.5159 36.0965 41.9907 35.386C42.4654 34.6755 43.1402 34.1217 43.9297 33.7947C44.7192 33.4677 45.5879 33.3821 46.426 33.5488C47.2641 33.7155 48.034 34.127 48.6382 34.7313C49.2424 35.3355 49.6539 36.1054 49.8206 36.9435C49.9874 37.7816 49.9018 38.6503 49.5748 39.4398C49.2478 40.2293 48.694 40.9041 47.9835 41.3788C47.273 41.8536 46.4376 42.107 45.5831 42.107C44.4957 42.1067 43.4494 41.6917 42.6574 40.9466L36.1889 44.1685C36.3698 44.8396 36.3698 45.5466 36.1889 46.2177L42.6574 49.4396C43.4494 48.6945 44.4957 48.2795 45.5831 48.2792C46.729 48.2792 47.8279 48.7344 48.6382 49.5447C49.4485 50.3549 49.9037 51.4539 49.9037 52.5998Z"
										fill="url(#paint1_linear_808_7799)"
									/>
									<defs>
										<linearGradient
											id="paint0_linear_808_7799"
											x1="24.0673"
											y1="2.43359"
											x2="24.0673"
											y2="59.7985"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#2DD4BF" />
											<stop offset="1" stopColor="#7217F6" stopOpacity="0.8" />
										</linearGradient>
										<linearGradient
											id="paint1_linear_808_7799"
											x1="38.7936"
											y1="33.4658"
											x2="38.7936"
											y2="56.9204"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#2DD4BF" />
											<stop offset="1" stopColor="#7217F6" stopOpacity="0.8" />
										</linearGradient>
									</defs>
								</svg>
							</div>
							<span>ZKLiquid</span>
						</Link>
					</div>

					<div className="flex lg:hidden">
						<button
							type="button"
							className="text-teal-500"
							onClick={toggleExpanded}
						>
							{!expanded ? (
								<span aria-hidden="true">
									<svg
										className="w-7 h-7"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="1.5"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								</span>
							) : (
								<span aria-hidden="true">
									<svg
										className="w-7 h-7"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</span>
							)}
						</button>
						<button
							type="button"
							className="text-gray-900"
							onClick={() => setExpanded(!expanded)}
							aria-expanded={expanded}
						>
							<span
								style={{ display: !expanded ? "block" : "none" }}
								aria-hidden="true"
							>
								<svg
									className="w-7 h-7"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="1.5"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</span>

							<span
								style={{ display: expanded ? "block" : "none" }}
								aria-hidden="true"
							>
								<svg
									className="w-7 h-7"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</span>
						</button>
					</div>

					<div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
						{/* <a
                href="#"
                title=""
                className="text-base font-medium  transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                {" "}
                About Us
              </a> */}
					</div>

					<div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
						<a
							href="https://docs.zkliquid.io/"
							title=""
							className="text-base font-medium text-gray-50 transition-all duration-200 rounded  font-pj hover:text-opacity-50 "
							target="_blank"
						>
							{" "}
							Documentation
						</a>

						<a
							href="https://app.zkliquid.io/"
							title=""
							className="inline-flex items-center justify-center px-6 py-2  text-base font-bold leading-7 text-black transition-all duration-200 bg-teal-500 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
							role="button"
							target="_blank"
						>
							Launch App
						</a>
					</div>
				</div>

				{expanded && (
					<nav x-show="expanded" x-collapse>
						<div className="px-1 py-8">
							<div className="grid gap-y-7">
								{/* <a
                    href="#"
                    title=""
                    className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                  >
                    {" "}
                    About Us
                  </a> */}

								<a
									href="https://docs.zkliquid.io/"
									title=""
									className="flex items-center p-3 -m-3 text-base font-medium text-gray-50 transition-all duration-200 rounded-xl "
									target="_blank"
								>
									{" "}
									Documentation
								</a>

								<a
									href="https://app.zkliquid.io/"
									title=""
									className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-teal-500 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
									role="button"
									target="_blank"
								>
									Launch App
								</a>
							</div>
						</div>
					</nav>
				)}
			</div>
		</header>
	);
}

export default Header;
